# ✅ PRE-DELIVERY QUALITY CHECKLIST — Frontend UI/UX Engineering

## Before marking ANY task as complete, verify:

- [ ] **Design tokens enforced** — grep for hardcoded hex/rgb/hsl/pixel values in component files → 0 matches (exclude design-token definition files)
- [ ] **Accessibility score 100 (or documented exceptions)** — `npx axe --stdout <url>` or `expect(await axe(container)).toHaveNoViolations()` → 0 violations at critical/serious level
- [ ] **Keyboard navigation complete** — Tab through entire page, verify all interactive elements reachable, focus visible, logical order
- [ ] **Screen reader test passed** — VoiceOver (macOS) or NVDA (Windows) reads content meaningfully, announces dynamic updates, form errors linked
- [ ] **Color contrast ≥4.5:1 (normal) and ≥3:1 (large) for all text** — axe DevTools or contrast checker shows 0 violations
- [ ] **Images have explicit width/height** — CLS audit in Lighthouse/Web Vitals extension shows CLS < 0.1
- [ ] **`prefers-reduced-motion` respected** — enable in OS settings → animations stop, auto-play stops, transitions instant
- [ ] **200% zoom works** — browser zoom to 200% → no horizontal scroll, no clipped text, all content readable
- [ ] **Touch targets ≥44×44px** — mobile viewport → every interactive element has sufficient tap area, no overlapping targets
- [ ] **Lighthouse scores ≥90** — Performance ≥90, Accessibility ≥95, Best Practices ≥90, SEO ≥90
- [ ] **Bundle analysis clean** — no initial route chunk >100KB gzipped JS; no individual dependency >25KB gzipped without justification
- [ ] **All states handled in every component** — loading (skeleton), empty, error (with retry), success; error boundary present per route
- [ ] **TypeScript strict mode, no `as any`** — `tsc --noEmit` passes; `grep -r 'as any' src/` → 0 matches (or each match has justified comment)
- [ ] **No inline styles** — `grep -r 'style={{' src/components/` → 0 matches (exclude animation libraries with justified dynamic inline styles)
- [ ] **Forms accessible** — every input has associated `<label>`, errors use `aria-describedby`, `aria-invalid` on error fields, `aria-required` on required fields
- [ ] **HTML semantic** — `<main>`, `<nav>`, heading hierarchy (no skipped levels), landmarks used correctly
- [ ] **Focus visible** — no `outline: none` without `:focus-visible` replacement; focus ring contrast ≥3:1
- [ ] **Skip-to-content link** — first focusable element, visible on focus, navigates to `<main>`
- [ ] **URL reflects state** — filters, pagination, sort, open modals reflected in URL params or path
- [ ] **Third-party scripts audited** — `lazyOnload` strategy, no render-blocking scripts, only essential third-parties
- [ ] **Storybook deployed** — all new/modified components have stories with interaction tests and autodocs
- [ ] **Cross-browser verified** — latest Chrome, Firefox, Safari all render consistently; no Safari-specific layout bugs
- [ ] **Standardized error messages** — all error messages are human-readable, actionable, and consistent in tone/language