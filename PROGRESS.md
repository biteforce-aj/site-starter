# Progress
Project: site-starter · Prompt file: kit/prompts/00-starter.md · Approved plan: kit/PLAN.md

## Done
- Phases 1–4: Plan, Scaffold, UI components (+ /styleguide), Sections part 1 (Navbar, Footer, Hero, FeatureGrid, CTABand)
- Phase 5 Sections part 2: Testimonials, FAQ (<details>), StatsRow, LogoStrip, Gallery (<dialog> lightbox), ContactForm, WhatsAppButton

## Next
- Phase 6 — Demo home + SEO: home from sections + config; metadata, sitemap, robots, OG image, not-found page

## Known issues / decisions
- Next 16 + Tailwind v4: tokens in `@theme`, dark values duplicated in tokens.css, fonts in src/styles/fonts.ts. cacheComponents on, so `new Date()` needs `"use cache"`. New spacing/container tokens go in cn()'s tailwind-merge config
- Sections default to their siteConfig slice (props override), take `id` for nav anchors; icons registered in ui/Icon.tsx. Navbar skip link targets `<main id="main">`; decide in Phase 6 if Navbar/Footer/WhatsAppButton move into layout
- Reveal hides content until hydration: never wrap above-the-fold content. contact.action.ts is a stub (no delivery yet); added contact.title/intro to config
