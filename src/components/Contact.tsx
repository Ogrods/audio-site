import Reveal from "@/components/Reveal";
import { siteProfile } from "@/content/site";

export default function Contact() {
  const mailto = `mailto:${siteProfile.email}?subject=${encodeURIComponent(
    "Audio hire inquiry"
  )}`;

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
            {siteProfile.location}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={mailto} className="btn-primary">
              Email {siteProfile.email}
            </a>
            <a
              href={mailto}
              className="font-display text-xl text-[var(--accent)] underline-offset-4 hover:underline"
            >
              {siteProfile.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
