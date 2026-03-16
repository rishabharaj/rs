# 🚀 Rishabharaj Sharma Portfolio

[![React](https://img.shields.io/badge/React-18-1f6feb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-2f74c0?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-ff8c42?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-0f766e?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-f2c94c?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Rishabharaj Portfolio** is a modern developer portfolio focused on performance, clean UI, and polished interactions. It highlights projects, experience, certifications, skills, and gallery content in a responsive single-page experience.

---

## 📸 Preview

![Portfolio Preview](./src/assets/websitepreview.png)

> **Live Demo:** Add your deployed link here (for example: Vercel, Netlify, or GitHub Pages)

## Overview

The portfolio is designed to be:

- Fast and lightweight in development and production
- Responsive across desktop, tablet, and mobile
- Accessible and keyboard-friendly
- Easy to customize and extend

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI primitives
- Lucide React icons

## Key Features

- Section-based single-page portfolio layout
- Reusable reveal animation component (`src/components/ui/Reveal.tsx`)
- Animated top scroll progress indicator (`src/components/ScrollProgress.tsx`)
- Dedicated pages/sections for:
	- About
	- Experience timeline
	- Projects showcase
	- Certifications
	- Skills
	- Gallery
	- Contact

## Getting Started

### Prerequisites

- Node.js 18+ (Node.js 20+ recommended)
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## Available Scripts

- `npm run dev`: Start Vite development server
- `npm run build`: Create production build
- `npm run build:dev`: Create development-mode build
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint checks

## Project Structure

```text
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
		ui/
			Reveal.tsx
	pages/
		Index.tsx
	assets/
	hooks/
	lib/
public/
```

## Styling and UI

Tailwind configuration is managed in `tailwind.config.ts` and global styles are defined in `src/index.css`.

The UI uses utility-first styling with reusable component patterns for consistent spacing, typography, and section visuals.

## Deployment

The production output is generated in `dist/` and can be deployed to any static hosting provider (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

Example:

```bash
npm run build
```

## License

Source code is licensed under the MIT License. See `LICENSE` for details.

Personal media assets (under `images/` and `src/assets/`, including photos, certificates, and screenshots) are not covered by the MIT License. Replace these assets with your own when forking or publishing.

---

Made with ❤️ by [Rishabharaj Sharma](https://github.com/rishabharaj)

