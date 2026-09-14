# Content maintenance draft — corrected visual baseline

Branch: `psgundlacod/content-maintenance-draft`.

The first draft at `2654096` used the old remote layout. This revision copies the complete redesigned site from `/private/tmp/kocakavuk-map-news-preview`, the source serving `http://127.0.0.1:4184`. The served HTML matched that source build. This is the floating navbar, original DNA hero, Segoe UI typography and redesigned pages selected by the user.

## What is preserved

All 170 non-data source/public files matched the selected preview source byte-for-byte after copying, including page components, CSS and images. Data adapters were reconnected to the new content: 12 news stories, 9 publications, current members, partners, moments and vacancies. Comparison confirms content values and rendered news order match the selected preview. Hidden publications and MAP paired photos are retained.

The Vite configuration, dependencies and lockfile now match the redesigned application. Content generation runs before dev/start/build/test. Vitest is scoped to source tests; the standalone content validator runs separately. No new package was added for content editing.

## Checks

- Content validator and invalid-input regression checks passed.
- All four existing redesigned-site tests passed: navigation, map, moments gallery and publication ordering/visibility.
- Vite production build passed; existing large-bundle warning remains.
- Local Home preview displays the floating navbar and original DNA hero.

## Draft boundaries

Maintainer guide, Markdown/JSON content files, issue forms, PR template, CI checks and proposed independent-review policy remain included. Contact, Overview and legal/information prose still live in page components; those updates need developer review.

No remote push, merge, deployment or branch-protection change. Original working checkout and remote `psgundla-layout` remain untouched. Earlier draft remains recoverable through Git history. Current local preview: `http://127.0.0.1:4185/overview`.
