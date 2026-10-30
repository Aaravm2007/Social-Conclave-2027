# Continuous integration

`action.yml` owns the website validation steps. The thin `.github/workflows/ci.yml` wrapper remains in the location GitHub requires for discovering workflows.

Steps:

1. Select Node.js from the root `.nvmrc` and cache npm downloads.
2. Install exact lockfile dependencies with `npm ci`.
3. Reject lint errors and warnings.
4. Build the static production website.
5. Run `smoke-test.mjs` against a real Vite preview.
6. Upload `dist/` as `website-dist` for 14 days, only after checks pass.

Run the same checks locally with `npm run check`. The smoke test uses port 4173 by default (`SMOKE_PORT` can override it). A busy port, startup failure, missing HTML dependency, or incorrect served asset fails the check. The process is stopped in a `finally` block, including after failed checks.

The smoke test validates HTTP delivery and artifact completeness. It does not replace browser checks of interactions, accessibility, or external registration and social services.

CI has read-only repository access, does not persist checkout credentials, cancels obsolete runs, and times out after ten minutes. There is no automatic deployment. Keep the job name stable if it is required by branch protection.
