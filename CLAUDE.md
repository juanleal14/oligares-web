# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (`next/core-web-vitals`, `next/typescript`)

There is no test suite configured in this repo.

## Architecture

Next.js 14 App Router site (TypeScript, Tailwind) for Oligares, an AOVE (extra virgin olive oil) brand. Single marketing/e-commerce-style site, no backend/API routes or database — content is static/local.

- `app/` — route pages (App Router). Each folder under `app/` (`b2b`, `conocenos`, `envases`, `sobre-nosotros`, `tienda`) is a route with its own `page.tsx`. `app/layout.tsx` is the root layout: it loads the two Google fonts (Playfair Display as `--font-playfair`, DM Sans as `--font-dm`), and wraps every page with global chrome in a fixed order: `Navbar` → `PageTransition` (wraps `children`) → `Footer`.
- `components/home/` — sections composed on the landing page (`Hero`, `BrandIntro`, `Varieties`, `ProcessScroll`, `Testimonials`, `ContactCTA`).
- `components/shop/` — `ProductGrid` / `ProductCard`, used by the `tienda` route, driven by `data/products.ts`.
- `components/layout/` — `Navbar`, `Footer`.
- `components/ui/` — cross-cutting UI behavior: `PageTransition` (per-route fade transition keyed on `usePathname()`, via `framer-motion`), `FadeIn` (scroll/mount reveal animation wrapper used throughout page sections). The site uses the native system cursor (no custom cursor component).
- `data/products.ts` — single source of truth for the product catalog (`Product` interface + `products` array). Products can be `soldOut` with a `soldOutMessage`, and `price` can be `null` for not-yet-priced/out-of-stock items — UI must handle both.

### Styling

Tailwind config (`tailwind.config.ts`) defines the brand palette and typefaces used across components — reference these tokens instead of raw hex values:
- Colors: `gold`, `gold-light`, `olive`, `cream`, `charcoal`, `sand`.
- Fonts: `font-serif` (Playfair Display, via `--font-playfair`), `font-sans` (DM Sans, via `--font-dm`).

### Conventions

- Path alias `@/*` maps to the repo root (e.g. `@/components/layout/Navbar`).
- Animated/interactive components (anything using `framer-motion`, `usePathname`, etc.) are marked `'use client'`; default to server components otherwise.
- `next.config.mjs` only allows remote images from `images.unsplash.com` — add new hostnames there if sourcing images from elsewhere.

### Changes required by Company Owner
CAMBIOS WEB OLIGARES: GRACIASSSSS JUAN <3 

COSAS PARA CAMBIAR EN TODA LA WEB:

Cambiar la tipografía a:

- Titulares en negrita
  BIZ UDPMincho AaBbCc
- El resto normal 

