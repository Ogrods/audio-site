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

        <div className="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal key={review.source} delayMs={80 + i * 80}>
              <blockquote className="font-display text-xl leading-relaxed text-[var(--text)] md:text-2xl">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <cite className="mt-4 block text-xs uppercase tracking-[0.2em] text-[var(--accent)] not-italic">
                - {review.source}
              </cite>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
