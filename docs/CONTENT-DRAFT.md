# Content maintenance draft

Base: `origin/psgundla-layout` at `01bad6c30a2c6a98a401c110eea5cc7e3fbd6ef5`.
Draft branch: `psgundlacod/content-maintenance-draft`.

## Delivered

- Nine news stories migrated to Markdown with JSON metadata.
- People, publications, network/funding, moments and vacancies migrated to JSON.
- Static adapters preserve the data exports consumed by existing components.
- No new dependency, runtime content fetch, CMS account, or page-layout system.
- Content validation before start, tests and production builds.
- Maintainer guide, news template, issue forms, PR checklist, and CI workflow.
- Proposed independent-review policy; GitHub settings remain unchanged.

## Validation

All exported values from the five former data modules were compared against the base revision, including dates and resolved image paths. Publications were compared field-for-field and in original input order. All matched. Existing source JSX and styling were preserved; Publications only replaces its inline data/imports with the generated data import.

Content validation and failure-path checks pass. The old CRA test had no assertions and failed on ReactMarkdown's ESM imports. It now tests the actual data contracts used by the pages: news lookup, Date values, descending order, grouping, member slots and job status. Production build passes. These tests do not replace human review of publication accuracy or all browser interactions.

The MAP detail preview loads both photos side by side with no broken images. The remote source baseline uses its existing older header/footer; this draft does not import the separate local redesign. Compare against this base revision, not another preview server or uncommitted checkout.

## Boundaries before approval

This is the first content-maintenance draft, not a complete CMS. Contact, Overview and legal/information page prose remains in existing components; those updates still need a developer. Existing disabled Join Us controls are preserved. No deployment, remote push, merge, or branch-protection change is part of this draft.

Approval should confirm the editable content format and branch baseline. Name an independent reviewer before enforcing the proposed merge policy. Push or integrate this branch only after the draft is accepted.
