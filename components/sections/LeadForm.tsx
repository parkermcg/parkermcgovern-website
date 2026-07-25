"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

/**
 * Short primary form — the minimum needed to follow up (CLAUDE.md §9).
 *
 * Both outcome states are designed. The failure state always surfaces the
 * phone and email fallback, so a broken pipeline still cannot lose a lead.
 */

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-[3px] border border-rule-invert bg-ground-raised px-3.5 py-3 text-ink-invert placeholder:text-ink-invert-muted/60 focus:border-brass-light focus:outline-none";
const label = "mb-2 block text-small font-semibold text-ink-invert";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          message: fd.get("message"),
          company: fd.get("company"), // honeypot
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError(
        "Couldn't reach the server. Please check your connection, or call directly.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-[6px] border border-rule-invert bg-ground-raised p-8 text-center"
      >
        <p className="font-display text-h3 text-ink-invert">
          Got it — thanks.
        </p>
        <p className="mx-auto mt-3 max-w-[46ch] text-ink-invert-muted">
          I read every message myself and I&apos;ll get back to you within one
          business day. If it&apos;s time-sensitive, calling is faster.
        </p>
        <a
          href={site.contact.phoneHref}
          className="mt-5 inline-block font-mono text-lede text-brass-light hover:underline"
        >
          {site.contact.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className={label}>
            Your name
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className={label}>
            Phone
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="lead-email" className={label}>
          Email
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="lead-message" className={label}>
          What are you trying to do?
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          className={field}
          placeholder="Renewing in the spring, buying a first place, not sure where to start — anything helps."
        />
      </div>

      {/* Honeypot — hidden from people, catches bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="lead-company">Company</label>
        <input id="lead-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <div
          role="alert"
          className="rounded-[3px] border border-[#E8857A]/40 bg-[#9C3A31]/15 p-4 text-small text-[#F3B5AD]"
        >
          <p className="font-semibold text-[#E8857A]">{error}</p>
          <p className="mt-2">
            You can reach me directly at{" "}
            <a href={site.contact.phoneHref} className="underline underline-offset-2">
              {site.contact.phone}
            </a>{" "}
            or{" "}
            <a href={site.contact.emailHref} className="underline underline-offset-2">
              {site.contact.email}
            </a>
            .
          </p>
        </div>
      ) : null}

      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Sending…" : "Send my message"}
      </Button>

      <p className="text-[0.78rem] leading-relaxed text-ink-invert-muted">
        I&apos;ll only use these details to reply to you. No newsletters, no
        passing them on.
      </p>
    </form>
  );
}
