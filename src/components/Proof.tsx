"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Reveal from "@/components/Reveal";
import QuoteSlideshow from "@/components/QuoteSlideshow";
import { proofImages } from "@/content/site";

const SPEED_PX_PER_SEC = 28;

function PhotoStrip({
  duplicate = false,
  eager = false,
}: {
  duplicate?: boolean;
  eager?: boolean;
}) {
  return (
    <>
      {proofImages.map((img, i) => (
        <div
          key={`${duplicate ? "d-" : ""}${img.src}`}
          className="photo-marquee-item relative h-56 shrink-0 md:h-64"
          aria-hidden={duplicate || undefined}
        >
          <Image
            src={img.src}
            alt={duplicate ? "" : img.alt}
            width={480}
            height={320}
            quality={70}
            className="h-full w-auto max-w-none"
            sizes="(max-width: 768px) 70vw, 360px"
            draggable={false}
            loading={eager && i < 3 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </>
  );
}

export default function Proof() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const resumeTimerRef = useRef<number | null>(null);
  const inViewRef = useRef(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [autoPaused, setAutoPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [enableDuplicate, setEnableDuplicate] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        inViewRef.current = visible;
        setInView(visible);
        if (visible) setEnableDuplicate(true);
      },
      { rootMargin: "80px 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const track = trackRef.current;
      const shouldRun =
        inViewRef.current && !draggingRef.current && !autoPaused;
      if (track && shouldRun) {
        const half = track.scrollWidth / 2;
        if (half > 0) {
          offsetRef.current -= SPEED_PX_PER_SEC * dt;
          if (offsetRef.current <= -half) {
            offsetRef.current += half;
          }
          track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion, autoPaused]);

  function clearResumeTimer() {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    const el = viewportRef.current;
    if (!el) return;
    draggingRef.current = true;
    setDragging(true);
    setAutoPaused(true);
    clearResumeTimer();
    lastXRef.current = e.clientX;
    el.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    const half = track.scrollWidth / 2 || 1;
    offsetRef.current += dx;
    while (offsetRef.current <= -half) offsetRef.current += half;
    while (offsetRef.current > 0) offsetRef.current -= half;
    track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
  }

  function onPointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    const el = viewportRef.current;
    if (!el) return;
    draggingRef.current = false;
    setDragging(false);
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    if (!reduceMotion) {
      clearResumeTimer();
      resumeTimerRef.current = window.setTimeout(() => {
        setAutoPaused(false);
      }, 900);
    }
  }

  return (
    <section className="bg-[var(--bg-elevated)] py-16 md:py-20">
      <div className="container-site">
        <Reveal>
          <div
            ref={viewportRef}
            className={`photo-marquee ${reduceMotion ? "photo-marquee--static" : ""} ${
              dragging ? "is-dragging" : ""
            }`}
            aria-label="Performance photos"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onMouseEnter={() => {
              if (!draggingRef.current) setAutoPaused(true);
            }}
            onMouseLeave={() => {
              if (!draggingRef.current && !reduceMotion && inView) {
                setAutoPaused(false);
              }
            }}
          >
            <div ref={trackRef} className="photo-marquee-track">
              <PhotoStrip eager={inView} />
              {!reduceMotion && enableDuplicate ? (
                <PhotoStrip duplicate />
              ) : null}
            </div>
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
            {reduceMotion ? "Drag to scroll" : "Drag to scroll · hover pauses"}
          </p>
        </Reveal>

        <Reveal delayMs={100}>
          <QuoteSlideshow />
        </Reveal>
      </div>
    </section>
  );
}
