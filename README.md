# Social Conclave 2027

A React/Vite landing page with a static production build. Requires Node.js 24 or newer; local development and CI use `.nvmrc` (Node.js 24).

## Start locally

```sh
nvm use
npm ci
npm run dev
```

Open http://localhost:3000. `nvm use` is optional if Node.js 24 is already installed.

## Validate the production website

```sh
npm run check
```

This runs strict linting, builds `dist/`, then starts an isolated preview on port 4173 and verifies the homepage and every generated asset. It stops that preview automatically. Set `SMOKE_PORT` if 4173 is already in use.

To review the finished build yourself, run `npm run preview` and open http://localhost:3000. Stop the development server first if it is using that port.

## Repository layout

```text
src/
  app/                  Application composition
  components/
    layout/             Navigation and footer
    ui/                 Shared label and social icons
  features/landing/
    data/               Event content, navigation, FAQs
    sections/           Individual landing-page sections
    LandingPage.jsx     Page composition
  styles/               Shared site styling
  main.jsx              Browser entry point
public/images/
  agendas/              Responsive agenda artwork
  events/               Responsive event photography
  guests/               Responsive guest portraits
  logos/                Logos and favicon used by the site
assets/source-images/   Original and retired artwork; excluded from dist
infra/ci/               CI implementation and production smoke test
.github/workflows/      GitHub-required workflow entry point
docs/                   Architecture and deployment documentation
  design/               Artwork provenance, prompts, enhancement reports
```

## Continuous integration

Every push, pull request, and manual run starts `.github/workflows/ci.yml`. It checks out the repository and calls the local composite action in `infra/ci/action.yml`. That action installs locked dependencies, lints, builds, tests the production output, and retains the `website-dist` artifact for 14 days. It needs no deployment credentials and does not publish the website.

After the workflow has run on GitHub, require **Lint and production build** in your branch protection rules. See [CI documentation](infra/ci/README.md).

## Editing and deployment

Change event content in `src/features/landing/data/content.js`, FAQs in `data/faqs.js`, and section composition in `src/features/landing/LandingPage.jsx`. Registration currently opens an organiser email enquiry; no payment gateway or QR code is included.

See [architecture](docs/architecture.md), [deployment](docs/deployment.md), and [image provenance](docs/design/image-enhancement.md).
