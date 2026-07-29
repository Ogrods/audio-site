"use client";

import { useEffect, useState } from "react";
import { navLinks, siteProfile } from "@/content/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow] duration-300 ${
        scrolled || open
          ? "bg-[rgba(12,11,10,0.94)] shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
      }`}
    >
      <div className="container-site flex h-14 items-center justify-between gap-3 md:h-16">
        <a
          href="#home"
          className="min-w-0 max-w-[calc(100%-5.5rem)] truncate font-display text-base tracking-[0.08em] text-white uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)] sm:text-lg md:max-w-none"
          onClick={close}
        >
          {siteProfile.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-white/85 drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)] transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteProfile.resumePdf}
            className="resume-button btn-nav"
            download
          >
            Resume
          </a>
          <a href={siteProfile.cvPdf} className="resume-button btn-nav" download>
            CV
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 flex-col items-center justify-center gap-[5px] border border-white/35 bg-black/35 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-4 bg-white transition-transform duration-200 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
            aria-hidden
          />
          <span
            className={`block h-px w-4 bg-white transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
            aria-hidden
          />
          <span
            className={`block h-px w-4 bg-white transition-transform duration-200 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
            aria-hidden
          />
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-[rgba(12,11,10,0.98)] pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 md:hidden"
        >
          <nav className="container-site flex flex-col" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-white/10 py-3.5 text-sm uppercase tracking-[0.16em] text-white/90 transition-colors hover:text-[var(--accent)]"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-5">
              <a
                href={siteProfile.resumePdf}
                className="resume-button btn-nav w-full text-center"
                download
                onClick={close}
              >
                Resume
              </a>
              <a
                href={siteProfile.cvPdf}
                className="resume-button btn-nav w-full text-center"
                download
                onClick={close}
              >
                CV
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
