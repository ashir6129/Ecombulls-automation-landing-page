# Build Prompt — Ecombulls Landing Page (Next.js)

Paste everything below into Google Antigravity along with the attached `Ecombulls-Landing-Page-Plan.md` file.

---

## Prompt

I'm attaching a complete design/content/animation spec (`Ecombulls-Landing-Page-Plan.md`) for a landing page called **Ecombulls** — an AI ecommerce automation agency that serves other agencies managing stores on Amazon, eBay, Walmart, TikTok Shop, and Shopify.

Build this as a **production-grade Next.js application**. Follow the attached spec exactly for content, copy, section order, color tokens, and animation timing — do not simplify or skip the animation detail, it's intentional and fully specified (motion tokens, easing curves, durations, stagger gaps are all defined in Section 3 of the doc).

### Tech requirements
- **Framework:** Next.js 14+, App Router, TypeScript
- **Styling:** Tailwind CSS — set up the exact color tokens from Section 1 of the spec as custom Tailwind theme colors (`background`, `surface`, `accent`, `accent-glow`, `text-primary`, `text-muted`, `border`), not raw hex values scattered through components
- **Animation:** Framer Motion for all scroll reveals, tab-panel transitions, card entrances, and micro-interactions (`whileInView`, `AnimatePresence`, `layoutId` for the sliding tab indicator). Use GSAP + ScrollTrigger specifically for the hero's continuous sync-ping loop and the "How It Works" line-draw animation — those need timeline precision Framer Motion doesn't give as cleanly.
- **Counters:** implement a small reusable `useCountUp` hook triggered by Intersection Observer (or `react-countup`) for the stats section — must count with `ease-out-signature` easing (fast start, slow settle), not linear.
- **Marquees:** pure CSS `@keyframes` (no JS) for both the announcement ticker and the platform logo strip — duplicate content in the DOM for a seamless loop, pause on hover, edge fade mask on both sides.
- **Icons:** lucide-react for UI icons; use official brand SVGs (or accurate placeholder wordmarks) for Amazon, eBay, Walmart, TikTok Shop, and Shopify logos — grayscale by default, full color on hover per the spec.
- **Forms:** the "Book a Free Automation Audit" CTA should open a simple modal/form (name, email, WhatsApp, platform they use) — wire the submit handler to a placeholder API route (`/api/lead`) that I can later connect to Google Sheets/CRM. Don't fake a fake success state — actually POST to the route and handle loading/success/error states properly.

### Performance requirements — this must be genuinely fast, not just look fast
- Target Lighthouse scores of 95+ on Performance, Accessibility, and Best Practices
- Use `next/image` for every image (founder photo, any illustrations) with proper `sizes` and priority flag on the hero/LCP image only
- Use `next/font` for all typefaces — no render-blocking Google Fonts `<link>` tags
- Code-split anything heavy: lazy-load the GSAP hero animation and the testimonials carousel with `next/dynamic` so they don't block first paint
- Animate only `transform` and `opacity` — never animate `width`, `top/left`, or `box-shadow` directly, per the spec's performance guardrail (Section 3.7)
- Respect `prefers-reduced-motion`: every marquee, scroll-reveal, and the hero loop needs a static/opacity-only fallback — implement this with a shared `useReducedMotion` check, not per-component overrides
- No layout shift: reserve space for the hero visual, founder photo, and any lazy-loaded sections with proper aspect-ratio containers
- Keep total JS bundle lean — avoid pulling in a 3D library (Three.js/Spline) unless I confirm I want the 3D hero option; default to the animated SVG/CSS sync-diagram version of the hero visual described in Section 3.2, since it's lighter and just as effective

### Structure & content
- Follow the exact section order in Section 5 / "Suggested Page Order" of the spec (marquee → hero → logo marquee → interactive platform tabs → how it works → meet the founder → stats → testimonials → comparison → pricing → trust/compliance → FAQ → final CTA → footer)
- Build the interactive platform tabs (Amazon/eBay/Walmart/TikTok Shop/Shopify) as a proper client component with a sliding underline indicator (`layoutId` in Framer Motion) and the exact feature list content for each platform from Section 2, Section 4 of the doc
- For the "Meet the Founder" section: use **Mudasir Kamal** as the name, "Founder & CEO, Ecombulls" as the title. Use a placeholder headshot image (a neutral gray avatar placeholder is fine) in the exact framed/glow-bordered layout described — I'll swap in the real photo file myself afterward, just leave the `<Image>` component pointed at a clearly-named placeholder path like `/images/founder-placeholder.jpg` so it's a one-file swap.
- Write real, non-lorem-ipsum copy for every section based on the bios/descriptions already drafted in the spec — don't leave placeholder text anywhere except the founder photo and testimonial names/companies (mark those clearly as `[SAMPLE — REPLACE]` in a code comment so I know what to swap before launch)

### Component architecture
- Break this into clean, reusable components (one file per section minimum): `Marquee.tsx`, `Hero.tsx`, `LogoStrip.tsx`, `PlatformTabs.tsx`, `HowItWorks.tsx`, `FounderSection.tsx`, `StatsBar.tsx`, `Testimonials.tsx`, `ComparisonSection.tsx`, `PricingTiers.tsx`, `TrustSection.tsx`, `FAQAccordion.tsx`, `FinalCTA.tsx`, `Footer.tsx`
- Centralize the motion tokens (durations, easings, stagger gaps from Section 3.1) in a single `lib/motion.ts` file that every component imports from — I don't want easing values hardcoded differently across components
- Fully responsive down to 375px width — test the platform tabs and pricing cards specifically, since those are the most layout-complex sections

### Accessibility
- Visible keyboard focus states on every interactive element (tabs, accordion, carousel arrows, CTA buttons)
- Proper ARIA roles on the tab panel (`role="tablist"`, `role="tab"`, `role="tabpanel"`) and the FAQ accordion (`aria-expanded`)
- Alt text on all images, including the founder photo and platform logos

### Deliverable
Give me a complete, running Next.js project (not fragments) with:
1. All components wired up in the correct page order
2. Tailwind config with the custom color theme applied
3. `lib/motion.ts` with the shared animation tokens
4. The `/api/lead` placeholder route for the CTA form
5. A short `README.md` noting what I need to swap before launch (founder photo, testimonial names, brand logo SVGs, lead-capture endpoint)

Build it to feel genuinely premium and fast — not an assembled template. Follow the spec's animation restraint guidance closely: one signature hero moment, quiet consistent motion everywhere else, no animation re-triggers on scroll, no gimmicks like custom cursors.
