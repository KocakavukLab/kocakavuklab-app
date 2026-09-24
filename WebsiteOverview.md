# Website overview — Version 2

This guide explains the current Kocakavuk Lab website for future lab members. For editing instructions and review rules, use [CONTRIBUTING.md](CONTRIBUTING.md).

## What visitors see

The site uses the V18 design with the maintainer content system integrated. A floating navigation bar stays available while scrolling; small screens use a menu. The original DNA cover and home title remain. Shared typography is controlled by `src/components/Typography.css`, using the Segoe UI system-font stack. Cream backgrounds, dark text and orange accents connect the pages. The shared footer includes decorative particles.

| Page / URL | Purpose and layout | Content owner |
| --- | --- | --- |
| Overview `/overview` | Large DNA hero, lab introduction, latest news cards, social embed and affiliation logos | `Overview.jsx`; news cards use news data |
| People `/members` | Principal investigator, research team and Alumni | `content/people.json` |
| Network `/network` | Responsive partner/funder logo grid | `content/network.json` |
| Publications `/publications` | Newest year/month first, paper thumbnails and journal logos; hidden records excluded | `content/publications.json` |
| News `/news` | Dated news timeline | `content/news/*.md` |
| News detail `/news/:newsId` | Article text and images; optional paired photos | Same news file; ID controls URL |
| Moments `/moments` | Stacked yearly collage albums; expanded viewer with captions, previous/next and Escape close | `content/moments.json` |
| Join Us `/joinus` | Vacancies and application information | `content/jobs.json`; application prose in `JoinUs.jsx` |
| Contact `/contact` | Form and Google Map, two columns on desktop and stacked on mobile; width capped at 1440px | `Contact.jsx` and `common/LocationMap.jsx` |
| Privacy `/privacypolicy`, Imprint `/imprint`, Credits `/designcredits` | Information pages | Corresponding page components |
| Unknown URLs | Not-found page | `src/components/NotFound.jsx` |

`/` and `/about` lead to `/overview`. Page components live in `src/components/pages/` unless stated otherwise. Content editing does not automatically cover every text on every page: the component-owned prose above needs developer review.

## Framework and responsibilities

- **React 18** builds the interface from reusable components.
- **React Router** chooses pages without a full document reload. `src/App.jsx` defines the routes; `src/index.jsx` starts the application with BrowserRouter.
- **Vite** serves local development and builds the production site. No running Node application server is needed to serve the built files.
- **Tailwind CSS and component CSS** control responsive spacing and appearance. `Layout.jsx` wraps pages with the shared navbar, main area and footer.
- **React Markdown** renders news. Contributors write Markdown with JSON metadata between `---` delimiters; this is not YAML. Do not add executable code or HTML to articles.
- **tsParticles** supplies the decorative footer animation. Animation changes belong to developer work.
- **EmailJS** sends contact form submissions from the browser. Successful page rendering does not prove email delivery; test deliberately with a known test message. Never put private service credentials into frontend files.
- **Google Maps embeds** are external services. Their availability and browser privacy settings can affect loading independently of the site build.

## How content becomes a page

```text
content/ Markdown and JSON + src/assets/ images
                    |
       scripts/content.mjs validates inputs
                    |
      src/data/generated/ JavaScript modules
                    |
       src/data/ adapters -> React pages
                    |
           Vite -> build/ -> Cloudflare
```

`src/data/generated/` is ignored by Git and recreated before start, test and build. Never edit it directly. If a preview is already running, rerun `npm run content:generate` after a content edit. Validation checks structure, dates, duplicate identifiers, image paths and supported values. People still verify facts, publication permissions and visual quality.

## Folder map

| Location | Responsibility |
| --- | --- |
| `content/` | Six editable collections: news, people, publications, network, Moments, jobs |
| `src/assets/` | Photos, logos and other bundled media |
| `scripts/content.mjs` | Content validation and module generation |
| `scripts/content.test.mjs` | Invalid-input and content regression checks |
| `src/components/` | Shared UI, pages, styles and interaction tests |
| `src/data/` | Adapters connecting generated content to existing pages |
| `public/` | Files copied directly to output, including hosting rules |
| `.github/` | Issue forms, PR template and validation workflow |
| `build/` | Generated production output, not edited or committed |

## Run and check locally

Use Node satisfying the project and dependency requirements: Node 22.22.2 or a compatible newer release. Install from the committed lockfile.

```sh
npm ci
npm start
```

Use the local URL printed in the terminal. Before review:

```sh
npm run content:test
npm test
npm run build
npm run preview
```

The last command previews built files. Rebuild after changing source if using this production preview. See CONTRIBUTING for content-editing examples and required review.

## GitHub and Cloudflare

The `Content and build` workflow runs on pull requests; its push trigger currently names `main` and `psgundla-layout`. It installs dependencies, generates content, runs content regression checks and application tests, then builds. A passing workflow does not itself grant review approval.

Current V2 output is `build/`; Cloudflare's output setting must match. Keep build command `npm run build`, repository-root build context and a compatible Node version. Enable a branch preview to test before merging into the confirmed production branch. Do not infer deployment from a local build or version number.

The repository pins Node 22.22.2 in `.node-version`; remove any older dashboard override. Cloudflare Pages provides SPA route fallback without a top-level `404.html`, so no catch-all redirect is needed. Only hashed `/assets/*` files receive immutable caching. Confirm these settings in the branch deployment log before release.

On the Cloudflare preview, test direct links and refreshes, images, navigation on desktop/mobile, the Moments viewer, the map and intentional contact delivery. Keep the deployed commit identifiable. For a bad release, use a reviewed revert and redeploy through the existing process rather than rewriting shared history.

## Safe maintenance boundary

Routine updates change content and approved images. Changes to CSS, React, routes, form behavior, tooling or dependencies need developer review. Preserve the selected design unless a redesign is explicitly requested. GitHub branch protection must enforce the independent approval and required checks described in CONTRIBUTING; documentation alone cannot enforce them.
