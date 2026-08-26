# FrancescFe Portfolio

This repository contains the source code and design documentation for my technical portfolio, including its homepage, projects, and resume.

## Project references

- [Milestone 1: Portfolio MVP](https://github.com/FrancescFe/FrancescFe.github.io/milestone/1)
- [Design documentation](docs/design/00-design-decisions.md)
- [Approved mockups](docs/mockups/README.md)

## Requirements

- Node.js 22.19.0 or later
- npm 10.9.3 or later

The repository includes an `.nvmrc` file for selecting the reference Node.js version with a compatible version manager.

## Setup

Install the locked dependency graph:

```text
npm ci
```

Start the local development server:

```text
npm run dev
```

## Commands

| Command                | Purpose                                             |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start the Astro development server                  |
| `npm run build`        | Create the static production build in `dist/`       |
| `npm run preview`      | Preview the production build locally                |
| `npm run format`       | Format application and root configuration files     |
| `npm run format:check` | Verify formatting without changing files            |
| `npm run lint`         | Lint JavaScript configuration files                 |
| `npm run check`        | Run Astro and TypeScript diagnostics                |
| `npm run validate`     | Run formatting, linting, diagnostics, and the build |

## Continuous delivery

Pull Requests targeting `main` run the **Validate** check. The workflow installs the exact dependency graph from `package-lock.json` with `npm ci`, then runs `npm run validate`, including the production build. This check must pass before a Pull Request can be merged.

Every push to `main` starts the GitHub Pages deployment workflow. Maintainers can also start it manually from the repository's **Actions** tab. The build job validates the application before it uploads the static `dist/` artifact, and the deployment job publishes that artifact to the `github-pages` environment at [francescfe.github.io](https://francescfe.github.io/). Pull Request events never trigger a deployment.

To diagnose a failed run:

1. Open the failed workflow in the repository's **Actions** tab and inspect the first failing step.
2. Reproduce validation locally from a clean dependency installation with `npm ci` followed by `npm run validate`.
3. Fix the reported problem and push the change so GitHub reruns the workflow. A failed build prevents the deployment job from starting.

## Source structure

```text
public/          Static assets copied without processing
src/
├── assets/     Assets processed by Astro
├── components/ Reusable Astro components
├── layouts/    Shared document and page layouts
├── pages/      File-based routes
└── styles/     Global and component style foundations
```

Astro generates a fully static site. The application uses Astro components, plain CSS, and client-side JavaScript only when an interaction requires it; no client UI framework is configured.

The initial route deliberately contains only semantic foundation content. The approved visual system, shared shell, final page content, and GitHub Pages deployment are delivered by their subsequent milestone issues.
