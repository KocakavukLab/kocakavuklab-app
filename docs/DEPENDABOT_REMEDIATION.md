# Dependabot remediation

Snapshot date: 2026-09-04. Source: 57 open alerts on
`psgundla/kocakavuklab-app` default branch. All alerts target transitive npm
dependencies in `package-lock.json`. GitHub marks 11 React Router alerts as
development-scoped.

## GitHub alert inventory

| Highest severity | Package | Alerts | Affected versions | First patched version(s) | Alert numbers |
|---|---|---:|---|---|---|
| High | `fast-uri` | 4 | `3.0.0-3.1.5` | `3.1.6` | 130, 131, 133, 134 |
| High | `js-yaml` | 6 | `<3.15.1`; `4.0.0-4.3.0` | `3.15.1`, `4.3.1` | 86, 87, 97, 98, 125, 126 |
| High | `minimatch` | 6 | `<3.1.4`; `5.0.0-5.1.7` | `3.1.4`, `5.1.8` | 36, 37, 39, 40, 41, 42 |
| High | `nanoid` | 1 | `<3.3.18` | `3.3.18` | 127 |
| High | `path-to-regexp` | 1 | `<0.1.13` | `0.1.13` | 59 |
| High | `picomatch` | 4 | `<2.3.2`; `4.0.0-4.0.3` | `2.3.2`, `4.0.4` | 49, 50, 60, 61 |
| High | `postcss` | 4 | `<=8.5.22` | `8.5.23` | 75, 105, 106, 111 |
| High | `react-router` | 11 | affected v6/v7 ranges through `7.17.x` | `7.18.0` | 99, 100, 113-120, 124 |
| High | `serialize-javascript` | 2 | `<=7.0.4` | `7.0.5` | 43, 71 |
| High | `svgo` | 2 | `1.0.0-2.8.2` | `2.8.3` | 46, 95 |
| High | `underscore` | 1 | `<=1.13.7` | `1.13.8` | 44 |
| Moderate | `ajv` | 2 | `<6.14.0`; `7.x-8.17.x` | `6.14.0`, `8.18.0` | 34, 35 |
| Moderate | `http-proxy-middleware` | 1 | `0.16.0-2.0.9` | `2.0.10` | 85 |
| Moderate | `qs` | 1 | `6.14.2-6.15.3` | `6.16.0` | 132 |
| Moderate | `uuid` | 1 | `<11.1.1` | `11.1.1` | 72 |
| Moderate | `webpack-dev-server` | 4 | `<=5.2.5` | `5.2.6` | 69, 79, 90, 91 |
| Moderate | `yaml` | 2 | `1.x <1.10.3`; `2.x <2.8.3` | `1.10.3`, `2.8.3` | 51, 52 |
| Low | `@babel/core` | 1 | `<=7.29.0` | `7.29.6` | 84 |
| Low | `@tootallnate/once` | 1 | `<2.0.1` | `2.0.1` | 70 |
| Low | `postcss-selector-parser` | 2 | `6.1.0-6.1.2`; `7.1.0-7.1.2` | `6.1.3`, `7.1.3` | 128, 129 |

Totals: 0 critical, 30 high, 23 moderate, 4 low, 57 overall.

## Remediation

1. Updated React Router to a patched 7.18.x release.
2. Removed unsupported `react-scripts@5` and its vulnerable Webpack/Babel tree.
3. Migrated build and test tooling to Vite 8 and Vitest 5.
4. Regenerated `package-lock.json` from the new manifest using Node 22.
5. Verified live npm audit: zero vulnerabilities.
6. Verified one test passes and production build succeeds.

## Deployment note

Vite writes production output to `dist`. Set Cloudflare Pages build output
directory to `dist` before merging this branch into `main`.
