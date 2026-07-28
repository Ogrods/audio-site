"use client";

import { useEffect, useRef, useState } from "react";
import { reviews } from "@/content/site";

const INTERVAL_MS = 10000;

export default function QuoteSlideshow() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  function goTo(next: number) {
    const len = reviews.length;
    const i = ((next % len) + len) % len;
    if (reduceMotion) {
      setIndex(i);
      return;
    }
    setFade(false);
    window.setTimeout(() => {
      setIndex(i);
      setFade(true);
    }, 280);
  }

  useEffect(() => {
    if (reduceMotion || !inView || paused || reviews.length < 2) return;
    const id = window.setInterval(() => {
      setFade(false);
      window.setTimeout(() => {
        setIndex((n) => (n + 1) % reviews.length);
        setFade(true);
      }, 280);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [inView, paused, reduceMotion]);

  return (
    <div
      ref={rootRef}
      className="mx-auto mt-12 max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Grid stack: all slides share one cell so height = tallest quote */}
      <div className="grid" aria-live="polite">
        {reviews.map((review, i) => {
          const active = i === index;
          const visible = active && (fade || reduceMotion);
          return (
            <div
              key={review.source}
              className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                visible ? "opacity-100" : "opacity-0"
              } ${active ? "relative z-10" : "pointer-events-none z-0"}`}
              aria-hidden={!active}
            >
              <blockquote className="font-display text-xl leading-relaxed text-[var(--text)] md:text-2xl">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <cite className="mt-4 block text-xs uppercase tracking-[0.2em] text-[var(--accent)] not-italic">
                - {review.source}
              </cite>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="border border-white/20 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label="Previous quote"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="border border-white/20 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label="Next quote"
        >
          Next
        </button>
      </div>
    </div>
  );
}
