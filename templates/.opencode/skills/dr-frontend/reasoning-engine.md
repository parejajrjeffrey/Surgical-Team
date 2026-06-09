# 🧠 THE REASONING ENGINE — Frontend UI/UX Engineering

## Mental Execution Flow

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                          FRONTEND SKILL REASONING PIPELINE                               │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│  STEP 0: UI LANDSCAPE DISCOVERY                                                         │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  read_file() all: package.json, tsconfig.json, tailwind.config.*,             │      │
│  │    next.config.*, vite.config.*, .eslintrc.*, storybook/main.*                 │      │
│  │  list_code_definition_names() on: components/, pages/, app/, hooks/,           │      │
│  │    stores/, styles/, utils/, lib/                                              │      │
│  │  search_files() for: "TODO|FIXME|HACK|XXX|@deprecated|                              │
│  │    dangerouslySetInnerHTML|style=\\{\\{|!important|z-index:\s*\d{3,}"         │      │
│  │  execute_command(): "npx eslint . --ext .tsx,.ts --format json",              │      │
│  │    "npx tsc --noEmit"                                                           │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 1: COMPONENT AUDIT & DESIGN TOKEN ENFORCEMENT                                     │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  For every component file:                                                      │      │
│  │    ▸ Replace hardcoded hex/rgb/hsl values → design tokens                       │      │
│  │    ▸ Replace hardcoded px/rem font sizes → typography tokens                    │      │
│  │    ▸ Replace magic number spacing → spacing scale (4px grid)                    │      │
│  │    ▸ Extract inline styles (style={{…}}) → CSS Module, Tailwind, or styled     │      │
│  │    ▸ Verify: TypeScript prop types exported                                    │      │
│  │    ▸ Verify: No component exceeds 300 lines → split into sub-components        │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 2: ACCESSIBILITY HARDENING (ZERO-TOLERANCE)                                       │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ eslint-plugin-jsx-a11y → 0 errors                                           │      │
│  │  ▸ Every <img> has meaningful alt text                                         │      │
│  │  ▸ Every form input has <label> + error linking via aria-describedby           │      │
│  │  ▸ Color contrast ≥4.5:1 normal, ≥3:1 large                                    │      │
│  │  ▸ All interactive elements keyboard accessible                                 │      │
│  │  ▸ Focus indicator visible (never outline:none without replacement)            │      │
│  │  ▸ Skip-to-content link on every page                                           │      │
│  │  ▸ Modals trap focus, close on Escape, restore focus on close                  │      │
│  │  ▸ prefers-reduced-motion respected — disable non-essential animations         │      │
│  │  ▸ Touch targets ≥44×44px on mobile                                            │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 3: STATE MANAGEMENT ARCHITECTURE AUDIT                                            │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Server state → TanStack Query / Apollo / SWR                                │      │
│  │  ▸ URL state → useSearchParams (pagination, filters, sort)                     │      │
│  │  ▸ Form state → React Hook Form / Formik                                       │      │
│  │  ▸ UI state → useState (modal, sidebar, tooltip)                               │      │
│  │  ▸ Global client state → Zustand / Jotai / Pinia (auth user, theme, locale)   │      │
│  │  ▸ Optimistic updates have rollback (onMutate→onError→onSettled)              │      │
│  │  ▸ No prop-drilling beyond 2 levels                                            │      │
│  │  ▸ useMemo/useCallback only when profiler-proven                               │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 4: PERFORMANCE OPTIMIZATION                                                       │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  Core Web Vitals: LCP<2.5s, INP<200ms, CLS<0.1, TTFB<800ms                    │      │
│  │  Route-based code splitting: React.lazy + Suspense or Next.js dynamic()        │      │
│  │  Tree-shaking: no barrel-file imports (import { debounce } from 'lodash')      │      │
│  │  Bundle analyzer: flag chunks >50KB gzipped                                     │      │
│  │  Image optimization: WebP/AVIF, srcset, lazy loading (below-fold only)         │      │
│  │  Font optimization: subset woff2, font-display: swap, max 2 families           │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 5: RESPONSIVE & CROSS-BROWSER VERIFICATION                                        │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Test: 320px, 375px, 768px, 1024px, 1280px, 1440px, 1920px+                 │      │
│  │  ▸ No horizontal scroll at any breakpoint                                       │      │
│  │  ▸ Container queries for reusable components                                    │      │
│  │  ▸ Cross-browser: Chrome, Firefox, Safari, Edge                                │      │
│  │  ▸ Print styles: @media print                                                  │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 6: ANIMATION & INTERACTION POLISH                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ 60fps: transform + opacity only (never width/height/top/left!)              │      │
│  │  ▸ FLIP technique for list reordering                                          │      │
│  │  ▸ @media (prefers-reduced-motion: reduce) wraps ALL non-essential animation   │      │
│  │  ▸ Loading: skeleton screens > spinners                                        │      │
│  │  ▸ Error states: descriptive message + recovery action                         │      │
│  │  ▸ Empty states: illustration + helpful message + CTA                          │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 7: CROSS-TEAM HANDOFF                                                               │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Storybook stories for all new/modified components                           │      │
│  │  ▸ design-tokens.json from Style Dictionary build                              │      │
│  │  ▸ Component API (props table) in Storybook autodocs                           │      │
│  │  ▸ Flag: OpenAPI spec gaps → Backend team                                      │      │
│  │  ▸ Flag: Accessibility issues → QA team                                        │      │
│  │  ▸ Visual baseline in Chromatic/Percy for PR comparison                        │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘