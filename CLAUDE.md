# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Renova Estofados — a single-page marketing landing page for a company that provides upholstery
(estofados) cleaning/sanitization services. No backend; the scope is one static-content page.

Design source: a Figma prototype exported as a screenshot at `design/landing-page-full.png`. The
prototype template itself is a generic real-estate UI kit repurposed for this brand — treat its
copy/imagery as a layout reference only, not literal content.

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
  `brand-blue`, `brand-navy`, `brand-green`, `brand-lime`. Use these (`bg-brand-blue`,
  `text-brand-green`, etc.) instead of ad-hoc hex values so the palette stays consistent with the
  Figma design.

## Structure

`src/App.jsx` composes one component per landing-page section, in `src/components/`, in this
order: `Header`, `Hero`, `Diferenciais`, `QuemSomos`, `Servicos`, `Contato`, `Footer`. Shared
inline SVG icons (phone, instagram, facebook, mail, clock, whatsapp) live in
`src/components/icons.jsx`.

## Known gaps

Real photography and the actual logo mark from Figma haven't been exported individually yet — the
page currently uses labeled placeholder blocks (e.g. "Logo Renova Estofados", "Foto do serviço de
higienização") everywhere the design calls for an image. When real assets are exported from Figma,
drop them in `src/assets/` and swap them into the relevant component. Contact details (phone,
e-mail, WhatsApp number, CNPJ) are also placeholders (`XX`/`xxxxx`) pending real business info.
