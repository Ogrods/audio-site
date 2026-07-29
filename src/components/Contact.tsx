import Reveal from "@/components/Reveal";
import { siteProfile } from "@/content/site";

export default function Contact() {
  const mailto = `mailto:${siteProfile.email}?subject=${encodeURIComponent(
    "Audio hire inquiry"
  )}`;

  return (
    <section
      id="contact"
      className="scroll-mt-nav bg-[var(--bg-elevated)] py-20 md:py-28"
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
            {siteProfile.location}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a href={mailto} className="btn-primary w-full text-center sm:w-auto">
              Email {siteProfile.email}
            </a>
            <p className="text-sm text-[var(--text-muted)] sm:text-base">
              {siteProfile.email}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
