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
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/35 bg-black/35 px-3 py-2 text-xs uppercase tracking-[0.16em] text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-[rgba(12,11,10,0.98)] py-4 md:hidden"
        >
          <div className="container-site flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-sm uppercase tracking-[0.16em] text-white/85"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteProfile.resumePdf}
              className="resume-button btn-nav mt-2 w-fit"
              download
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
            <a
              href={siteProfile.cvPdf}
              className="resume-button btn-nav w-fit"
              download
              onClick={() => setOpen(false)}
            >
              CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
