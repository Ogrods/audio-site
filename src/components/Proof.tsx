"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { proofImages, reviews } from "@/content/site";

const ADVANCE_MS = 6000;

export default function Proof() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const el = trackRef.current;
    if (!el) return;

    const id = window.setInterval(() => {
      const card = el.querySelector<HTMLElement>("[data-card]");
      if (!card) return;
      const step = card.offsetWidth + 12;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      const next = el.scrollLeft + step;
      if (next >= max - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, ADVANCE_MS);

    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  function scrollByCard(dir: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    el.scrollBy({ left: dir * (card.offsetWidth + 12), behavior: "smooth" });
  }

  return (
    <section className="bg-[var(--bg-elevated)] py-16 md:py-20">
      <div className="container-site">
        <Reveal>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              ref={trackRef}
              className="flex gap-3 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Performance photos"
            >
              {proofImages.map((img) => (
                <div
                  key={img.src}
                  data-card
                  className="relative aspect-[3/4] w-[min(42vw,220px)] shrink-0 overflow-hidden bg-black/40 sm:w-[200px] md:w-[220px]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="220px"
                    className="object-cover"
                    style={{
                      objectPosition: img.objectPosition ?? "center center",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                {reduceMotion ? "Gallery" : "Slow scroll - hover to pause"}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  className="border border-white/20 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="Previous photos"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  className="border border-white/20 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="Next photos"
                >
                  Next
                </button>
              </div>
            </div>
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
