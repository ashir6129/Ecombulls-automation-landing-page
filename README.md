# Ecombulls — AI Ecommerce Automation Agency Landing Page

Production-grade Next.js 14 App Router landing page for **Ecombulls** (AI Ecommerce Automation for Agencies managing stores on Amazon, eBay, Walmart, TikTok Shop, and Shopify). Founded by **Mudasir Kamal**.

## 🚀 Pre-Launch Swap Checklist

Before deploying to production, review the following files to replace placeholder assets with your final production files:

1. **Founder Headshot Image:**
   - Location: [`/public/images/founder-placeholder.jpg`](file:///home/ashirkhan/Mudasir%20Kamal%20landing%20page%20/public/images/founder-placeholder.jpg)
   - Action: Swap this image with Mudasir Kamal's high-resolution official portrait photo (keep the same filename or update the `src` in [`src/components/FounderSection.tsx`](file:///home/ashirkhan/Mudasir%20Kamal%20landing%20page%20/src/components/FounderSection.tsx)).

2. **Testimonial Names & Agency Quotes:**
   - Location: [`src/components/Testimonials.tsx`](file:///home/ashirkhan/Mudasir%20Kamal%20landing%20page%20/src/components/Testimonials.tsx)
   - Action: Search for comments marked `[SAMPLE — REPLACE]` and update the name, role, agency name, and quote text.

3. **Lead Capture Endpoint Integration:**
   - Location: [`src/app/api/lead/route.ts`](file:///home/ashirkhan/Mudasir%20Kamal%20landing%20page%20/src/app/api/lead/route.ts)
   - Action: Connect the POST handler to your Google Sheets Webhook, HubSpot, ActiveCampaign, or CRM endpoint.

4. **Brand Logotype Vectors (Optional):**
   - Location: [`src/components/LogoStrip.tsx`](file:///home/ashirkhan/Mudasir%20Kamal%20landing%20page%20/src/components/LogoStrip.tsx)
   - Action: Replace the embedded SVG paths with custom official vector files if desired.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start Next.js development server
npm run dev

# Build for production
npm run build
```

## 🎨 Tech Stack & Architecture
- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS with custom design tokens (`background`, `surface`, `accent`, `accent-glow`, `border`)
- **Animation:** Framer Motion (`layoutId` sliding tabs, modals) + GSAP ScrollTrigger (hero sync diagram, timeline line draw)
- **Hooks:** Custom `useCountUp` with signature ease-out curve, `useReducedMotion` for full accessibility compliance.
