import Reveal from "@/components/Reveal";
import {
  hireFor,
  siteProfile,
  toolsClaimed,
  toolsLearning,
} from "@/content/site";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 bg-[var(--bg)] py-20 md:py-28"
    >
      <div className="container-site">
        <Reveal className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Experience
          </p>
          <h2 className="font-display text-3xl text-[var(--text)] md:text-4xl">
            What I bring
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Live sound, studio engineering, music direction, and performance.
            Currently studying game-audio tools as well.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {hireFor.map((block, i) => (
            <Reveal key={block.title} delayMs={i * 70} className="border-t border-white/10 pt-5">
              <h3 className="font-display text-xl text-[var(--text)]">
                {block.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {block.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120} className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
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
              Building toward interactive and game audio through study, game
              jams, and GameSoundCon.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={160} className="mt-10">
          <a href={siteProfile.resumePdf} className="btn-primary" download>
            Download resume (PDF)
          </a>
        </Reveal>
      </div>
    </section>
  );
}
