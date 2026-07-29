import Image from "next/image";
import Reveal from "@/components/Reveal";
import { aboutParagraphs } from "@/content/site";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-nav bg-[var(--bg-elevated)] py-20 md:py-28"
    >
      <div className="container-site grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
          <Image
            src="/images/about.jpg"
            alt="Dan Ogrodnik"
            fill
            quality={75}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
              About
            </p>
            <h2 className="font-display text-3xl text-[var(--text)] md:text-4xl">
              Session and live musician for stage, studio, and pit.
            </h2>
          </Reveal>
          <div className="mt-6 space-y-5">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={p.slice(0, 24)} delayMs={60 + i * 70}>
                <p className="text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
