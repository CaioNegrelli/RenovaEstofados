# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Renova Estofados — a single-page marketing landing page for a company that provides upholstery
(estofados) cleaning/sanitization services. No backend; the scope is one static-content page.

Design source: the original Figma prototype screenshot is kept at `design/landing-page-full.png`
for historical reference, but the page has since diverged from it — it was redesigned around the
client's real logo and brand palette (see `src/assets/logo-light.jpeg` and
`src/assets/logo-badge.jpeg`), with layout/content patterns borrowed from common upholstery/carpet
cleaning landing pages rather than the Figma file (whose UI kit was actually a generic real-estate
template repurposed for this brand). Treat the current component code, not the Figma screenshot, as
the source of truth for layout.

## Commands

- `npm run dev` — start the Vite dev server (default port 5173).
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the production build locally.
- `npm run lint` — run oxlint (project's only linter; no separate type-checker or test suite is set up).

## Stack

- Vite + React 19 (functional components, no router — single page).
- Tailwind CSS v4, wired in via the `@tailwindcss/vite` plugin (see `vite.config.js`). Tailwind is
  imported with `@import "tailwindcss";` in `src/index.css` — no `tailwind.config.js` in v4.
- Brand colors are defined as custom Tailwind tokens in `src/index.css` under `@theme`:
  `brand-navy`, `brand-blue`, `brand-cyan`, `brand-green`, `brand-lime`. These were sampled directly
  from the client's logo files, not picked freehand — use them (`bg-brand-blue`, `text-brand-green`,
  etc.) instead of ad-hoc hex values so the palette stays consistent with the logo.

## Structure

`src/App.jsx` composes one component per landing-page section, in `src/components/`, in this
order: `Header`, `Hero`, `Diferenciais`, `QuemSomos`, `Servicos`, `ComoFunciona`, `Contato`,
`Footer`. Shared inline SVG icons (phone, instagram, facebook, mail, clock, whatsapp, sofa,
armchair, bed, rug, sparkles, check, calendar, thumbs-up) live in `src/components/icons.jsx`.

Two logo variants are used purposefully in different spots, not interchangeably:
`logo-light.jpeg` (detailed emblem: sofa + vacuum + wordmark) in the Hero; `logo-badge.jpeg`
(compact circular seal with service icons) everywhere else (Header, QuemSomos, Contato, Footer,
favicon). Both are displayed via `rounded-full object-cover` to clip their square canvas into a
circle — keep that pattern if you reuse them elsewhere.

`Servicos` lists four cards (Sofá, Poltrona, Cama, Tapete) matching the four service icons printed
on the badge logo — don't silently collapse them back into three without checking the logo.

## Known gaps

- No real photography exists yet for the services/differentiators — those spots use custom SVG
  icons and gradient circles in the brand palette instead of photos. When real photos are
  available, they can replace the icon placeholders in `Diferenciais.jsx` and `Servicos.jsx`.
- Contact details (phone, e-mail, WhatsApp number, CNPJ, business hours) are still placeholders
  (`XX`/`xxxxx`) pending real business info — search the codebase for those before shipping.
