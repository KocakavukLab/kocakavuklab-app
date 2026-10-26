## Summary

Describe the problem, resulting behavior and affected pages or tooling. Explain why the change is needed.

## Type

- [ ] Feature
- [ ] Bug fix
- [ ] Content update
- [ ] Documentation
- [ ] Tests
- [ ] Dependencies / maintenance
- [ ] CI
- [ ] Refactor

Use a title such as `fix(news): preserve detail links` or `chore(deps): update build tooling`.

## Sources and preview

Link supporting sources. Attach desktop/mobile preview screenshots or state what could not be checked.

## Validation

- [ ] `npm run content:generate` and `npm run content:test` pass
- [ ] `npm test` and `npm run build` pass (or unrun checks are explicitly listed)
- [ ] Affected list/detail pages checked; links and images verified
- [ ] Existing appearance and routes preserved, or layout changes explicitly described
- [ ] Facts and permission to publish images checked
- [ ] Title and description reflect the final change
- [ ] Lockfile updated when dependencies change; no secrets or private information added
- [ ] Independent reviewer requested; merge waits for approval and required checks

## Issue and behavioral tests

Related issue (if any):

Tests added or updated, behavior covered, and relevant edge cases:

If no new test is needed, explain why existing checks are sufficient:

- [ ] Bug fix includes a regression test, or the exception is justified above
- [ ] Feature/behavior change includes meaningful tests and acceptance criteria
- [ ] Both `validate` and `unit-tests` pass on this revision
- [ ] Untested behavior and remaining risks are disclosed
