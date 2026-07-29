import Image from "next/image";
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
          quality={75}
          sizes="100vw"
          className="object-cover object-[center_45%] brightness-100 contrast-[1.02] md:brightness-[1.08]"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden />
        <div className="hero-grain absolute inset-0" aria-hidden />
      </div>

      <div className="container-site relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="hero-copy max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
            Available for hire
          </p>
          <h1 className="font-display text-4xl leading-[1.05] text-[var(--text)] sm:text-5xl md:text-6xl lg:text-7xl">
            {siteProfile.name}
          </h1>
          <p className="mt-4 font-display text-lg text-[var(--text)]/90 sm:text-xl md:text-2xl">
            {siteProfile.title}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
            {siteProfile.tagline}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a
              href={siteProfile.resumePdf}
              className="resume-button btn-primary col-span-2 w-full text-center sm:w-auto"
              download
            >
              Download resume
            </a>
            <a
              href={siteProfile.cvPdf}
              className="resume-button btn-secondary hero-cta-chip col-span-2 w-full text-center sm:w-auto"
              download
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="btn-secondary hero-cta-chip w-full rounded-sm text-center sm:w-auto"
            >
              Contact
            </a>
            <a
              href="#work"
              className="btn-secondary hero-cta-chip w-full rounded-sm text-center sm:w-auto"
            >
              Listen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
