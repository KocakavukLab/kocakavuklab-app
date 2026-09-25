# Kocakavuk Lab website 

Computational Oncology at University Hospital Essen.

- [Contributing and maintainer guide](CONTRIBUTING.md): edit content, submit issues and PRs, review and merge.
- [Website overview](WebsiteOverview.md): current layout, framework, folders, local setup and deployment.

The site uses validated Markdown, JSON and optional YAML content. Start with `npm ci` and `npm start`; see WebsiteOverview for Node requirements and release checks.


> [!TIP]
> Start with the page-by-page examples in [CONTRIBUTING.md](CONTRIBUTING.md#page-by-page-editing-examples). Routine content edits do not require layout changes.

> [!WARNING]
> Never edit `src/data/generated/`. Edit `content/`, then run `npm run content:generate`.

> [!IMPORTANT]
> Pull requests need passing checks and independent approval. GitHub rule configuration is deferred; committing documentation alone does not protect branches.
