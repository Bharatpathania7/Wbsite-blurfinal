# blur — Landing Page (Next.js + TypeScript)

Premium invite-only landing page for **blur**, the anonymous campus social network.
Light theme matching the app splash (white → light-blue with animated blue glow blobs).

## Stack
- Next.js 14 (App Router) · React 18 · TypeScript
- Plain CSS in `app/globals.css` (no Tailwind needed)

## File structure
```
blur-next/
├── app/
│   ├── layout.tsx        # root layout, fonts, metadata
│   ├── page.tsx          # home — assembles all sections
│   ├── globals.css       # all styles
│   ├── privacy/page.tsx    # Privacy Policy page
│   ├── terms/page.tsx      # Terms of Service page
│   └── guidelines/page.tsx # Community Guidelines page
├── components/
│   ├── Background.tsx     # animated blue glow blobs (app-splash bg)
│   ├── Nav.tsx            # floating island nav
│   ├── Hero.tsx           # invite hero + access progress bar
│   ├── Showcase.tsx       # centered CSS phone + floating cards & reactions
│   ├── Confessions.tsx
│   ├── Categories.tsx
│   ├── Privacy.tsx        # animated shield
│   ├── Stats.tsx          # animated counters
│   ├── Join.tsx           # waitlist form (stateful)
│   ├── Faq.tsx            # accordion (stateful)
│   ├── FinalCta.tsx
│   ├── Footer.tsx         # footer w/ Instagram + legal links
│   ├── LegalPage.tsx      # shared shell for privacy/terms/guidelines
│   └── Reveal.tsx         # scroll-reveal observer
├── public/logo.png
├── package.json · tsconfig.json · next.config.mjs
```

## Run
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & deploy
```bash
npm run build && npm start
```
Deploy to **Vercel**: push to GitHub and import, or run `vercel`.

## Notes
- The phone in `Showcase.tsx` is pure HTML/CSS (no image) with the blur logo in
  its header and proper SVG nav icons. Floating cards + reaction bubbles + stat
  badges orbit it (hidden on mobile).
- Waitlist `submit()` in `Join.tsx` is front-end only — wire it to your API.
- Brand blue `#1A3FE8`. Responsive, respects `prefers-reduced-motion`.
# Wbsite-blurfinal
