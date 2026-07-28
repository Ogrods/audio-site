import Image from "next/image";
import Reveal from "@/components/Reveal";
import { proofImages, reviews } from "@/content/site";

export default function Proof() {
  return (
    <section className="bg-[var(--bg-elevated)] py-16 md:py-20">
      <div className="container-site">
        <Reveal>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 md:gap-3">
            {proofImages.map((img, i) => (
              <div
                key={img.src}
                className="relative aspect-[3/4] overflow-hidden bg-black/40"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
                  style={{ transitionDelay: `${i * 40}ms` }}
                />
              </div>
            ))}
          </div>
        </Reveal>

        {reviews[0] ? (
          <Reveal delayMs={120} className="mx-auto mt-12 max-w-3xl text-center">
            <blockquote className="font-display text-xl leading-relaxed text-[var(--text)] md:text-2xl">
              “{reviews[0].quote.slice(0, 220)}…”
            </blockquote>
            <cite className="mt-4 block text-xs uppercase tracking-[0.2em] text-[var(--accent)] not-italic">
              — {reviews[0].source}
            </cite>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
