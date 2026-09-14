# Proposed review and merge policy

Status: draft, not applied to GitHub settings.

After approval, a repository administrator should configure the actual production/integration branch and `psgundla-layout` with:

- Pull requests required before merging; no routine direct pushes.
- At least one approving reviewer other than the PR author.
- Dismiss stale approvals when new commits change the PR; require approval of the most recent reviewable push by someone other than its pusher.
- All review conversations resolved.
- Required status check: `Content and build / validate` (confirm the exact context after its first successful run).
- Branch up to date before merge, or the repository's existing merge queue if one is already used.
- Force pushes and branch deletion blocked.
- Bypass permissions limited to an explicitly agreed emergency administrator procedure, with follow-up review.

The owner must name at least one available collaborator with review permissions before requiring independent approval. A sole maintainer cannot approve their own PR. CODEOWNERS is optional routing, not a substitute for required approval; no unknown reviewer or team is assigned by this draft.

A PR or documentation file cannot enforce these settings. Check repository permissions and plan support before applying them. Rules remain unchanged until separately approved and applied by an administrator.

Content edits must not modify page components, CSS, generated output, or routing. Changes to content tooling, CI, dependencies, or layouts need developer review. The PR diff and changed-file summary make those changes visible; this policy is not a security sandbox.
