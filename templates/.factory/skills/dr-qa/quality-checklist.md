# ✅ PRE-DELIVERY QUALITY CHECKLIST — QA & Testing Engineering

## Before marking ANY task as complete, verify:

- [ ] **All new/changed features have corresponding automated tests** — no manual-only testing gaps
- [ ] **Regression tests added for every bug fix** — test fails on old code, passes on new code (verified via git bisect or temporary revert)
- [ ] **Tests are isolated and parallelizable** — `npx playwright test --workers=4` / `npx jest --maxWorkers=4` passes consistently
- [ ] **No `test.only` or `test.skip` committed** — pre-commit hook or CI check blocks `.only` and `.skip` (except with linked issue)
- [ ] **E2E tests use semantic locators** — `grep -r '\.locator.*\.css\|\.xpath\|:nth-child' e2e/` returns 0 matches
- [ ] **API tests validate response schemas** — every test has `expect(response.body).toMatchSchema(schema)` or equivalent
- [ ] **Performance test thresholds defined and passing** — `k6 run` exit code 0, no threshold violations
- [ ] **Idempotency tests pass** — double-send all mutating endpoints, verify single side-effect
- [ ] **Rate limiting tests verify boundaries** — at-limit passes, over-limit gets 429 with `Retry-After`
- [ ] **Accessibility violations are 0 (critical + serious)** — `axe-core` returns 0 violations at WCAG 2.2 AA
- [ ] **Security edge cases covered** — JWT `alg:none`, expired token, SQL injection payloads, XSS vectors tested
- [ ] **Flaky test quarantine is empty or has open tickets** — no flaky test older than 1 sprint without a fix attempt
- [ ] **Test data uses randomized unique values** — no hardcoded IDs, emails, or usernames in test code
- [ ] **Database state is clean between tests** — verify no leftover rows after test suite completes
- [ ] **Console errors asserted in E2E** — browser console 0 errors during test execution
- [ ] **Test naming follows convention** — random sampling of 10 test names all follow `should <behavior> when <condition>`
- [ ] **Coverage thresholds met** — line ≥80%, branch ≥70%, function ≥80% on changed files
- [ ] **Performance baseline comparison performed** — p95 delta ≤20% vs baseline; if >20%, justified or fixed
- [ ] **Mobile viewports tested** — at least one test per critical flow at mobile viewport (375×812)
- [ ] **CI smoke tests pass** — 2-minute smoke test suite passes before full suite runs
- [ ] **Test report artifacts generated** — JUnit XML, HTML report, coverage report all produced and archived
- [ ] **Handoff artifacts delivered to appropriate teams** — test results, contract violations, performance deltas communicated