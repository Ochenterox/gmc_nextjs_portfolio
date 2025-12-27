# Abdenasser Mohammedi — Portfolio

Next.js (App Router) portfolio showcasing senior frontend/full-stack work, AI systems, and project highlights. Built with TypeScript, Tailwind v4 (PostCSS plugin), and the Next.js image/font pipeline.

## Structure
- `app/` — App Router routes for home, about, projects, contact.
- `app/components/` — Navigation, footer, project cards.
- `app/lib/projects.ts` — Project data feeding home and projects pages.
- `public/images/` — Hero and project assets (from mohammediabdenasser.com).
- `app/globals.css` — Tailwind v4 setup + custom theme styling.

## Local development
```bash
pnpm install
pnpm dev
```
Visit http://localhost:3000.

## Testing
```bash
pnpm lint
```

## Deployment
Standard Next.js deploy flow; works on Vercel or any Node host that supports Next.js 16 app router.
