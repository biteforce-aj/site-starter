# Progress
Project: site-starter · Prompt file: kit/prompts/00-starter.md · Approved plan: kit/PLAN.md

## Done
- Phase 1 Plan · Phase 2 Scaffold · Phase 3 UI components (src/components/ui, barrel index.ts)
- Extra: /styleguide (every ui component, light + dark panels; page pinned light; noindex, keep out of sitemap)

## Next
- Phase 4 — Section components (part 1): Navbar (mobile menu + theme toggle), Footer, Hero, FeatureGrid, CTABand

## Known issues / decisions
- Next 16 + Tailwind v4: tokens in `@theme` (defaults cleared); dark values duplicated in tokens.css. Fonts in src/styles/fonts.ts; cacheComponents on
- `dark:` variant = data-theme with OS fallback (globals.css). Use `max-w-(--container-prose)`: `max-w-prose` is Tailwind's static 65ch. New spacing/container tokens must be added to cn()'s tailwind-merge config
- Icon uses a named registry in ui/Icon.tsx; add icons there. lucide v1 has no brand icons, so Footer socials need their own SVGs
- Reveal hides content until hydration: never wrap the Hero/above-the-fold content
