# Updating website content

This draft keeps the page layouts from `psgundla-layout` commit `01bad6c30a2c6a98a401c110eea5cc7e3fbd6ef5`. Content changes do not require React, JSX, CSS, or route changes.

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
3. Copy `docs/templates/news.md.example` to `content/news/your-story-id.md`.
4. Replace the metadata values between the two `---` lines. This metadata uses JSON: keep double quotes, commas between fields, and no comma after the final field. JSON is used to avoid another parser dependency.
5. Write the article below the second `---` line using ordinary Markdown: paragraphs, **bold**, lists and `[link text](https://example.org)`. Do not paste HTML or React code.
6. Set `id` to the filename without `.md`. Existing IDs are public URLs; changing one breaks old links. Set `date` to the verified publication date in `YYYY-MM-DD` format and edit `dateDisplay` to match.
7. Set `image` to a repository path such as `src/assets/news/example.jpg`. Optional `photoPair` contains exactly two image paths for the existing side-by-side layout. Optional `memberImages` contains member portrait paths. Optional `tags` contains text labels.
8. Open a pull request. Explain the change, include sources, and request review. A maintainer can run the local preview and attach screenshots. Wait for passing checks and independent approval before merging.

Categories: `grant`, `award`, `new_member`, `publication`, `general`. Dates sort newest first. Future dates are not automatically hidden: do not merge unpublished announcements early. Template files outside `content/` never render.

## Edit structured lists

Copy a nearby record, then replace its values. Keep JSON punctuation and existing group IDs. Every new record needs a unique ID except publications, which use a unique DOI URL. Keep all required fields. Empty optional social links should be omitted, not set to an empty string.

- **People:** put the person in the correct group's `members` array. For the first three active groups, add their ID to `activeOrder` at the desired position. Remove the ID there when moving someone to alumni. Validation requires every active ID exactly once. Student/visitor and alumni order follows their arrays.
- **Publications:** use `MM/YYYY` for the date, a full DOI link, author text, cover image, and journal logo. Existing publication grouping and display behavior are preserved. This migration does not alter publication visibility or grouping.
- **Network:** edit `items` inside `network` or `funding`. Keep groups in place. Use full HTTPS links. The inherited `#` placeholder remains supported; replace it with a verified link when known.
- **Moments:** add an event under the correct year. Each photo requires a unique ID, `src` image path, and meaningful `alt` text. Keep newest years/events first; array order controls this page.
- **Jobs:** choose `phd`, `postdoc`, or `minijob`; status is `Open` or `Closed`. The inherited Join Us page currently has its Apply button disabled. Changing data does not change that behavior; enabling job display requires a separately reviewed functionality change.

## Local preview

Use Node 22 and npm with the committed lockfile:

```sh
npm ci
npm run content:generate
npm run content:test
npm run build
npm start
```

`npm start` and `npm run build` generate and validate content first. When changing content while the dev server is already running, run `npm run content:generate` again; the server reloads the generated modules. Invalid content stops generation before any outputs are written. `npm run content:check` checks whether generated outputs are current.

Validation catches malformed metadata, missing required fields, duplicate IDs/DOIs, invalid dates, missing images, unsafe URL schemes, unsupported categories, and invalid member order. It cannot verify scientific accuracy, image consent, external-link availability, or guarantee that every browser interaction works. Review the actual preview too.

## Design boundary

Home hero/title, layout, typography, navigation, routes, forms, maps and legal/information page structure remain unchanged. This first draft extracts the six existing content collections; Contact, Overview, Privacy, Imprint, Credits and 404 prose remains in existing components. Ask a developer for those changes rather than editing JSX without review. Further prose extraction should be a separate, appearance-preserving change after this draft is accepted.

## Recovery

Before deployment, confirm the target branch and compare it with the reviewed PR. If a merged content change is wrong, use GitHub's **Revert** on that PR and review the revert; do not reset or force-push a shared branch. Rebuild/redeploy the approved commit using the existing release workflow. The original `psgundla-layout` branch has not been changed by this draft.
