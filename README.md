## Rishabharaj Sharma — Developer Portfolio

A fast, modern portfolio built with Vite + React + TypeScript + Tailwind CSS. It showcases projects, experience, certifications, a photo gallery, and smooth in‑view animations with a neon scroll progress bar.

## Features

- Vite + React + TypeScript
- Tailwind CSS with custom tokens and utilities
- Smooth in‑view Reveal animations (IntersectionObserver)
- Neon gradient top scroll progress bar
- Hero with glowing concentric rings behind the profile image
- Projects, Experience (timeline), Certifications, Skills, Gallery, Contact
- Accessible, responsive, and keyboard friendly

## Getting started

Prerequisites: Node.js 18+ (or 20+ recommended).

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run build:dev` — development-mode build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Project structure

```
src/
	components/
		About.tsx
		Certifications.tsx
		Contact.tsx
		Experience.tsx
		Footer.tsx
		Gallery.tsx
		Header.tsx
		Hero.tsx
		Projects.tsx
		ScrollProgress.tsx
		Skills.tsx
		ui/Reveal.tsx
	pages/
		Index.tsx
	assets/
	hooks/
	lib/
public/
```

## Styling

Tailwind is configured in `tailwind.config.ts`, with supporting styles in `src/index.css`. A reusable `.section-headline` utility adds a coral heading color and a subtle dark text shadow.

## Custom components

- `ui/Reveal.tsx` — intersection‑observer based reveal with direction (up/down/left/right), delay, and reduced‑motion support.
- `ScrollProgress.tsx` — animated neon scroll progress bar fixed at the top.

## Deploy

You can deploy the `dist/` folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

For GitHub Pages (classic flow):

```bash
npm run build
# push the dist folder to the gh-pages branch using your preferred tool
```

## Credits

- Icons: lucide‑react
- UI primitives: Radix UI
- Animations/utilities: Tailwind CSS

## License

Code is released under the MIT License – see the `LICENSE` file.

Personal media assets (all files under `images/` and `src/assets/` such as photos, certificates, and project screenshots) are NOT covered by the MIT license. Please replace them with your own when forking or deploying publicly. Keep attribution (link back or name credit) somewhere in the project if you reuse the code structure/design.

---

Made with ❤️ by [Rishabharaj Sharma](https://github.com/rishabharaj)

