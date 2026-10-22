# Progress
Project: site-starter · Prompt file: kit/prompts/00-starter.md · Approved plan: kit/PLAN.md

## Done
- Phases 1–5: Plan, Scaffold, UI components (+ /styleguide), all section components
- Phase 6 Demo home + SEO: home from sections only; OG/Twitter/canonical metadata, sitemap, robots (styleguide disallowed), not-found page

## Next
- Phase 7 — Polish + README: responsive pass 360/768/1280, a11y check, Lighthouse fixes, README from spec template

## Known issues / decisions
- Next 16 + Tailwind v4: tokens in `@theme`, dark values duplicated in tokens.css, fonts in src/styles/fonts.ts. cacheComponents on, so `new Date()` needs `"use cache"`. New spacing/container tokens go in cn()'s tailwind-merge config
- Navbar/Footer/WhatsAppButton stay per-page (styleguide has its own chrome); not-found rewrites `#id` nav links to `/#id`. Home has adjacent same-bg sections (Stats/Gallery/Testimonials): consider a `tone` prop in Phase 7
- OG image is static `seo.ogImage` (1200×630), not opengraph-image.tsx (would need raw hex). Favicon in public/, driven by `brand.favicon`. Added `notFound` slice to SiteConfig
- Reveal hides content until hydration: never wrap above-the-fold content. contact.action.ts is a stub (no delivery yet)
