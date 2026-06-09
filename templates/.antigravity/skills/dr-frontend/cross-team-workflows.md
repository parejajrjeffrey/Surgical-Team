# 🔗 INTEGRATED CROSS-TEAM WORKFLOWS — Frontend UI/UX Engineering

## Workflow 1: API Integration → Backend Team

```
FRONTEND (this skill)                         BACKEND SKILL
┌─────────────────────────────────┐          ┌───────────────────────────────┐
│ 1. Generate typed API client    │          │                               │
│    from OpenAPI spec using      │          │                               │
│    @hey-api/openapi-ts or       │          │                               │
│    openapi-generator            │          │                               │
│                                 │          │                               │
│ 2. Integrate with TanStack      │          │                               │
│    Query / Apollo Client        │          │                               │
│                                 │          │                               │
│ 3. Discover spec gaps:          │─────────▶│ 4. Fix spec gaps:             │
│    - Missing response types     │  Issue   │    - Add JSON Schema for all  │
│    - Undocumented error codes   │  or PR   │      responses                │
│    - Ambiguous nullable fields  │  comment │    - Document all error codes │
│    - Missing pagination schema  │          │    - Add nullable: true       │
│    - WebSocket event format     │          │      annotations              │
│      not in AsyncAPI spec       │          │    - Standardize pagination   │
│                                 │          │      envelope                 │
│ 5. Implement optimistic updates │          │                               │
│    with rollback; test with     │─────────▶│ 6. Verify idempotency on     │
│    backend-provided test        │          │    mutating endpoints         │
│    vectors for idempotency      │          │                               │
└─────────────────────────────────┘          └───────────────────────────────┘
```

## Workflow 2: UI Component → QA Team

```
FRONTEND (this skill)                         QA SKILL
┌─────────────────────────────────┐          ┌───────────────────────────────┐
│ 1. Build component with:        │          │                               │
│    - Storybook story            │─────────▶│ 2. Run component tests:       │
│    - Interaction tests          │  PR tag  │    - Visual regression (Chro-  │
│    - Unit tests (RTL)           │[needs-qa]│      matic/Percy)             │
│    - TypeScript types           │          │    - Interaction tests        │
│                                 │          │    - Accessibility scan       │
│                                 │          │    - Cross-browser verification│
│                                 │          │                               │
│                                 │          │ 3. Manual QA:                 │
│                                 │          │    - Screen reader pass       │
│                                 │          │    - Keyboard-only navigation │
│                                 │          │    - Touch/gesture testing    │
│                                 │          │    - 200% zoom text remains   │
│                                 │          │      readable                 │
│                                 │          │                               │
│                                 │◀─────────│ 4. Report: pass, issues, a11y │
│                                 │          │    violations                 │
└─────────────────────────────────┘          └───────────────────────────────┘
```

## Workflow 3: Design Handoff → DevOps

```
FRONTEND (this skill)                         DEVOPS SKILL
┌─────────────────────────────────┐          ┌───────────────────────────────┐
│ 1. Implement design system      │          │                               │
│    tokens pipeline:             │─────────▶│ 2. Deploy Storybook to        │
│    Figma → Style Dictionary     │          │    static hosting (S3 + CDN,  │
│    → CSS custom properties      │          │    Vercel, Netlify)           │
│    → Tailwind theme config      │          │                               │
│                                 │          │ 3. Configure:                 │
│ 4. Build artifacts:             │          │    - Preview envs per PR      │
│    - Storybook static export    │          │    - Chromatic integration    │
│    - Bundle analysis report     │          │    - Lighthouse CI integration│
│    - Performance budget file    │          │    - Cache headers for static │
│      (bundlesize, lighthouserc) │          │      assets (immutable with   │
│                                 │          │      content-hash filenames)  │
│                                 │          │                               │
│                                 │◀─────────│ 5. Verify:                    │
│                                 │          │    - Lighthouse score ≥90     │
│                                 │          │    - Bundle size within budget│
│                                 │          │    - No 404s on critical      │
│                                 │          │      assets                   │
└─────────────────────────────────┘          └───────────────────────────────┘
```

## Handoff Artifact Table

| To Team | Artifact | Location | Format |
|---|---|---|---|
| **Backend** | API spec gap report | Issue/PR comment | Markdown list: `{endpoint, missing_field, suggestion}` |
| **Backend** | TypeScript type definitions | `src/api/generated/` | Generated .ts from OpenAPI |
| **Backend** | WebSocket event type expectations | `src/api/events.ts` | TypeScript discriminated union of event types |
| **QA** | Storybook URL (per PR) | PR comment: `@qa-bot storybook` | URL to deployed Storybook |
| **QA** | Component interaction test spec | `src/components/**/*.stories.tsx` | Storybook interaction tests |
| **QA** | Known accessibility exceptions | `a11y-exceptions.md` | Markdown table: `{component, violation, reason, fix_ticket}` |
| **DevOps** | Lighthouse CI config | `.lighthouserc.json` | JSON with budget assertions |
| **DevOps** | Bundle analysis baseline | CI artifact: `bundle-stats.html` | Bundle size HTML report |
| **Security** | CSP (Content Security Policy) requirements | `csp-requirements.json` | JSON: `{script-src, style-src, img-src, etc.}` |
| **Design** | Design token diff | PR comment from Style-Dictionary diff | Markdown: `{token, old_value, new_value, breaking?}` |