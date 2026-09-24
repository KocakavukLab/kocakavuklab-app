# Contributing

## Choose the change

For news, people, publications, partners, Moments and vacancies, use the content editing instructions below. Keep routine content changes in `content/` and the appropriate `src/assets/` folder. Layout, tooling, dependencies and routes require developer review.

## Submit an issue

Use the content-update or bug issue form. Include the affected page, proposed correction, verified source, image permission and requested publication date. For bugs, add reproduction steps and expected versus actual behavior. Small typo fixes may go directly to a PR.

## Submit a pull request

1. Create a branch from the current approved target branch. Confirm the PR base; do not assume an old version branch is the release target.
2. Make one focused change. Preserve existing IDs and URLs. Do not commit generated output, credentials or unapproved personal information.
3. Run `npm run content:test`, `npm test` and `npm run build`. If using GitHub's editor, disclose that local checks were not run and wait for CI and a maintainer preview.
4. Preview affected pages on desktop and mobile. For news, inspect both list and detail pages; for Moments, inspect the album viewer.
5. Complete the PR template with sources, actual check results and preview evidence. Keep unfinished work as a draft PR.
6. Request an independent reviewer and address feedback. New changes need review of the latest revision.

## Merge

Merge only after required checks pass, conversations are resolved and at least one reviewer other than the author approves the latest changes. Use the repository's allowed merge method. Do not bypass protection or force-push a shared release branch.

See the review policy below for enforcement and recovery. A merge may trigger deployment; verify the target and preview first.

## Maintainer guide

Version 2 keeps editable content separate from the V18 page design. Start here for routine website updates.

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

These paths are relative to the repository root. The files in `src/data/generated/` are build outputs. Never edit them.

## Add news using GitHub's editor

1. Open a content-update branch based on the current approved layout branch.
2. Upload the images under `src/assets/news/` using **Add file → Upload files**. Use short filenames without special characters. Supply approved, publishable photos; do not add personal details without permission.
3. Copy the news example below to `content/news/your-story-id.md`.
4. Replace the metadata values between the two `---` lines. This metadata uses JSON: keep double quotes, commas between fields, and no comma after the final field. JSON is used to avoid another parser dependency.
5. Write the article below the second `---` line using ordinary Markdown: paragraphs, **bold**, lists and `[link text](https://example.org)`. Do not paste HTML or React code.
6. Set `id` to the filename without `.md`. Existing IDs are public URLs; changing one breaks old links. Set `date` to the verified publication date in `YYYY-MM-DD` format and edit `dateDisplay` to match.
7. Set `image` to a repository path such as `src/assets/news/example.jpg`. Optional `photoPair` contains exactly two image paths for the existing side-by-side layout. Optional `memberImages` contains member portrait paths. Optional `tags` contains text labels.
8. Open a pull request. Explain the change, include sources, and request review. A maintainer can run the local preview and attach screenshots. Wait for passing checks and independent approval before merging.

Categories: `grant`, `award`, `new_member`, `publication`, `general`. Dates sort newest first. Future dates are not automatically hidden: do not merge unpublished announcements early. Template files outside `content/` never render.

## Edit structured lists

Copy a nearby record, then replace its values. Keep JSON punctuation and existing group IDs. Every new record needs a unique ID except publications, which use a unique DOI URL. Keep all required fields. Empty optional social links should be omitted, not set to an empty string.

- **People:** put the person in the correct group's `members` array. For the first four active groups, add their ID to `activeOrder` at the desired position. Remove the ID there when moving someone to alumni. Validation requires every active ID exactly once. Student/visitor and alumni order follows their arrays.
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

These are the required project rules. GitHub enforcement has not been verified or changed as part of this documentation update.

A repository administrator should configure the actual protected release/integration branches with:

- Pull requests required before merging; no routine direct pushes.
- At least one approving reviewer other than the PR author.
- Dismiss stale approvals when new commits change the PR; require approval of the most recent reviewable push by someone other than its pusher.
- All review conversations resolved.
- Required status check: `Content and build / validate` (confirm the exact context after its first successful run).
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
