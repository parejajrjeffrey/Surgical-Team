# 🔗 INTEGRATED CROSS-TEAM WORKFLOWS — QA & Testing Engineering

## Workflow 1: Test Failure → Backend/Frontend Team

```
QA (this skill)                              BACKEND or FRONTEND SKILL
┌──────────────────────────────────┐        ┌──────────────────────────────────┐
│ 1. Test suite runs in CI         │        │                                  │
│    (triggered by PR, schedule,   │        │                                  │
│    or manual @qa-bot trigger)    │        │                                  │
│                                  │        │                                  │
│ 2. Test failure detected:        │───────▶│ 3. Receive failure report with:  │
│    - Test name + file:line       │  PR    │    - Stack trace + screenshot    │
│    - Actual vs expected          │ comment│    - Video recording (E2E)       │
│    - Screenshot (E2E failure)    │        │    - API request/response pair    │
│    - Trace file (.zip for        │        │    - Test isolation verified      │
│      Playwright trace viewer)    │        │      (passes when run alone?)     │
│    - Logs from failure window    │        │                                  │
│                                  │        │ 4. Triage:                       │
│    - Flakiness check: same test  │        │    - Bug → fix + regression test │
│      passes when run alone?      │        │    - Flaky test → stabilize      │
│                                  │        │    - Test bug → fix test         │
│                                  │        │    - Outdated spec → update test │
└──────────────────────────────────┘        └──────────────────────────────────┘
```

## Workflow 2: New Feature → QA Test Planning

```
BACKEND / FRONTEND SKILL                   QA (this skill)
┌─────────────────────────────┐           ┌──────────────────────────────────┐
│ 1. Feature branch opened    │           │                                  │
│    with spec (OpenAPI,      │──────────▶│ 2. Extract test vectors:         │
│    Figma, PRD, or issue)    │  PR tag   │    - New/modified endpoints      │
│                             │ [needs-qa]│    - UI components changed       │
│ 3. Code implemented +       │           │    - User flows impacted         │
│    self-tested with unit    │           │                                  │
│    tests                    │           │ 4. Generate test cases:          │
│                             │           │    - Positive scenarios          │
│                             │           │    - Negative/error scenarios    │
│                             │           │    - Boundary/edge cases         │
│                             │           │    - Accessibility checks        │
│                             │           │    - Performance baseline check  │
│                             │           │                                  │
│                             │           │ 5. Write automated tests;        │
│                             │           │    run against PR preview env    │
│                             │           │                                  │
│                             │◀──────────│ 6. Report results → PR           │
│                             │           │    - ✅ All pass → approve       │
│                             │           │    - ❌ Failures → block merge    │
│                             │           │    - ⚠️ Observations → non-      │
│                             │           │      blocking, note for backlog  │
└─────────────────────────────┘           └──────────────────────────────────┘
```

## Workflow 3: Performance Regression → DevOps & Backend

```
QA (this skill)                    DEVOPS SKILL                   BACKEND SKILL
┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
│ 1. Nightly performance│     │                      │      │                      │
│    test suite runs    │────▶│ 2. Compare: p95/p99   │      │                      │
│    (k6 against staging)│    │    latency, error     │─────▶│ 3. Profile: flame    │
│                       │     │    rate, throughput   │      │    graph, query plan │
│  "p99 latency         │     │    vs baseline        │      │                      │
│   regressed 45%"      │     │                      │      │ 4. Fix: query opt,    │
│                       │     │ If regression >20%:  │      │    connection pool,   │
│                       │     │   page on-call,      │      │    cache config, N+1  │
│                       │     │   halt deployments   │      │    elimination         │
└──────────────────────┘      └──────────────────────┘      └──────────────────────┘
```

## Handoff Artifact Table

| To Team | Artifact | Location | Format |
|---|---|---|---|
| **Backend** | API test results (per endpoint) | CI artifact: `reports/api-tests.xml` | JUnit XML |
| **Backend** | Contract violation report | PR comment: `@qa-bot contract-check` | Markdown table with endpoint→violation |
| **Backend** | Idempotency test results | `test-results/idempotency/<service>.json` | JSON: `{endpoint, passes, failures, flaky}` |
| **Frontend** | E2E test results | CI artifact: `reports/e2e-report/` | Playwright HTML report |
| **Frontend** | Accessibility violations | `reports/a11y/<page>.csv` | CSV with WCAG criterion, element, fix suggestion |
| **Frontend** | Visual regression diffs | `reports/visual-diffs/<test>/` | PNG screenshots with diff overlay |
| **DevOps** | Performance test results | Grafana dashboard or `reports/k6-summary.json` | JSON with thresholds, p50/p90/p99, RPS |
| **DevOps** | Load test metric correlation | PR comment: performance delta table | Markdown: `{metric, baseline, current, delta%}` |
| **Security** | Security test results | `reports/security/zap-report.html` | OWASP ZAP HTML or SARIF |
| **Security** | Auth bypass test vectors | `test-vectors/auth-bypass/<endpoint>.json` | JSON array of JWT/payload manipulations |