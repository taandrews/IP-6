# IP-6 Research

The review and publication URL for all site changes is **https://taandrews.github.io/IP-6/**.

Publish changes by pushing to `main` on `https://github.com/taandrews/IP-6.git`. The `Deploy to GitHub Pages` workflow builds and publishes the static export. Wait for that workflow to succeed and verify the live page before reporting publication complete.

Use the default `/IP-6` base path for GitHub Pages. Do not substitute a separate Sites preview for this deployment destination.

Local validation: `npm ci`, `npm run build`, then `node scripts/verify-export.mjs`.

The source collection and migration notes are in `content/MIGRATION.md`.
