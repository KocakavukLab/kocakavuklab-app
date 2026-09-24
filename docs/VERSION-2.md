# Website 2.0.0

Version 2 combines the V18 layout and its saved Moments, footer, and Alumni updates with the V17 content maintenance system. The draft badge is removed.

Edit content in `content/`, not `src/data/generated/`. See [Maintaining content](MAINTAINING-CONTENT.md). Starting, testing, and building regenerate validated content automatically.

Before review, run `npm run content:test`, `npm test`, and `npm run build`. Cloudflare Pages uses `npm run build` and output directory `dist`. Use a preview branch before promoting to production.

V18 visual components were copied unchanged. People and Moments data were transferred into their editable JSON files. Existing PR and review guidelines remain in effect; requiring an approving reviewer must also be configured in repository branch protection.
