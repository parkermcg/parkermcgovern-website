import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/**
 * Lead intake — CLAUDE.md §9.
 *
 * Two delivery channels, attempted independently so one failing does not
 * lose the lead:
 *   1. Email to Parker via Resend
 *   2. Durable append to LEAD_WEBHOOK_URL (Apps Script / Zapier / Make)
 *
 * A submission is only reported successful if at least one channel accepted
 * it. Silent success on a dropped lead is the failure mode this exists to
 * prevent.
 */

type Payload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

/**
 * Per-IP throttle. In-memory, so it resets on cold start and is per-instance
 * — enough to stop casual abuse, not a substitute for a shared store if
 * volume ever justifies one.
 */
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > LIMIT;
}

function validate(body: Record<string, unknown>):
  | { ok: true; data: Payload }
  | { ok: false; error: string } {
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const message = str(body.message);

  if (!name || name.length > 100) return { ok: false, error: "Please enter your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200)
    return { ok: false, error: "Please enter a valid email address." };
  if (phone.replace(/\D/g, "").length < 10 || phone.length > 40)
    return { ok: false, error: "Please enter a phone number with at least 10 digits." };
  if (message.length > 2000)
    return { ok: false, error: "Please shorten your message to under 2000 characters." };

  return { ok: true, data: { name, email, phone, message } };
}

async function sendEmail(d: Payload): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM;
  const to = process.env.LEAD_TO || site.contact.email;
  if (!key || !from) return false;

  const body = [
    `Name:  ${d.name}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone}`,
    "",
    d.message || "(no message)",
    "",
    `— submitted via ${site.url}`,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: d.email,
        subject: `New enquiry — ${d.name}`,
        text: body,
      }),
    });
    if (!res.ok) console.error("[lead] resend failed", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("[lead] resend threw", err);
    return false;
  }
}

async function appendToStore(d: Payload): Promise<boolean> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...d, receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) console.error("[lead] webhook failed", res.status);
    return res.ok;
  } catch (err) {
    console.error("[lead] webhook threw", err);
    return false;
  }
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please call or email instead." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Honeypot: a real person never fills a hidden field. Accept and discard,
  // so a bot sees success and does not retry.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const result = validate(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const [emailed, stored] = await Promise.all([
    sendEmail(result.data),
    appendToStore(result.data),
  ]);

  if (!emailed && !stored) {
    console.error("[lead] NO DELIVERY CHANNEL SUCCEEDED", {
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone,
    });
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your message. Please call or email directly — I don't want to miss you.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
