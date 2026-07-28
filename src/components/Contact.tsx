"use client";

import { FormEvent, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { siteProfile } from "@/content/site";
import { stripCrLf } from "@/lib/contact-api";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const startedAtRef = useRef<number>(Date.now());
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const subjectRaw = String(formData.get("subject") ?? "");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: stripCrLf(subjectRaw),
          message: formData.get("message"),
          website: formData.get("website"),
          startedAt: startedAtRef.current,
        }),
      });

      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error ?? "Failed to send message");
      }

      form.reset();
      startedAtRef.current = Date.now();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-[var(--bg-elevated)] py-20 md:py-28"
    >
      <div className="container-site">
        <Reveal className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Contact
          </p>
          <h2 className="font-display text-3xl text-[var(--text)] md:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            {siteProfile.contactMessage}
          </p>
          <p className="mt-4 text-sm text-[var(--text-muted)]">
            <a
              href={`mailto:${siteProfile.email}`}
              className="text-[var(--accent)] underline-offset-4 hover:underline"
            >
              {siteProfile.email}
            </a>
            <span className="mx-2 opacity-40">·</span>
            {siteProfile.location}
          </p>
        </Reveal>

        <Reveal delayMs={80}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative max-w-2xl"
          >
            <label htmlFor="contact-website-hp" className="honeypot-field">
              Leave this field blank
              <input
                id="contact-website-hp"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>

            <div className="mb-6">
              <label htmlFor="name" className="field-label">
                Name <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={120}
                autoComplete="name"
                className="field-input"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="field-label">
                Email <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                className="field-input"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="field-label">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                maxLength={200}
                className="field-input"
                placeholder="Live sound / session / apprenticeship"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="field-label">
                Message <span className="text-[var(--accent)]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={6}
                className="field-input min-h-[140px] resize-y"
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>

            {status === "success" ? (
              <p className="mt-4 text-sm text-[var(--accent)]" role="status">
                Message sent. Thank you.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 text-sm text-red-300" role="alert">
                {errorMessage}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
