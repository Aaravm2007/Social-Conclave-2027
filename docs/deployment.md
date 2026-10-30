# Deployment

The site is prepared for a static hosting service. No hosting provider is configured or deployed by this repository restructure.

| Setting               | Value                 |
| --------------------- | --------------------- |
| Runtime for builds    | Node.js 24 (`.nvmrc`) |
| Install               | `npm ci`              |
| Validate locally / CI | `npm run check`       |
| Build                 | `npm run build`       |
| Publish directory     | `dist/`               |

Deploy only a successful build, or download the `website-dist` artifact from a successful CI run. Keep `assets/source-images/`, source files, and dependencies out of the published directory. Vite copies only `public/` assets into the static output.

For a host mounted under a subdirectory, set Vite's `base` and update root-relative image URLs to the same base before building. The current site is configured for the domain root.

Before launch, confirm event content, organiser contact details, final guest announcements, study guides, submission links, and registration handling. The website currently directs registration enquiries to the organiser by email. There is no checkout or QR-code flow.

Host-specific caching, domains, security headers, and deployment credentials should be configured when a provider is selected. Do not put secrets in `VITE_*` variables: these are public browser build inputs.
