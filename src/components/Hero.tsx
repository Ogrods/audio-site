import Image from "next/image";
import Reveal from "@/components/Reveal";
import { siteProfile } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[var(--bg)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_68%]"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden />
        <div className="hero-grain absolute inset-0" aria-hidden />
      </div>

      <div className="container-site relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32">
        <Reveal className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
            Available for hire
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-[var(--text)] sm:text-6xl md:text-7xl">
            {siteProfile.name}
          </h1>
          <p className="mt-4 font-display text-xl text-[var(--text)]/90 md:text-2xl">
            {siteProfile.title}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
            {siteProfile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={siteProfile.resumePdf} className="btn-primary" download>
              Download resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
            <a href="#work" className="btn-ghost">
              Listen
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
