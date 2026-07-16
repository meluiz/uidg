# uidg – Unique ID Generator

A free, open-source, privacy-first web app for generating unique identifiers (UUID, CUID2, Nano ID, and ULID) directly in your browser. No signup, no tracking — everything runs locally.

**Live Demo:** [uidg.meluiz.com](https://uidg.meluiz.com)

## Features

- **Multiple ID types** – UUID (v1, v3, v4, v5, v6, v7 – RFC 9562), CUID2, Nano ID, and ULID, with customizable parameters
- **Keyboard shortcuts** – Quick navigation with hotkeys (U, C, N, L)
- **Dark/light theme** – System-aware detection with manual override
- **Copy to clipboard** – Single-click copying
- **Accessible** – Semantic HTML, ARIA labels, keyboard navigation
- **Instant loading** – Serverless deployment on Cloudflare Workers

## Getting Started

**Prerequisites:** [Bun](https://bun.sh) 1.0+ (npm/yarn also work) and Node.js 18+.

> **Note on icons:** uidg uses [Nucleo](https://nucleoapp.com/?ref=18825) icons via the `nucleo-core-outline-24` package, which is a **paid** package. You need a valid Nucleo license key to install the project's dependencies. See [Icons & Nucleo License](#icons--nucleo-license) for details.

Clone the repository and configure your Nucleo license key before installing:

```bash
git clone https://github.com/meluiz/uidg.git
cd uidg

export NUCLEO_LICENSE_KEY=your-license-key

bun install
```

Create a `.env` file in the project root:

```
APP_URL=http://localhost:5173
```

Start the dev server and open `http://localhost:5173`:

```bash
bun run dev
```

## Scripts

| Script            | Purpose                              |
| ----------------- | ------------------------------------ |
| `bun run dev`     | Development server with hot reload   |
| `bun run build`   | Production build (output in `dist/`) |
| `bun run preview` | Preview the production build locally |
| `bun run lint`    | Lint and auto-fix with Biome         |
| `bun run format`  | Format code with Biome               |

## Project Structure

```
uidg/
├── pages/        # File-based routing (generator pages, layouts)
├── routes/       # Non-page endpoints (sitemap, robots.txt, manifest)
├── src/
│   ├── components/  # Reusable UI and layout components
│   ├── modules/     # Feature-specific modules
│   └── utils/       # Helpers (ID generators), constants, theme
├── middleware/   # Server middleware (theme detection)
├── public/       # Static assets
└── void.json     # Void framework / Cloudflare configuration
```

## Deployment

uidg targets **Cloudflare Workers**, configured via `void.json`:

```json
{
  "target": "cloudflare",
  "worker": { "compatibility_date": "2026-07-13" }
}
```

Build and deploy:

```bash
bun run build
bunx wrangler deploy
```

Set `APP_URL` to your deployed domain (e.g. `https://uidg.meluiz.com`) in the Workers/Pages dashboard. Make sure `NUCLEO_LICENSE_KEY` is also available as an environment variable in your CI/build environment so dependency installation succeeds.

## Tech Stack

React 19 · TypeScript · Vite (+ Vite Plus) · Void framework · Hono · Tailwind CSS 4 · Ark UI · Nucleo Icons · Biome · Bun

ID generation powered by [`uuid`](https://www.npmjs.com/package/uuid), [`@paralleldrive/cuid2`](https://www.npmjs.com/package/@paralleldrive/cuid2), [`nanoid`](https://www.npmjs.com/package/nanoid), and [`ulid`](https://www.npmjs.com/package/ulid). Icons by [Nucleo](https://nucleoapp.com/?ref=18825) (`nucleo-core-outline-24` — requires a license, see [Icons & Nucleo License](#icons--nucleo-license)).

## Contributing

1. Fork the repository and create a feature branch
2. Make your changes and run `bun run lint && bun run format`
3. Open a Pull Request with a clear description

Follow the existing code style (enforced by Biome) and update documentation when adding or changing features.

> Contributing requires a [Nucleo](https://nucleoapp.com/?ref=18825) license to install dependencies, since the icon package is paid and the license key is not distributed with this repository. When adding new icons, keep the project within Nucleo's 100-icon limit for open source projects (see [Icons & Nucleo License](#icons--nucleo-license)).

## License

The uidg source code is licensed under **MIT** — see [LICENSE](./LICENSE) for details.

### Icons & Nucleo License

The icons used in this project come from [Nucleo](https://nucleoapp.com/?ref=18825) (`nucleo-core-outline-24`) and are **not** covered by the MIT license. They are proprietary and governed by the [Nucleo Icons License](https://nucleoapp.com/license), which allows their use in open source projects under these conditions:

- Open source projects may use a **maximum of 100 Nucleo icons** and must include Nucleo's copyright notice (below)
- The icons are licensed for use **only within this product** — you may not extract, redistribute, resell, or sublicense them (or modified versions) for use in other projects
- To use Nucleo icons in your own projects, you need to [purchase your own license](https://nucleoapp.com/?ref=18825)

Copyright notice, as required by the [Nucleo Copyright Notice](https://nucleoapp.com/copyright-notice) (v1.3, January 3, 2024):

> Copyright © Nucleo — Nucleo Icons — <https://nucleoapp.com/>
>
> Redistribution of icons is prohibited. Icons are restricted for use only within the product they are bundled with.
>
> For more details: <https://nucleoapp.com/license>
