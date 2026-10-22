# 01 — Personal portfolio (yours)
Repo name: `portfolio`
Design: your own Figma design — this is the one site that must look like you. Figma link: [add link]

## Pages
- **Home** — intro with your role (UI/UX designer & web developer), 3–4 featured projects, short about, skills/tools, contact CTA
- **Work** — all projects as cards, filterable by tag (UI/UX, Web dev, Template, Case study)
- **Case study `/work/[slug]`** — MDX page: overview, role, problem, research, wireframes, iterations, final UI, results, links (live, GitHub, Figma)
- **About** — story, process, tools, CV download
- **Contact** — form, email, socials, availability status

## Config fields to add
`projects: [{ slug, title, summary, role, tags[], cover, liveUrl, repoUrl, figmaUrl, featured, hasCaseStudy }]`, `about`, `skills`, `availability`, `cvPath`

## Signature touch
A case study layout that reads like a story (big imagery, process steps, before/after slider). This is where your UX thinking shows.

## Phases
1. **Plan** — routes, components, MDX setup, config shape. Stop for approval.
2. **Home** — built to the Figma design.
3. **Work + project cards + filters**
4. **Case study template** — MDX setup, layout components (ProcessStep, ImageFigure, BeforeAfter), one sample case study.
5. **About + Contact**
6. **Polish** — page transitions (reduced-motion safe), responsive, a11y, Lighthouse, README, deploy.

## Later
Each time you finish a template, add it to `projects` in config. Write 2–3 full case studies over time.
