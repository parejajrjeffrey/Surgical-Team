# 🧪 SKILL: QA & Testing Engineering — Elite Quality Gatekeeper

<p align="center">
  <img src="https://img.shields.io/badge/version-2.4.1-4cc9f0?style=for-the-badge&logo=semver" alt="Version 2.4.1" />
  <img src="https://img.shields.io/badge/rules-36_heuristics-3a0ca3?style=for-the-badge&logo=probot" alt="36 Reasoning Rules" />
  <img src="https://img.shields.io/badge/stack-Playwright_|_Cypress_|_Jest_|_k6_|_JUnit_|_Pytest_|_Go_test-7209b7?style=for-the-badge&logo=testinglibrary" alt="Stack Compatibility" />
  <img src="https://img.shields.io/badge/license-CC_BY--SA_4.0-f72585?style=for-the-badge&logo=creativecommons" alt="License: CC BY-SA 4.0" />
  <img src="https://img.shields.io/badge/Cline--native-v3.0%2B_browser_|_terminal_|_file_ops-b5179e?style=for-the-badge&logo=cline" alt="Cline Native v3.0+" />
</p>

---

## 📋 CORE RESPONSIBILITY MATRIX

| Focus Area | Primary Tools & Frameworks | Technical Stack Depth | Ownership Level |
|---|---|---|---|
| **End-to-End (E2E) Testing** | Playwright 1.45+, Cypress 13+, Selenium WebDriver, WebDriverIO | Cross-browser (Chromium, Firefox, WebKit), mobile emulation, visual regression, network interception, auth state management, parallel execution with sharding | **Sole Owner** |
| **API & Contract Testing** | Jest + Supertest, Pytest + httpx, REST Assured, Karate DSL, Postman/Newman, k6 | Contract validation against OpenAPI schema, idempotency testing, rate-limit boundary testing, error envelope validation, pagination conformance | **Sole Owner** |
| **Performance & Load Testing** | k6, Artillery, Locust, Gatling, wrk2, autocannon | Ramp-up/gradient profiles, soak tests, stress tests, spike tests, p50/p90/p99 latency validation, throughput (RPS) benchmarking, connection pool exhaustion testing | **Sole Owner** |
| **Integration Testing** | Testcontainers, Docker Compose, Embedded DB, Pytest fixtures, Jest setupFiles | Service isolation with mocked dependencies, database state seeding and cleanup, message broker test doubles, external API wiremock/stub | **Sole Owner** |
| **Unit Testing** | Jest, Vitest, Mocha, Pytest, unittest, Go testing, JUnit 5 | AAA pattern (Arrange-Act-Assert), table-driven tests, property-based testing, mutation testing, code coverage ≥80% enforcement | **Shared with All Dev Teams** |
| **Security Testing** | OWASP ZAP, Burp Suite API, npm audit, pip-audit, snyk, bearer, nuclei | AuthN/AuthZ bypass testing, JWT manipulation, SQLi/XSS/CSRF injection vectors, rate-limit evasion, file upload MIME spoofing | **Shared with Security** |
| **Accessibility Testing** | axe-core, Lighthouse, pa11y, WAVE, NVDA/JAWS screen reader | WCAG 2.2 AA compliance minimum, keyboard navigation, color contrast ratios, ARIA label completeness, focus trap in modals | **Shared with Frontend** |

---

## 📁 File Structure

| File | Purpose | When to Load |
|---|---|---|
| `README.md` | This file — header, shields, responsibility matrix | Always loaded first |
| `reasoning-engine.md` | 6-stage mental execution pipeline | Loaded when implementing any task |
| `cross-team-workflows.md` | Handoff protocols to Backend, Frontend, DevOps, Security teams | Loaded when preparing deliverables |
| `rules.md` | 36 QA-specific decision rules and anti-patterns | Loaded during code review or test audit |
| `quality-checklist.md` | 22-item pre-delivery verification checklist | Loaded before marking any task complete |