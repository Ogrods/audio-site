import { siteProfile } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--bg)] py-12">
      <div className="container-site flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <p className="text-sm text-[var(--text-muted)]">
          © {year} {siteProfile.name}
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 text-sm text-[var(--text-muted)] sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
            {siteProfile.social.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center hover:text-[var(--accent)] sm:min-h-0"
              >
                {s.label}
              </a>
            ))}
          </div>
          <a
            href={siteProfile.webdevUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-sm text-[var(--text-muted)] hover:text-[var(--accent)] sm:min-h-0"
          >
            Web development
          </a>
        </div>
      </div>
    </footer>
  );
}
