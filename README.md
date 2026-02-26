# Niyu Blog (Astro + Fuwari Refactor)

`Niyu` is a deeply customized personal blog project based on Fuwari, upgraded to Astro 6 beta, Tailwind CSS 4, and daisyUI 5.

## Languages

- 中文: `docs/README.zh-CN.md`
- English: `docs/README.en.md`

## Tech Stack

- Astro `6.0.0-beta.14`
- Tailwind CSS `4.2.1`
- daisyUI `5.5.19`
- Svelte `5.x` (for interactive widgets)
- Pagefind (production search index)

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

Open `http://localhost:4321`.

## Common Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start local dev server |
| `pnpm build` | Build to `dist/` and generate Pagefind index |
| `pnpm preview` | Preview production build |
| `pnpm check` | Run Astro type/content checks |
| `pnpm type-check` | Run TypeScript check (`tsc`) |
| `pnpm format` | Format source files with Biome |
| `pnpm lint` | Lint/fix source files with Biome |
| `pnpm new-post <slug>` | Create a new post scaffold |

## Key Files

- Site and theme config: `src/config.ts`
- Astro config: `astro.config.mjs`
- Main style layer: `src/styles/main.css`
- Theme tokens: `src/styles/variables.styl`
- Theme token guide (CN): `docs/THEME_TOKENS.zh-CN.md`
- Theme token guide (EN): `docs/THEME_TOKENS.en.md`

## Deployment Notes

Cache header templates are provided in `deploy/`:

- `deploy/vercel/vercel.json`
- `deploy/cloudflare-pages/_headers`
- `deploy/nginx/astro-static-cache.conf`

## License

MIT
