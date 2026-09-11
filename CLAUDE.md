# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Renova Estofados — a single-page marketing landing page for a company that provides upholstery
(estofados) cleaning/sanitization services.

Design source: the original Figma prototype screenshot is kept at `design/landing-page-full.png`
for historical reference only. The page was redesigned around the client's real logo and a color
palette sampled from it, with layout/content patterns borrowed from common upholstery/carpet
cleaning landing pages — the Figma file's UI kit was actually a generic real-estate template
repurposed for this brand, so don't treat it as the source of truth for layout.

## Stack

Plain HTML, CSS, and no JavaScript — no build step, no framework, no package.json. This was
migrated off an earlier Vite + React + Tailwind scaffold; if you see references to npm scripts,
`src/`, or JSX anywhere (docs, commit messages), they're stale.

- `index.html` — the entire page, single file, all sections in document order.
- `css/style.css` — hand-written CSS. Brand colors are CSS custom properties on `:root`
  (`--navy`, `--blue`, `--cyan`, `--green`, `--lime`), sampled directly from the logo files, not
  picked freehand — reuse them instead of hardcoding hex values.
- `assets/logo-light.jpeg` and `assets/logo-badge.jpeg` — the client's real logo, two variants
  used purposefully in different spots, not interchangeably: `logo-light.jpeg` (detailed emblem:
  sofa + vacuum + wordmark) only in the Hero; `logo-badge.jpeg` (compact circular seal with
  service icons) everywhere else (header, Quem Somos, Contato, footer, favicon). Both are rendered
  via `border-radius: 9999px` + `object-fit: cover` to clip their square JPEG canvas into a circle
  — keep that pattern if you reuse them elsewhere.
- Icons are an inline SVG `<symbol>` sprite at the top of `<body>` in `index.html`, referenced via
  `<svg class="icon"><use href="#icon-name"></use></svg>`. Deliberately inline (not an external
  `.svg` file) so `<use>` still resolves when the page is opened straight from the filesystem
  (`file://`), not just when served — Chrome blocks cross-file `<use href="file.svg#id">` under
  `file://`.

## Running it

No build, no dev server required — open `index.html` directly in a browser, or serve the folder
with any static file server (e.g. `python3 -m http.server`) if you need clean relative paths.
There is no lint/test/build command to run.

## Structure

`index.html` sections in order: header, Hero (`#inicio`), Diferenciais, Quem Somos (`#sobre`),
Serviços (`#servicos`) — four cards: Sofá, Poltrona, Cama, Tapete, matching the four service icons
printed on the badge logo, don't silently collapse them back into three — Como Funciona, Contato
(`#contato`), footer.

## Known gaps

- No real photography exists yet for the services/differentiators — those spots use custom SVG
  icons and gradient circles in the brand palette instead of photos.
- Contact details (phone, e-mail, WhatsApp number, CNPJ, business hours) are still placeholders
  (`XX`/`xxxxx`) pending real business info — search the codebase for those before shipping.
- The header nav links (`Início`/`Sobre nós`/`Serviços`/`Contato`) are hidden below 768px with no
  JS-driven mobile menu (matches the original design, which never had one) — if a hamburger menu
  is wanted later, that's the one place this project would need JavaScript.
