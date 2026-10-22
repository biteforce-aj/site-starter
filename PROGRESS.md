# Progress
Project: site-starter · Prompt file: kit/prompts/00-starter.md · Approved plan: kit/PLAN.md

## Done
- Phase 1 Plan · Phase 2 Scaffold · Phase 3 UI components (+ /styleguide, pinned light, noindex, keep out of sitemap)
- Phase 4 Sections part 1: Navbar (+ client MobileNav), Footer, Hero, FeatureGrid, CTABand; ui/SocialIcon; Button `inverse` variant

## Next
- Phase 5 — Section components (part 2): Testimonials, FAQ, StatsRow, LogoStrip, Gallery, ContactForm, WhatsApp button

## Known issues / decisions
- Next 16 + Tailwind v4: tokens in `@theme` (defaults cleared), dark values duplicated in tokens.css. Fonts in src/styles/fonts.ts. cacheComponents is on, so `new Date()` needs `"use cache"` (see Footer)
- `dark:` variant = data-theme with OS fallback. Use `max-w-(--container-prose)`. New spacing/container tokens must be added to cn()'s tailwind-merge config
- Sections default to their siteConfig slice (props can override) and take `id` for nav anchors. Icons are registered in ui/Icon.tsx
- Navbar skip link targets `<main id="main">`. page.tsx is a temporary section preview until Phase 6 (decide then whether Navbar/Footer move into layout)
- Reveal hides content until hydration, so never wrap Hero or other above-the-fold content
