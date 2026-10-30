# Social Conclave 2027

React website built with Vite.

## Local development

Use Node.js 24 (`nvm use` if you use nvm), then:

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Production checks and preview

```sh
npm run lint -- --deny-warnings
npm run build
npm run preview
```

The preview at http://localhost:3000 serves the production build. Stop the development server first if it is using that port.

## Continuous integration

GitHub Actions runs `.github/workflows/ci.yml` on every push and pull request, or manually from the Actions tab. It installs exact dependencies from the lockfile, rejects lint errors and warnings, and builds the production website. Successful runs save `dist/` as the `website-dist` artifact for 14 days.

After pushing this workflow, require the **Lint and production build** check in the repository's branch protection settings to prevent merging failing changes.

## Deployment later

Configure a static website host with `npm ci` as the install command, `npm run build` as the build command, and `dist` as the output directory. CI prepares this output but does not publish it. No deployment credentials are needed yet.

Before launch, replace placeholder event content in `src/data/content.js`, including the registration link. If hosting under a subdirectory, configure Vite's `base` for that path before building.

## Landing page content and artwork

The landing page is composed in `src/App.jsx` with responsive styles in `src/App.css`. Event details and agenda briefs come from `src/data/content.js`. Registration currently opens an organiser email enquiry; no checkout or QR code is included. Instagram and LinkedIn links appear in the footer.

`public/images/` contains locally optimised artwork supplied by the committee, plus logos, past-guest portraits, and an event image extracted from the supplied information booklet. Past guests are explicitly labelled as past participants. Study guides and submission URLs remain pending and are described in the FAQ without publishing placeholder links.
