# 🎨 SKILL: Frontend UI/UX Engineering — Elite Experience Architect

<p align="center">
  <img src="https://img.shields.io/badge/version-2.4.1-f72585?style=for-the-badge&logo=semver" alt="Version 2.4.1" />
  <img src="https://img.shields.io/badge/rules-38_heuristics-4361ee?style=for-the-badge&logo=probot" alt="38 Reasoning Rules" />
  <img src="https://img.shields.io/badge/stack-React_|_Vue_|_Svelte_|_Next.js_|_Tailwind_|_TypeScript_|_Storybook-3a0ca3?style=for-the-badge&logo=react" alt="Stack Compatibility" />
  <img src="https://img.shields.io/badge/license-CC_BY--SA_4.0-7209b7?style=for-the-badge&logo=creativecommons" alt="License: CC BY-SA 4.0" />
  <img src="https://img.shields.io/badge/Cline--native-v3.0%2B_browser_|_file_ops_|_terminal-4cc9f0?style=for-the-badge&logo=cline" alt="Cline Native v3.0+" />
</p>

---

## 📋 CORE RESPONSIBILITY MATRIX

| Focus Area | Primary Tools & Frameworks | Technical Stack Depth | Ownership Level |
|---|---|---|---|
| **Component Architecture** | React 19+, Vue 3.4+, Svelte 5, SolidJS, Astro, Storybook 8+, Ladle | Atomic design methodology, compound components, render props vs HOCs vs hooks, controlled/uncontrolled components, slot-based composition | **Sole Owner** |
| **State Management** | Zustand, Jotai, Pinia, TanStack Query, Apollo Client, Redux Toolkit, XState | Server state vs client state separation, optimistic updates with rollback, cache invalidation strategies, state colocation, URL as state for filters/search/pagination | **Sole Owner** |
| **Design System & Design Tokens** | Figma Dev Mode, Tokens Studio, Style Dictionary, Tailwind CSS 4, Vanilla Extract, Panda CSS | Design token pipeline (Figma→JSON→CSS custom properties→code), color system, typography scale (1.25 ratio), spacing grid (4px base), dark/light/contrast theme, reduced-motion mode | **Sole Owner** |
| **Rendering & Performance** | Next.js 15 App Router, Remix, Nuxt 4, SvelteKit, Astro Islands, Qwik Resumable | SSR, SSG, ISR, streaming SSR, React Server Components, Core Web Vitals (LCP<2.5s, INP<200ms, CLS<0.1), lighthouse performance >90 | **Sole Owner** |
| **Accessibility (A11y)** | axe-core, eslint-plugin-jsx-a11y, @testing-library/jest-dom, VoiceOver/NVDA/JAWS | WCAG 2.2 AA, semantic HTML, ARIA authoring practices, keyboard navigation, focus management, screen reader announcements, form accessibility, touch targets ≥44×44px | **Sole Owner** |
| **Responsive & Adaptive Design** | CSS Container Queries, CSS Grid, Flexbox, Tailwind responsive utilities, View Transitions API | Mobile-first development, container queries for component-level responsiveness, fluid typography (clamp), intrinsic web design | **Sole Owner** |
| **Animation & Micro-interactions** | Framer Motion, GSAP, CSS @starting-style, View Transitions API, Lottie, Rive | 60fps animations (GPU-accelerated: transform + opacity only), FLIP technique, prefers-reduced-motion mandatory, scroll-driven animations, loading skeletons | **Sole Owner** |
| **Testing (Frontend)** | Vitest, React Testing Library, Playwright component testing, Chromatic/Percy, axe-core | Component tests, visual regression tests, interaction tests, snapshot tests for design tokens only, E2E test locator strategy consultation | **Shared with QA** |

---

## 📁 File Structure

| File | Purpose | When to Load |
|---|---|---|
| `README.md` | This file — header, shields, responsibility matrix | Always loaded first |
| `reasoning-engine.md` | 7-stage mental execution pipeline | Loaded when implementing any task |
| `cross-team-workflows.md` | Handoff protocols to Backend, QA, DevOps, Security teams | Loaded when preparing deliverables |
| `rules.md` | 38 frontend-specific decision rules and anti-patterns | Loaded during code review or UI audit |
| `quality-checklist.md` | 23-item pre-delivery verification checklist | Loaded before marking any task complete |