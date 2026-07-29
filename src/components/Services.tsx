import Reveal from "@/components/Reveal";
import {
  selectedCredits,
  services,
  siteProfile,
  toolsClaimed,
  toolsLearning,
} from "@/content/site";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-nav bg-[var(--bg)] py-20 md:py-28"
    >
      <div className="container-site">
        <Reveal className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Services
          </p>
          <h2 className="font-display text-3xl text-[var(--text)] md:text-4xl">
            What I offer
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Session and live musician work first - with direction and
            engineering when you need the room covered too.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((block, i) => (
            <Reveal
              key={block.title}
              delayMs={i * 70}
              className="border-t border-white/10 pt-5"
            >
              <h3 className="font-display text-xl text-[var(--text)]">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {block.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={100} className="mt-14 border-t border-white/10 pt-10">
          <h3 className="mb-4 font-display text-2xl text-[var(--text)]">
            Selected credits
          </h3>
          <ul className="max-w-3xl space-y-3 text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
            {selectedCredits.map((c) => (
              <li key={c} className="flex gap-3">
                <span
                  className="flex h-[1.625em] w-3 shrink-0 items-center justify-center"
                  aria-hidden
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delayMs={140}
          className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2"
        >
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--text)]">
              Tools
            </h3>
            <p className="flex flex-wrap gap-2">
              {toolsClaimed.map((t) => (
                <span
                  key={t}
                  className="border border-white/15 px-2.5 py-1 text-xs text-[var(--text-muted)]"
                >
                  {t}
                </span>
              ))}
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--text)]">
              Studying
            </h3>
            <p className="flex flex-wrap gap-2">
              {toolsLearning.map((t) => (
                <span
                  key={t}
                  className="border border-[var(--accent)]/30 px-2.5 py-1 text-xs text-[var(--accent)]"
                >
                  {t}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              Building interactive / game-audio skills through study, jams, and
              GameSoundCon.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={180} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={siteProfile.resumePdf}
            className="resume-button btn-primary w-full text-center sm:w-auto"
            download
          >
            Download resume (PDF)
          </a>
          <a
            href={siteProfile.cvPdf}
            className="resume-button btn-secondary w-full text-center sm:w-auto"
            download
          >
            Download CV (PDF)
          </a>
          <p className="basis-full mt-1 text-xs text-[var(--text-muted)]">
            Resume for applications · Full CV available
          </p>
        </Reveal>
      </div>
    </section>
  );
}
