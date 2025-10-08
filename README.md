# GoLarge — Next.js starter site

This repository contains a Next.js (App Router) TypeScript site scaffold for the GoLarge project — a community/outreach website built with Tailwind CSS and modern React patterns.

This README explains how the project is organized, how to run it locally, and where to find the main components you will likely edit.

## Quick info

- Framework: Next.js (app router)
- Language: TypeScript
- Styling: Tailwind CSS
- Image handling: `next/image`

## Local development (Windows / PowerShell)
1. Install dependencies:

```powershell
npm install
```

2. Run typecheck (recommended):

```powershell
npx tsc --noEmit
```

3. Start dev server:

```powershell
npm run dev
```

Open http://localhost:3000 to view the site.

## Important scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — run production build
- `npx tsc --noEmit` — type-check only

## Project structure (high level)
- `app/` — Next.js app routes and server components
   - `layout.tsx` — root layout (imports Header and Footer)
   - `page.tsx` — homepage
   - `about/page.tsx` — About page (detailed, interactive)
   - `contact/page.tsx` — Contact page
   - `components/` — site components (Header, Footer, EventsList, OutreachCards, ContactForm, etc.)
- `public/` — static assets (images)
- `app/globals.css` — global styles and custom keyframes

## Key components to know
- `app/components/Header.tsx` — site header / navigation. Contains the Give CTA. Header is a client component (uses useEffect/useState) and must remain client-side.
- `app/components/HeroCarousel.tsx` — homepage hero carousel.
- `app/components/EventsList.tsx` — interactive events list (search, tabs, RSVP state).
- `app/components/OutreachCards.tsx` — outreach cards grid.
- `app/components/ContactForm.tsx` — interactive contact form with drag/drop and autosave.
- `app/components/Faq.tsx` — client-side FAQ accordion used by the About page.

## Styling and visuals
- Tailwind is configured in the project. Edit classes directly in components or extend the Tailwind config if you want design tokens (colors, fonts).
- Global animation utilities (e.g., `gradient-pan`) live in `app/globals.css`.

## Data & content
- Currently the site uses local mock data inside components for Events and Outreach. To move to a CMS or JSON seed, consider:
   - Adding a `data/` folder with JSON files and importing them in server components
   - Or integrating a headless CMS (Sanity/Contentful/Supabase) and fetching data in `getServerSideProps` or server components

## Troubleshooting
- Hydration errors: ensure interactive pieces using React hooks are in client components (add `"use client"` at the top of those files). Also avoid runtime-only expressions (like `Date.toLocaleString()` without a fixed locale) in server-rendered markup — prefer `Intl.DateTimeFormat` with a fixed locale for deterministic output.
- If you see CSS not updating, restart the dev server or hard-refresh the browser.

## Next steps / suggestions
- Replace mock data with a small JSON seed or CMS.
- Add persistent RSVP (localStorage or API) for events.
- Wire ContactForm to an API endpoint to send emails or messages.
- Polish branding: provide color tokens and logos so I can apply them across components.

## Contact
If you want more features or want me to continue polishing pages, tell me which page or component to prioritize next.

# Golarge — Next.js Starter

A polished Next.js (app-router) starter built while recreating features and layout inspired by a ministry website. The repository contains a responsive, Tailwind-based frontend scaffold with hero-first homepage, outreach pages, events listing, contact form, and a professional header/footer.

## Key features implemented

- Full-screen Hero carousel (client-side) with image slides, overlay, and CTAs.
- Header: sticky, transparent over hero, transitions to translucent background on scroll.
- Footer: professional multi-column footer with quick links, contact info, social links, and a newsletter signup (client-side simulated).
- Events: Upcoming & Past events component with filtering and "Load more" behavior.
- Contact: dynamic contact form with validation, file attachments preview, copy-to-clipboard actions, and a contact card with WhatsApp/call CTAs.
- Outreach pages: placeholder routes for regions (NG, CA, UK, US, DE, London).

## Tech stack

- Next.js (app router)
- React + TypeScript
- Tailwind CSS for styling

## Local setup

1. Install dependencies

   ```powershell
   npm install
   ```

2. Run the dev server

   ```powershell
   npm run dev
   ```

3. Open http://localhost:3000 in your browser.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm start` — run the production build
- `npx tsc --noEmit` — run TypeScript check

## Development notes

- Many components use client-side interactivity (`"use client"`), while pages default to server components where appropriate.
- Images are served from the `public/` folder (e.g., `pastor1.png`, `pastor2.png`). Replace them with brand assets as needed.
- The project currently uses mock data for events/outreach. Consider connecting a headless CMS (Sanity, Contentful, Strapi) or a simple JSON data file for production.

## Next steps / Suggestions

- Wire events and outreach to a CMS and implement dynamic event/outreach detail pages.
- Add serverless API endpoints to accept contact form submissions and handle file attachments (presigned uploads to S3 or direct email integrations).
- Improve accessibility: keyboard navigation for the hero and menu, ARIA roles for interactive components.
- Replace design tokens (`bg-foreground`, `text-background`) with concrete Tailwind colors or add them to `tailwind.config.js`.

## Contributing

This project is a work-in-progress. If you'd like me to continue with any of the "Next steps", tell me which one and I'll implement it next.

---

Generated while iterating on a Next.js/Tailwind website for a ministry-like project.
