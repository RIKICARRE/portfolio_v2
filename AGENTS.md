# AGENTS.md

## Context
This repository is a personal web portfolio built with React + TypeScript + Vite.
Styling uses Tailwind CSS, animations may use Framer Motion, and icons use Lucide.
Routing is handled with React Router (see existing patterns in `src/`).
UI components may follow a shadcn-style setup (see `components.json`).

## Primary goals (in order)
1) Keep the site production-ready: build must pass.
2) Preserve the existing visual style and interaction patterns.
3) Make changes small, focused, and easy to review.

## Setup & run
- Package manager: npm (this repo includes `package-lock.json`)
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview (if available): `npm run preview`

## Quality checks (run before finishing)
- Prefer running the repo scripts if they exist:
  - `npm run lint`
  - `npm run format`
  - `npm run typecheck`
  - `npm run test`
If a script does not exist, do not invent a new one unless explicitly requested.

## Conventions
- TypeScript: prefer strict, avoid `any` unless unavoidable (then justify).
- Components: PascalCase; hooks start with `use`.
- Keep file structure consistent with `src/` patterns (pages/components separation).
- Tailwind: reuse existing utility patterns; avoid large custom CSS unless needed.
- Accessibility: keep semantic HTML, labels for interactive elements, and ARIA where appropriate.

## Guardrails
- Do not change global design/theme/branding (colors, typography, layout) unless asked.
- Do not remove sections/content without explicit instruction.
- Do not add new dependencies unless explicitly requested or strongly justified.
- If you change routing/navigation, ensure all routes still work and no broken links.

## When making changes
- Prefer minimal diffs: edit the smallest number of files possible.
- If there are multiple possible approaches, choose the simplest and explain tradeoffs briefly.
- If you touch config/build tooling, ensure `npm run build` still succeeds.

## Communication
- If a requirement is unclear, make a reasonable assumption and state it.
- Always summarize what changed and how to verify it (commands + what to look for).
