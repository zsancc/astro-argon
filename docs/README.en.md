# Niyu Blog Documentation (English)

This project is a heavily customized Fuwari-based blog, upgraded to Astro 6 beta, Tailwind CSS 4, and daisyUI 5, with an Argon-style theme system.

## Requirements

- Node.js `>= 24`
- pnpm `>= 10` (recommended `10.30.1`)

## Quick Start

```bash
corepack enable
corepack use pnpm@10.30.1
pnpm install
pnpm dev
```

Default URL: `http://localhost:4321`

## Common Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start local development server |
| `pnpm build` | Build production output and generate Pagefind index |
| `pnpm preview` | Preview production output locally |
| `pnpm check` | Run Astro checks |
| `pnpm type-check` | Run TypeScript checks |
| `pnpm format` | Format source files with Biome |
| `pnpm lint` | Lint/fix source files with Biome |
| `pnpm new-post <slug>` | Create a new post scaffold |

## Key Config Files

- Site and theme config: `src/config.ts`
- Astro config: `astro.config.mjs`
- Main style entry: `src/styles/main.css`
- Theme variables: `src/styles/variables.styl`

## Post Frontmatter Example

```yaml
---
title: My First Post
published: 2026-02-26
description: Post summary
image: ./cover.png
tags: [Astro, Blog]
category: Tech
draft: false
---
```

## Search Behavior

- In development, local `search-index.json` is used first.
- In production, Pagefind index is used after `pnpm build`.

## Deployment

Cache templates are provided in `deploy/`:

- `deploy/vercel/vercel.json`
- `deploy/cloudflare-pages/_headers`
- `deploy/nginx/astro-static-cache.conf`

## Theme Token Guide

- Chinese: `docs/THEME_TOKENS.zh-CN.md`
- English: `docs/THEME_TOKENS.en.md`
