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

```bash
git clone https://github.com/meluiz/uidg.git
cd uidg
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

Set `APP_URL` to your deployed domain (e.g. `https://uidg.meluiz.com`) in the Workers/Pages dashboard.

## Tech Stack

React 19 · TypeScript · Vite (+ Vite Plus) · Void framework · Hono · Tailwind CSS 4 · Ark UI · Biome · Bun

ID generation powered by [`uuid`](https://www.npmjs.com/package/uuid), [`@paralleldrive/cuid2`](https://www.npmjs.com/package/@paralleldrive/cuid2), [`nanoid`](https://www.npmjs.com/package/nanoid), and [`ulid`](https://www.npmjs.com/package/ulid).

## Contributing

1. Fork the repository and create a feature branch
2. Make your changes and run `bun run lint && bun run format`
3. Open a Pull Request with a clear description

Follow the existing code style (enforced by Biome) and update documentation when adding or changing features.

## License

MIT — see [LICENSE](./LICENSE) for details.
