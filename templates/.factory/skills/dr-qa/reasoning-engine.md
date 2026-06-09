# 🧠 THE REASONING ENGINE — QA & Testing Engineering

## Mental Execution Flow

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                          QA SKILL REASONING PIPELINE                                     │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│  STEP 0: TEST LANDSCAPE DISCOVERY                                                       │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  read_file() all: playwright.config.ts, cypress.config.ts, jest.config.ts,     │      │
│  │    pyproject.toml, k6-scripts/, test-vectors/, .github/**                      │      │
│  │  list_code_definition_names() on: __tests__/, tests/, specs/, e2e/, fixtures/  │      │
│  │  search_files() for: "describe|it\(|test\(|@Test|def test_|test\.only|\.skip" │      │
│  │  execute_command(): "npx playwright test --list", "npx jest --listTests"       │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 1: TEST COVERAGE GAP ANALYSIS                                                     │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Map source code modules → existing test files → calculate coverage gaps     │      │
│  │  ▸ Run: jest --coverage / pytest --cov / go test -coverprofile               │      │
│  │  ▸ Flag: any file <80% line coverage, any branch <70% coverage                 │      │
│  │  ▸ Generate: prioritized gap report sorted by (criticality × coverage_gap)     │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 2: E2E TEST GENERATION (USER JOURNEY MAPPING)                                     │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Use semantic locators: getByRole() → getByLabelText() → getByTestId()       │      │
│  │  ▸ Include: happy path, empty-state, error-state, edge-case path               │      │
│  │  ▸ Use network interception for API mocking (page.route() in Playwright)       │      │
│  │  ▸ Every test must be independently runnable (no test-order dependency)        │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 3: API CONTRACT VALIDATION                                                        │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Positive test: valid request → 2xx response matches schema                  │      │
│  │  ▸ Negative tests: missing field→400, invalid type→400, missing auth→401,     │      │
│  │    insufficient permission→403, non-existent ID→404, duplicate create→idempotent│      │
│  │  ▸ Validate response body against JSON Schema, not just status code            │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 4: PERFORMANCE TESTING                                                            │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Ramp-up, soak, stress, spike test profiles                                  │      │
│  │  ▸ k6 thresholds: p(95)<500, p(99)<1000, error rate<0.01, checks>0.99         │      │
│  │  ▸ Compare against baseline — flag regression >20%                             │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 5: EDGE CASE & PROPERTY-BASED TESTING                                             │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Boundary values: NULL, 0, -1, MAX_INT, empty string, Unicode, emoji, RTL   │      │
│  │  ▸ Property tests: serialization roundtrip, idempotency, commutativity         │      │
│  │  ▸ Concurrency tests: N parallel identical requests, verify single mutation    │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 6: REPORTING & HANDOFF                                                             │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ HTML test report, JUnit XML for CI, coverage report with delta              │      │
│  │  ▸ Handoff: test results, contract violations, performance deltas, bug reports │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘