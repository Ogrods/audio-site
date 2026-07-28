"use client";

import { useEffect, useRef, useState } from "react";
import { reviews } from "@/content/site";

const INTERVAL_MS = 6000;

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

  const review = reviews[index];
  if (!review) return null;

  return (
    <div
      ref={rootRef}
      className="mx-auto mt-12 max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[9rem] md:min-h-[8rem]">
        <blockquote
          className={`font-display text-xl leading-relaxed text-[var(--text)] transition-opacity duration-500 md:text-2xl ${
            fade || reduceMotion ? "opacity-100" : "opacity-0"
          }`}
          aria-live="polite"
        >
          &ldquo;{review.quote}&rdquo;
        </blockquote>
        <cite
          className={`mt-4 block text-xs uppercase tracking-[0.2em] text-[var(--accent)] not-italic transition-opacity duration-500 ${
            fade || reduceMotion ? "opacity-100" : "opacity-0"
          }`}
        >
          - {review.source}
        </cite>
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
        <span className="text-xs text-[var(--text-muted)]">
          {index + 1} / {reviews.length}
        </span>
      </div>
    </div>
  );
}
