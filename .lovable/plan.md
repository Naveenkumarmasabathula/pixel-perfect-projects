# AAKAAR Portfolio Site — Build Plan

A premium, conversion-focused portfolio site for Kumar's custom web design studio. Multi-route TanStack Start app with bold editorial aesthetic, framer-motion animations, and all provided copy.

## Design Direction

Since this is a design-led request without a specific visual style locked in, I'll generate 3 distinct design directions for you to choose from before building. All three will share:

- **Tone:** Confident, editorial, premium — not generic agency
- **Typography:** Distinctive display + refined body pair (no Inter/Poppins)
- **Logo:** Use the uploaded AAKAAR logo (pencil/laptop/paper-plane mark)
- **Motion:** Purposeful framer-motion (hero reveal, scroll-triggered case studies, hover states)
- **Imagery:** AI-generated case study mockups + abstract textures

Directions will vary across:

1. **Editorial Brutalist** — Massive serif headlines, asymmetric grids, raw structure, single bold accent
2. **Minimal Premium** — Generous whitespace, refined sans, monochrome with one warm accent, Swiss precision
3. **Dark Premium** — Deep charcoal canvas, gold/orange accents (matching logo), cinematic case studies

## Route Architecture

Separate routes (not hash anchors) for SSR + SEO:

```
src/routes/
  __root.tsx           → shared nav/footer
  index.tsx            → Home (hero, about preview, featured work preview, CTAs)
  work.tsx             → Featured Work (3 case studies)
  about.tsx            → About Kumar + process + stats
  services.tsx         → Services table + pricing philosophy
  contact.tsx          → Contact form + WhatsApp/email/Calendly
```

Each route gets its own `head()` metadata (title, description, OG tags).

## Sections per Route

- **Home:** Hero headline, dual CTA, about teaser, 3 featured case study cards, testimonials carousel, contact CTA
- **Work:** Full case studies (E-Commerce Footwear, Financial Advisory, Marketing Agency) with challenge/solution/result + design highlights
- **About:** Kumar intro, 3 principles, stats (50+, 8+, 99%, 2-4 weeks), 5-phase process timeline
- **Services:** 6 service cards, pricing philosophy section, ₹50,000 starting price callout
- **Contact:** WhatsApp/email/Calendly links, contact form (Name, Business Type, Goal, Budget, Time), post-submit message

## Components

- `Navigation` (sticky, with logo + route links)
- `Footer` (with social links, tagline)
- `CaseStudyCard` / `CaseStudyDetail`
- `ProcessPhase` (timeline component)
- `ServiceCard`
- `TestimonialCard`
- `StatBadge`
- `ContactForm` (frontend only — submits to mailto or shows confirmation; no backend in this scope)

## Technical Notes

- **Stack:** TanStack Start + React 19 + Tailwind v4 + framer-motion + shadcn/ui
- **Design tokens:** All colors defined in `src/styles.css` as oklch semantic tokens (no hardcoded colors in components)
- **Logo:** Copy uploaded AAKAAR logo to `src/assets/`
- **Case study images:** Generated via imagegen (premium tier for mockups containing UI text)
- **Form:** Frontend-only — submits to mailto link or shows toast confirmation. No backend/Cloud needed unless you want form submissions stored.
- **SEO:** Per-route `head()` with unique meta + OG tags

## Out of Scope (ask if you want these)  
Only whatsapp ctas  
no contact forms needed

## Next Step

After you approve, I'll call `design--create_directions` to generate 3 visual directions. You'll pick one, then I'll build the full site.