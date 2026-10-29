# Contributing

## Choose the change

For news, people, publications, partners, Moments and vacancies, use the content editing instructions below. Keep routine content changes in `content/` and the appropriate `src/assets/` folder. Layout, tooling, dependencies and routes require developer review.

## Submit an issue

Use the content-update or bug issue form. Include the affected page, proposed correction, verified source, image permission and requested publication date. For bugs, add reproduction steps and expected versus actual behavior. Small typo fixes may go directly to a PR.

## Pull request process

Adapted for this website from [ECC's pull request process](https://github.com/affaan-m/ECC/blob/main/CONTRIBUTING.md#pull-request-process).

### 1. Prepare a focused branch

Check existing issues and PRs to avoid duplicate work. For substantial features, agree on the user need and acceptance criteria in an issue first. Branch from the current approved target, normally `main`, using `psgundlacod/<short-description>` for maintainer work. Confirm the PR base and preserve unrelated local edits. Keep content, layout and dependency work focused; explain related changes that must ship together.

### 2. Use a descriptive title

Use `type(scope): description`; scope is optional. Types are `feat`, `fix`, `docs`, `test`, `chore`, `ci`, and `refactor`. Describe the final change, for example:

```text
feat(news): add category filtering
fix(publications): preserve links when a cover is missing
docs: clarify content editing
ci: run unit tests for every pull request
chore(deps): update vulnerable build dependencies
```

This title convention is review policy; CI does not currently validate titles.

### 3. Complete the description

Use the PR template: summarize the problem, resulting behavior, change type, related issue, actual tests, preview evidence and remaining risks. Explain exceptions rather than checking unperformed work. Keep screenshots and source links for content or visual changes. Do not commit credentials, private information, unapproved images or generated content modules.

### 4. Check before pushing

Use the supported Node version and npm. When dependencies change, update and commit `package-lock.json` with `package.json`, then verify a clean `npm ci`. Do not introduce a second package manager or lockfile.

```sh
npm run content:generate
npm run content:test
npm test
npm run build
git diff --check
```

For dependency changes, also run `npm audit` and explain unresolved advisories. Update affected tests, fixtures, shared callers, content validation and documentation together. Follow the behavioral test rules below. Preview affected pages on desktop and mobile; for news inspect list and detail pages, and for Moments inspect the album viewer. Disclose checks that could not run.

### 5. Request review and address feedback

Assign a responsible maintainer and request an independent reviewer when available. Keep incomplete work as a draft. Respond to review comments, push focused follow-up changes, and rerun affected checks. Update the title and description when scope changes. Review the latest revision after new commits. Review timing depends on maintainer availability.

Merge only after resolved conversations and passing checks described below. Independent approval is optional for this sole-maintainer repository. Follow the existing deployment and recovery process; opening or approving a PR is not release authorization.

## Merge

Merge only after required checks pass and conversations are resolved. The maintainer reviews the final diff; independent approval is optional. Use the repository's allowed merge method. Do not bypass protection or force-push a shared release branch.

See the review policy below for enforcement and recovery. A merge may trigger deployment; verify the target and preview first.

## Maintainer guide

Version 2 keeps editable content separate in the page design. Start here for routine website updates.

## Choose the file

| Update | Edit |
| --- | --- |
| News story and its detail page | One `content/news/<id>.md` file |
| People, biographies and social links | `content/people.json` |
| Publications and journal images | `content/publications.json` |
| Collaborators and funding | `content/network.json` |
| Moments, photos and captions | `content/moments.json` |
| Vacancies | `content/jobs.json` |
| Upload an image | Existing appropriate directory under `src/assets/` |

> [!WARNING]
> These paths are relative to the repository root. The files in `src/data/generated/` are build outputs. Never edit them.

## Add news using GitHub's editor

1. Open a content-update branch based on the current approved layout branch.
2. Upload the images under `src/assets/news/` using **Add file → Upload files**. Use short filenames without special characters. Supply approved, publishable photos; do not add personal details without permission.
3. Copy the news example below to `content/news/your-story-id.md`.
4. Replace the metadata values between the two `---` lines. Use JSON or YAML metadata. For JSON, keep double quotes and commas between fields. For YAML, use spaces for indentation and quote dates.
5. Write the article below the second `---` line using ordinary Markdown: paragraphs, **bold**, lists and `[link text](https://example.org)`. Do not paste HTML or React code.
6. Set `id` to the filename without `.md`. Existing IDs are public URLs; changing one breaks old links. Set `date` to the verified publication date in `YYYY-MM-DD` format and edit `dateDisplay` to match.
7. Set `image` to a repository path such as `src/assets/news/example.jpg`. Optional `photoPair` contains exactly two image paths for the existing side-by-side layout. Optional `memberImages` contains member portrait paths. Optional `tags` contains text labels.
8. Open a pull request. Explain the change, include sources, and request review. A maintainer can run the local preview and attach screenshots. Wait for passing checks and resolved review conversations before merging.

Categories: `grant`, `award`, `new_member`, `publication`, `general`. Dates sort newest first. Future dates are not automatically hidden: do not merge unpublished announcements early. Template files outside `content/` never render.

## Edit structured lists

Copy a nearby record, then replace its values. Keep JSON punctuation and existing group IDs. Every new record needs a unique ID except publications, which use a unique DOI URL. Keep all required fields. Empty optional social links should be omitted, not set to an empty string.

- **People:** member records accept social/profile links only; omit email fields. Put the person in the correct group's `members` array. For the first four active groups, add their ID to `activeOrder` at the desired position. Remove the ID there when moving someone to alumni. Validation requires every active ID exactly once. Student/visitor and alumni order follows their arrays.
- **Publications:** use `MM/YYYY` for the date, a full DOI link, author text, cover image, and journal logo. Publications display newest first by year and month. Set `hidden: true` to retain a paper without displaying it; 2019 and 2020 papers retain their existing hidden flags. Cover image and journal logo are optional; the page supplies its existing text fallback.
- **Network:** edit `items` inside the single `network` group. Funding and collaboration logos share this group. Keep the group ID in place. Use full HTTPS links. The inherited `#` placeholder remains supported; replace it with a verified link when known.
- **Moments:** add an event under the correct year. Each photo requires a unique ID, `src` image path, and meaningful `alt` text. Each year appears as an album; its photos form the collage. Check the album cover and expanded viewer after adding photos. Keep newest years/events first; array order controls this page.
- **Jobs:** choose `phd`, `postdoc`, or `minijob`; status is `Open` or `Closed`. The Join Us page keeps its current application and contact controls.

## Local preview

Use Node 22.22.2 or newer and npm with the committed lockfile:

```sh
npm ci
npm run content:generate
npm run content:test
npm test
npm run build
npm start
```

`npm start` and `npm run build` generate and validate content first. When changing content while the dev server is already running, run `npm run content:generate` again; the server reloads the generated modules. Invalid content stops generation before any outputs are written. `npm run content:check` checks whether generated outputs are current.

Validation catches malformed metadata, missing required fields, duplicate IDs/DOIs, invalid dates, missing images, unsafe URL schemes, unsupported categories, and invalid member order. It cannot verify scientific accuracy, image consent, external-link availability, or guarantee that every browser interaction works. Review the actual preview too.

## Design boundary

Home hero/title, layout, typography, navigation, routes, forms, maps and legal/information page structure remain unchanged. Version 2 exposes the six existing content collections; Contact, Overview, Privacy, Imprint, Credits and 404 prose remains in existing components. Ask a developer for those changes rather than editing JSX without review. Further prose extraction should be a separate, appearance-preserving change with developer review.

## Recovery

Before deployment, confirm the target branch and compare it with the reviewed PR. If a merged content change is wrong, use GitHub's **Revert** on that PR and review the revert; do not reset or force-push a shared branch. Rebuild/redeploy the approved commit using the existing release workflow. Use the approved release history to recover prior versions.

## News example

Save as `content/news/your-story-id.md`; replace every placeholder and supply the image before validation.

```markdown
---
{
  "id": "your-story-id",
  "title": "Your verified news headline",
  "date": "2026-09-11",
  "dateDisplay": "September 2026",
  "category": "general",
  "image": "src/assets/news/your-photo.jpg",
  "shortDescription": "A short, factual summary for the news card.",
  "tags": ["Research"]
}
---
Write the news story here. Verify names, dates, titles and claims before submitting.

[Supporting source](https://example.org)
```

## Review and merge policy

These are the required project rules. Live GitHub rules were verified on 2026-10-26; the saved payload matches the sole-maintainer policy.

A repository administrator should configure the actual protected release/integration branches with:

- Pull requests required before merging; no routine direct pushes.
- Zero required approvals for the sole-maintainer workflow; request independent review when available.
- Do not require latest-push approval or dismissal of stale approvals in the sole-maintainer workflow.
- All review conversations resolved.
- Required status checks: `validate` and `unit-tests` from GitHub Actions; CodeQL scanning must satisfy the configured security thresholds.
- Branch up to date before merge, or the repository's existing merge queue if one is already used.
- Force pushes and branch deletion blocked.
- Bypass permissions limited to an explicitly agreed emergency administrator procedure, with follow-up review.

The owner must name at least one available collaborator with review permissions before requiring independent approval. A sole maintainer cannot approve their own PR. CODEOWNERS is optional routing, not a substitute for required approval; no unknown reviewer or team is assigned by this guide.

A PR or documentation file cannot enforce these settings. Check repository permissions and plan support before applying them. Rules remain unchanged until separately approved and applied by an administrator.

Content edits must not modify page components, CSS, generated output, or routing. Changes to content tooling, CI, dependencies, or layouts need developer review. The PR diff and changed-file summary make those changes visible; this policy is not a security sandbox.

## Release and recovery

Check the Cloudflare branch preview before merging changes that affect rendering or hosting. Confirm build output, direct-route refreshes, images, mobile navigation and affected interactions. Validation cannot confirm scientific accuracy or permission to publish.

For an incorrect merged change, open a reviewed revert PR and redeploy through the normal release process. Do not reset shared history. Confirm the deployed commit after release.

See [WebsiteOverview.md](WebsiteOverview.md) for architecture, page ownership and deployment.

## Verify content additions before review

The five structured collections accept JSON, YAML (`.yaml`) or `.yml`. Keep exactly one file per collection: for example, `people.json` OR `people.yaml`, never both. Existing JSON files remain valid. News Markdown accepts JSON or YAML metadata between `---` delimiters. YAML dates stay strings; use spaces for indentation. Duplicate keys, aliases and custom tags are rejected. The same field, link and image validation applies to both formats.

`npm run content:test` adds temporary examples for people, publications, network, jobs, Moments and news, verifies generated output, and checks that an invalid edit does not overwrite the last valid output. `npm test` checks those additions in the affected pages, including Overview and news detail, and smoke-tests the static pages. Fixtures live in a temporary directory and are deleted after tests; they never become published website content. Contact and legal pages do not accept data-driven blocks.

Use optimized WebP assets for photographs and publication thumbnails. Before deleting an original, confirm its optimized replacement exists, search source/content/public files for references, and run content validation and a production build. Keep SVG organization marks as SVG. Git history retains removed originals; no history rewrite is needed to clean the current tree.

For publication screenshots, use a flat rendering of the source PDF page, preserve proportions, save as WebP and include the source URL, DOI and page number in the PR. Avoid decorative page mockups. The Cell 2022 GLASS thumbnail uses PDF page 1 from [the coauthor-hosted paper](https://www.barthel-lab.com/publications/data/2022_Cell_GLASSx.pdf), DOI `10.1016/j.cell.2022.04.038`.

Before deleting obsolete branches, archive their tips in a verified Git bundle and record the branch-to-commit mapping and restore commands. Preserve uncommitted work separately. Never delete a branch supporting an open PR; retain the active maintainer branch and main. Archive files are local recovery artifacts, not website assets.

## YAML editing example

To switch a collection, convert its existing JSON data to YAML and remove the JSON source in the same change. Do not discard existing records. For example, a publication record inside `content/publications.yaml` looks like:

```yaml
- title: Example research title
  journal: Example Journal
  doi: https://example.org/paper
  authors: Example Author
  date: "09/2026"
  status: Published
  hidden: false
```

For news, keep the `.md` filename and use YAML front matter:

```markdown
---
id: sample-story
title: Sample story
date: "2026-09-25"
dateDisplay: September 2026
category: general
shortDescription: Example summary for local testing.
---
Article text goes here.
```

Save as `content/news/sample-story.md`. Run `npm run content:generate` after saving; a running development preview reloads the generated modules. For a production preview, rebuild first. Test-only examples must stay out of release content. Tests cover YAML additions and updates in all six editable collections, JSON/YAML equivalence, and invalid edits preserving previous generated output.

## Page-by-page editing examples

> [!TIP]
> The examples below match the current JSON collection files. Insert records into the named array, keeping existing records and group IDs. They are examples, not ready-to-publish lab facts. Replace example URLs, names and image paths with approved values.

> [!IMPORTANT]
> YAML is optional: convert an entire collection to `.yaml` or `.yml` and remove its `.json` source in the same change. Never keep two source files for one collection. Do not paste a YAML fragment into a JSON file. News Markdown supports either metadata format.

### Overview — `/overview`

Latest news comes automatically from `content/news/*.md`; use the News example. Social buttons use `principalInvestigator` in `content/people.json`. Change these fields inside that existing object, preserving all other fields:

```json
"twitter": "https://x.com/ekocakavuk",
"linkedin": "https://www.linkedin.com/in/verified-profile/"
```

Hero, About text and affiliation logos are in `src/components/pages/Overview.jsx`. A developer can replace text inside the existing heading while preserving its attributes and layout, for example:

```jsx
Research at the intersection of oncology, computation &amp; genomics.
```

### Members — `/members`

File: `content/people.json`. Add this object to the appropriate group's `members` array:

```json
{
  "id": "example-researcher",
  "name": "Example Researcher",
  "image": "src/assets/members/example-researcher.webp",
  "role": "Postdoctoral Researcher",
  "description": "A verified description of their research interests.",
  "website": "https://example.org/researcher"
}
```

For an active member in the first four groups, also insert `"example-researcher"` into the existing `activeOrder` array. When moving someone to the `alumni` group, move their record and remove their ID from `activeOrder`. Keep the same person ID and their approved biography.

### Publications — `/publications`

File: `content/publications.json`. Append one object to the top-level array:

```json
{
  "title": "Verified publication title",
  "journal": "Journal name",
  "doi": "https://doi.org/REPLACE-WITH-VERIFIED-DOI",
  "authors": "Author A., Author B., Kocakavuk E.",
  "date": "09/2026",
  "status": "Published",
  "image": "src/assets/pubs/example-paper.webp",
  "journalLogo": "src/assets/logos/example-journal.svg",
  "hidden": false
}
```

Use `hidden: true` to hide a record without deleting it. Status accepts `Published`, `Preprint`, `In-review`, or `Submitted`. Image and journal logo are optional. Both thumbnail and title link to `doi`. Verify the newest-first order and both links after updating.

Author highlighting is derived from `content/people.json`, including the PI, all member groups and alumni. Use comma-separated authors in `Surname A. B.` format or the full name listed on the Members page. Matching ignores case, punctuation and accents, but requires every listed given-name initial; surname-only matches and missing middle initials are not accepted. Update member records rather than adding names to the publication component. Compound surnames and publication aliases need explicit support before relying on automatic matching. Names and initials cannot distinguish two different people with identical names and initials; verify authorship when adding a publication.

The ESCAT v2 thumbnail (`annals-oncology-escat-v2-2026.webp`) renders page 1 of the user-supplied article-in-press PDF without changing its contents. Source: [Annals of Oncology](https://www.annalsofoncology.org/article/S0923-7534(26)06651-2/pdf), DOI `10.1016/j.annonc.2026.09.008`. The listing uses the verified online publication date, 21 October 2026, rather than the PDF's placeholder date.

### Network — `/network`

File: `content/network.json`. Insert into `items` under the existing `network` group:

```json
{
  "id": "example-partner",
  "title": "Example Research Partner",
  "logo": "src/assets/logos/example-partner.svg",
  "url": "https://example.org/partner"
}
```

The title supplies the card's accessible link label. Verify logo proportions and destination.

### News and article detail — `/news`, `/news/<id>`

File: `content/news/example-story.md`. This is a complete YAML-front-matter example:

```markdown
---
id: example-story
title: Verified lab announcement
date: "2026-09-25"
dateDisplay: September 2026
category: general
image: src/assets/news/example-story.webp
shortDescription: A short verified summary for the card.
tags:
  - Research
---
Write the full announcement here.

[Read the supporting source](https://example.org/research)
```

The filename must match `id`. Update an existing story in place to preserve its URL. Check Overview, News, article detail, source links, and previous/back navigation. Never merge example or future announcements unintentionally.

### Moments — `/moments`

File: `content/moments.json`. Add this year group only if the year does not exist. Otherwise insert its event into the existing year's `events` array:

```json
{
  "year": 2026,
  "events": [
    {
      "id": "example-outing-2026",
      "date": "September 2026",
      "title": "Lab outing",
      "description": "An approved description of the team event.",
      "photos": [
        {
          "id": "example-outing-group",
          "src": "src/assets/moments/example-outing.webp",
          "alt": "Lab members together at the September outing"
        }
      ]
    }
  ]
}
```

Keep newest years first. Photo IDs must be unique across all albums. The page groups photographs by year; event title/date become photo hover captions. Description is stored but currently not displayed. Test album opening, image crops, next/previous, and Escape close. An event must retain at least one photo; remove an empty event rather than leaving `photos: []`.

### Join Us — `/joinus`

File: `content/jobs.json`. Add to the `jobs` array inside `phd`, `postdoc`, or `minijob`:

```json
{
  "id": "example-phd-position",
  "title": "PhD position in computational oncology",
  "description": "Verified project summary and application requirements.",
  "status": "Open",
  "applyLink": "https://example.org/verified-vacancy"
}
```

Set status to `Closed` when recruitment ends. Closed records remain in content but disappear from the page. The View details button uses `applyLink`; general application buttons still lead to Contact.

### Contact — `/contact`

File: `src/components/pages/Contact.jsx`; developer review required. There is no Contact YAML collection. An email link has this JSX shape; preserve existing classes and verify address before replacing values:

```jsx
<a href="mailto:verified-address@example.org">verified-address@example.org</a>
```

Map link and iframe are separate URLs in the same component. Update them together. EmailJS delivery settings are separate from the displayed address; changing display text does not change the message recipient. Never submit test email to the live service without authorization.

### Privacy, Imprint, Credits and 404

These are static components, not JSON/YAML collections:

| Page | File | Example text or value to edit in place |
| --- | --- | --- |
| Privacy | `src/components/pages/PrivacyPolicy.jsx` | Hosting provider or data-processing explanation |
| Imprint | `src/components/pages/Imprint.jsx` | Responsible party/contact details in existing sections |
| Credits | `src/components/pages/DesignCredits.jsx` | Maintainer or library entry in the existing arrays |
| 404 | `src/components/NotFound.jsx` | Recovery heading and link text |

Text-only JSX examples (keep the original surrounding tags, attributes and classes):

```jsx
// PrivacyPolicy.jsx: verified privacy explanation inside its existing paragraph
Your approved explanation of how this website processes contact requests.

// Imprint.jsx: verified responsible-party text inside its existing section
Your approved legal contact details.

// NotFound.jsx: heading text inside the existing h1
Page not found
```

Credits use array entries. Copy a neighboring entry and preserve that array's field names; for example the maintenance list uses:

```js
{
  label: "Maintainer name",
  to: "https://example.org/maintainer",
  detail: "Approved maintenance responsibility"
}
```

> [!WARNING]
> Static-page examples illustrate where to edit, not legal advice or replacement page files. Have the responsible lab owner approve legal claims. Do not replace entire components with these fragments.

### Browser title and shared navigation

Edit `index.html` for the default browser title:

```html
<title>Kocakavuk Lab</title>
```

Shared navigation lives in `src/components/Navbar.jsx`; footer in `src/components/Footer.jsx`. Changes there affect every page and need developer review. The 404 page sets its own descriptive browser title.

## Contact and responsive layout rules

- Member cards show social/profile links only. Email fields are not supported by the people schema.
- Footer “Email the lab”, Join Us “Email our PI”, and the Imprint address use `contact@kocakavuklab.com`. Contact shows the message form and location without a separate email address. EmailJS delivery configuration is managed separately.
- Footer branding is centered. Below 651px, show branding only; hide footer columns and the copyright row.
- News uses a left rail and readable single-column cards below 900px, and alternating cards around a centered rail from 900px. Maintain 16px body text, keyboard-operable cards, visible focus, and reduced-motion support.
- Check phones and tablets in portrait and landscape, plus desktop. Preserve story IDs, chronological order, detail links, and existing content.


## Tests for fixes and features

Every PR runs both `validate` (content validation and production build) and `unit-tests` (the full Vitest suite). Neither job uses path filters. A failing check blocks merge when the main branch ruleset is active.

Bug issues must describe reproduction steps, expected behavior and regression-test acceptance criteria. Feature issues must explain the user need, acceptance criteria and testable edge cases. Issues describe work; tests run on the implementing PR.

Bug fixes must add a regression test that fails before the fix and passes afterward. Features and behavior changes must add or update tests for the intended behavior and relevant failure or boundary cases. Tests must assert observable behavior rather than copy implementation details. Run the full existing suite to catch regressions.

Content-only, documentation-only and dependency-only PRs may reuse existing checks when no behavior changes. Explain why a new test is unnecessary and report actual check results. Dependency changes also require `npm audit`; CSS tooling changes require checking the generated styles or a visual preview.

The PR must link an issue when one exists, state which tests cover the change, and disclose untested behavior. The maintainer verifies test adequacy and seeks independent review when available. A green suite alone does not prove new behavior has meaningful coverage. Do not add arbitrary coverage percentages as a substitute for behavioral assertions.

### Main branch enforcement

`.github/main-ruleset.json` defines the requested GitHub rules: PRs required, zero required approvals, resolved review conversations, up-to-date branches, passing `validate` and `unit-tests` checks from GitHub Actions, CodeQL results with no high-or-higher security alerts or errors/warnings, and blocked force pushes and deletion. No bypass actors are configured.

This file is an administrator import payload, not automatic enforcement. The live Protect main ruleset is active. Future edits to this JSON must be applied separately by an administrator and verified against live settings.
