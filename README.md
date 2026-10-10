# NSoC Winter Edition 2026 - Homepage Redesign

![NSoC Winter Edition Preview](public/preview.png) *(Note: Replace with actual screenshot)*

A highly optimized, modern, and interactive homepage redesign for the **Nexus Spring of Code (NSoC) Winter Edition 2026**. 

This project aims to deliver a premium "Glacial Tech" aesthetic tailored for developers. It features deep midnight blues, frosted glassmorphism, performant CSS snowfall patterns, and restrained, accessible animations without compromising on static performance.

## 🚀 Features

- **Premium Glacial Tech UI**: A cohesive design system utilizing Tailwind v4 CSS variables for rapid, reliable theming.
- **Strictly Typed Static Content**: All factual content (timelines, social links, program features) is decoupled from the UI and strictly typed in `src/config/site.ts`.
- **Accessible & Performant Animations**: Built with Framer Motion (React transitions) and GSAP (complex stagger effects). Fully respects `prefers-reduced-motion` to disable animations for sensitive users, and dynamically pauses `canvas-confetti` when the browser tab is hidden to save memory.
- **Server Component Architecture**: Leverages Next.js 16 App Router. The root page is a pure Server Component (`○ (Static)`) meaning zero client-side hydration delay for the main layout.
- **Fully Responsive**: Verified layout across 320px, 375px, 768px, 1024px, 1280px, and 1440px viewports. Features a smooth mobile off-canvas menu and fluid grid cards.

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router, React 19)
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4, `shadcn/ui` components, `next-themes`
- **Animations**: `motion/react`, `gsap`, `canvas-confetti`
- **Package Manager**: Bun 

## 📦 Local Setup & Development

Make sure you have [Bun](https://bun.sh/) installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ankitkr104/nsoc-winter-edition.git
   cd nsoc-winter-edition
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Run the development server:**
   ```bash
   bun run dev
   ```
   *Open [http://localhost:3000](http://localhost:3000) to view the application.*

## 🏗 Build & Deployment

To verify the production build locally:

```bash
bun run build
bun run start
```

This project is optimized for deployment on Vercel. 
Simply push to your main branch or import the repository via the Vercel Dashboard. The build command (`next build`) is automatically detected.

## 🤝 Conventional Commits

This repository enforces Conventional Commits. If contributing, please use:
```bash
bun run commit
```

---
*Built for the NSoC 2026 Developer Task submission.*
