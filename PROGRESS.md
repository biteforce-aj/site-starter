# Progress

Project: site-starter
Prompt file: kit/prompts/00-starter.md
Approved plan: kit/PLAN.md

## Done
- Phase 1 — Plan (approved, saved to kit/PLAN.md)
- Phase 2 — Scaffold (tokens, globals, fonts, theme provider, site.config, utils, placeholder images)

## Next
- Phase 3 — UI components

## Known issues / decisions
- Next 16 + Tailwind v4: tokens in `@theme` (default palette/text/radius/shadow cleared); dark values duplicated in tokens.css (data-theme + media query)
- Fonts in src/styles/fonts.ts (Inter body, Manrope heading); next.config has cacheComponents on (generator default)
