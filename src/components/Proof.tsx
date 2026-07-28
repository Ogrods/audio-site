"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import QuoteSlideshow from "@/components/QuoteSlideshow";
import { proofImages } from "@/content/site";

function PhotoStrip({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <>
      {proofImages.map((img) => (
        <div
          key={`${duplicate ? "d-" : ""}${img.src}`}
          className="photo-marquee-item relative h-56 shrink-0 md:h-64"
          aria-hidden={duplicate || undefined}
        >
          <Image
            src={img.src}
            alt={duplicate ? "" : img.alt}
            width={640}
            height={400}
            className="h-full w-auto max-w-none"
            sizes="(max-width: 768px) 80vw, 480px"
          />
        </div>
      ))}
    </>
  );
}

export default function Proof() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section className="bg-[var(--bg-elevated)] py-16 md:py-20">
      <div className="container-site">
        <Reveal>
          <div
            className={`photo-marquee ${reduceMotion ? "photo-marquee--static" : ""}`}
            aria-label="Performance photos"
          >
            <div className="photo-marquee-track">
              <PhotoStrip />
              {!reduceMotion ? <PhotoStrip duplicate /> : null}
            </div>
          </div>
          {!reduceMotion ? (
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
              Hover to pause
            </p>
          ) : null}
        </Reveal>

        <Reveal delayMs={100}>
          <QuoteSlideshow />
        </Reveal>
      </div>
    </section>
  );
}
