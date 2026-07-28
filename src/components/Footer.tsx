import { siteProfile } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--bg)] py-10">
      <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--text-muted)]">
          © {year} {siteProfile.name}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)]">
          {siteProfile.social.map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)]"
            >
              {s.label}
            </a>
          ))}
          <a
            href={siteProfile.webdevUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)]"
          >
            Web development
          </a>
        </div>
      </div>
    </footer>
  );
}
