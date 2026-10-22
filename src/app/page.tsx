import { siteConfig } from "@/config/site.config";

// Temporary scaffold page — replaced by the section-based home in Phase 6.
export default function Home() {
  const { brand, hero } = siteConfig;

  return (
    <main className="mx-auto flex w-full max-w-content flex-1 flex-col justify-center gap-6 px-gutter py-section">
      <p className="text-sm font-medium text-primary">{brand.name}</p>
      <h1 className="text-5xl font-bold">{hero.title}</h1>
      <p className="max-w-prose text-lg text-muted">{hero.subtitle}</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={hero.primaryCta.href}
          className="rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          {hero.primaryCta.label}
        </a>
        {hero.secondaryCta && (
          <a
            href={hero.secondaryCta.href}
            className="rounded-md border border-border bg-surface px-5 py-3 font-medium transition-colors hover:border-input"
          >
            {hero.secondaryCta.label}
          </a>
        )}
      </div>
    </main>
  );
}
