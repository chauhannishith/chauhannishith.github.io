# Nishith Chauhan - Portfolio site

This repository powers my personal portfolio website (projects, experience, skills, and ways to connect). It is a React + TypeScript app built with Vite and deployed to GitHub Pages.

## Purpose

- Share my work experience, skills, and contact links in a clean, fast, mobile-friendly static site
- Act as an always up-to-date, public version of my resume

## Local development

Install dependencies:

```bash
yarn
```

Run the dev server:

```bash
yarn dev
```

## Build

Create a production build in `dist/`:

```bash
yarn build
```

Preview the production build locally:

```bash
yarn preview
```

## Deploy (GitHub Pages)

Deployment is handled via the `gh-pages` package and publishes the contents of `dist/` to the `gh-pages` branch.

From `main`:

```bash
yarn deploy
```

Notes:

- Do not merge `main` into `gh-pages`. `gh-pages` is meant to contain only the built static output
- If you see merge conflicts like “deleted in HEAD and modified in origin/main”, it usually means a merge into `gh-pages` was attempted

## Updating content

- Experience entries live in `src/data/experience.ts`
- The `Experience` UI renders from that data in `src/components/Experience.tsx`

## Common gotchas

- `node_modules` should never be committed. It is ignored via `.gitignore`
- If your working tree gets large or strange after a bad commit, a clean install usually helps:

```bash
rm -rf node_modules
yarn
```
