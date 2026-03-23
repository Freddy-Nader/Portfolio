# Portfolio

This project is Alfredo Nader's personal portfolio website. It is a small Next.js application that presents core profile information, experiments, writing, and a downloadable CV.

## Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Font Awesome and Lucide icons
- Vercel Analytics and Speed Insights

## Requirements

- Node.js 20+ recommended
- `pnpm`
- A LaTeX distribution with `latexmk` if you want to rebuild the CV PDF

## Install

```bash
pnpm install
```

## Development

Run the local dev server:

```bash
pnpm dev
```

Then open `http://localhost:3000`.

## Available Commands

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm tex -- app/cv/cv.tex
npm run tex -- app/cv/cv.tex
pnpm tex -- --once app/cv/cv.tex
npm run tex -- --watch app/cv/cv.tex
pnpm cv:build
```

`pnpm tex -- path/to/file.tex` watches the file and recompiles it automatically when it changes.

`npm run tex -- path/to/file.tex` runs the same executable through npm.

`--watch` is explicit watch mode. It is also the default.

`--once` disables watching and performs a single compile.

If you run `pnpm tex` with no file argument, the script scans the repository for `.tex` files, writes the index to `/tmp/tex_files.json`, and opens an `fzf` picker so you can choose one interactively.

`pnpm cv:build` compiles `app/cv/cv.tex` and copies the generated PDF to `public/f/cv.pdf`.

Direct executable usage:

```bash
./scripts/tex app/cv/cv.tex
./scripts/tex --watch app/cv/cv.tex
./scripts/tex --once app/cv/cv.tex
./scripts/tex
```

Dependency installs on macOS:

```bash
brew install --cask mactex-no-gui
brew install fzf
brew install ripgrep
brew install node
```

## Project Structure

```text
app/          Next.js routes, UI, CV source, and supporting components
public/       Static assets such as images and downloadable files
scripts/      Small project scripts, including TeX helpers
```

Notable paths:

- `app/page.tsx`: homepage content
- `app/cv/cv.tex`: LaTeX source for the CV
- `app/cv/resume.cls`: custom LaTeX class used by the CV
- `public/f/cv.pdf`: built CV PDF served by the site

## Dependencies

Main runtime dependencies:

- `next`, `react`, `react-dom`
- `tailwind-merge`, `class-variance-authority`, `clsx`
- `@fortawesome/*`, `lucide-react`
- `@vercel/analytics`, `@vercel/speed-insights`
- `sharp`, `next-themes`, `react-wrap-balancer`

Main development dependencies:

- `typescript`
- `eslint`, `eslint-config-next`
- `tailwindcss`, `@tailwindcss/postcss`
- `@types/node`, `@types/react`, `@types/react-dom`
