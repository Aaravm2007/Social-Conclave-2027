# Architecture

This is a single-page static React application. Vite produces the deployable `dist/` directory; there is no server API, database, or payment integration.

## Source boundaries

- `src/app/App.jsx` composes the global layout and landing page.
- `src/components/layout/` owns the header and footer. The header tracks the active section and background contrast while scrolling.
- `src/components/ui/` holds small shared visual components.
- `src/features/landing/LandingPage.jsx` defines section order; `sections/` owns each section's markup and interactions. The schedule's tab state belongs to `Programme.jsx`.
- `src/features/landing/data/` contains event information, agenda briefs, FAQs, and navigation labels.
- `src/styles/site.css` contains the shared visual system and responsive rules. The hero title has its own adjacent stylesheet.

Public images are grouped by purpose. Sections use responsive image variants and preserve intrinsic dimensions. Source and retired artwork lives in `assets/source-images/`, outside the public directory so it is retained without being copied into every deployment. Design provenance and generation prompts are in `docs/design/`.

The prior unused template components and stylesheet were removed. Build configuration and the lockfile stay at the repository root for standard Vite/npm tooling.

## Checks

`npm run check` runs lint, a production build, and the HTTP smoke test. CI owns its implementation in `infra/ci/`; GitHub discovery remains in `.github/workflows/`. Reorganisation should preserve the page's existing content and behaviour.
