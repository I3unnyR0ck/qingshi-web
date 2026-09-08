# 青柿 Qingshi — web storefront

Static Next.js storefront (App Router, `output: "export"`). Source stays editable on GitHub; deploy is free HTTPS via GitHub Pages.

## Why this setup

- **GitHub** — edit source, review PRs, keep history.
- **GitHub Pages** — free HTTPS for the static `out/` export (Project Pages under `/{repo-name}/`).
- **Later** — move to Cloudflare Pages and/or a custom domain without rewriting the app.
- **Cart & payment later** — add cart + 綠界 / 藍新 (or similar) yourself; no Shopify lock-in.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (local / root path)

Leave `PAGES_BASE_PATH` unset so assets and routes use `/`:

```bash
npm run build
```

Static files land in `out/`. Preview with any static server, e.g. `npx serve out`.

## GitHub Pages

Push to `main` runs [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml):

1. `npm ci` + build with `PAGES_BASE_PATH=/{repository-name}`
2. Uploads `out/` and deploys via Actions Pages

In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

`PAGES_BASE_PATH` is set by the workflow; see [`.env.example`](.env.example). Do not commit real `.env` files.

## Stack notes

- Next.js 15, React 19, Tailwind CSS
- `images.unoptimized` + static export (no Image Optimization server)
- Room later for cart / payment APIs without changing the Pages hosting model for the storefront shell
