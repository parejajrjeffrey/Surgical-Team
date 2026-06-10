# 🏥 Surgical Team — Elite Engineering AI Skills

<p align="center">
  <a href="https://github.com/parejajrjeffrey/Surgical-Team/releases"><img src="https://img.shields.io/github/v/release/parejajrjeffrey/Surgical-Team?style=for-the-badge&color=blue" alt="GitHub Release"></a>
  <img src="https://img.shields.io/badge/reasoning_rules-225-green?style=for-the-badge" alt="225 Reasoning Rules">
  <img src="https://img.shields.io/badge/specialists-7-purple?style=for-the-badge" alt="7 Specialists">
  <img src="https://img.shields.io/badge/domains-6-orange?style=for-the-badge" alt="6 Domains">
  <a href="https://github.com/parejajrjeffrey/Surgical-Team/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-CC_BY--SA_4.0-green?style=for-the-badge" alt="License: CC BY-SA 4.0"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/surgical-team"><img src="https://img.shields.io/npm/v/surgical-team?style=flat-square&logo=npm&label=CLI" alt="npm"></a>
  <a href="https://www.npmjs.com/package/surgical-team"><img src="https://img.shields.io/npm/dm/surgical-team?style=flat-square&label=downloads" alt="npm downloads"></a>
  <a href="https://github.com/parejajrjeffrey/Surgical-Team/stargazers"><img src="https://img.shields.io/github/stars/parejajrjeffrey/Surgical-Team?style=flat-square&logo=github" alt="GitHub stars"></a>
</p>

7 specialized AI "Doctors" — each an elite engineer in their domain — that turn any AI coding assistant into an expert surgical team. 225 rules, 39 pipeline stages, 133 quality checks across 6 engineering domains.

<p align="center">
  <b>If you find this useful, consider supporting the project:</b><br><br>
  <a href="https://github.com/sponsors/parejajrjeffrey"><img src="https://img.shields.io/badge/GitHub-Sponsor-ff69b4?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Sponsor"></a>
</p>

---

## What's New in v2.4.1

### The Surgical Team — 7 AI Doctors with 225 Decision Rules

The flagship feature — each Doctor is a self-contained AI persona with its own specialized rulebook, reasoning pipeline, cross-team handoff protocols, and pre-delivery quality checklist. When paged, a Doctor loads their domain knowledge and operates with surgical precision.


┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                          DR. BACKEND — API AUDIT REPORT                                 │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│  ENDPOINT: POST /api/orders                                                             │
│                                                                                         │
│  VIOLATIONS FOUND:                                                                      │
│      R003: No Idempotency-Key validation — duplicate POSTs will create duplicate        |
│              orders. Add Idempotency-Key header with 24-hour TTL.                       │
│      R012: SQL interpolation detected in orderRepository.js line 47:                    │
│              `db.query(\`SELECT * FROM orders WHERE id = \${req.params.id}\`)`          │
│              Replace with parameterized query: db.query('SELECT * FROM orders           │
│              WHERE id = $1', [req.params.id])                                           │
│      R002: FK customer_id on orders table has no index — EXPLAIN shows Seq Scan.        │
│              Add: CREATE INDEX idx_orders_customer_id ON orders(customer_id);           │
│      R008: GET /api/orders has no pagination — query returns all rows. Add              │
│              cursor-based pagination with maxPageSize=100.                              │
│                                                                                         │
│  HANDOFFS REQUIRED:                                                                     │
│     → Dr. QA: Idempotency test vectors for POST /api/orders                             │
│     → Dr. DevOps: Migration lock estimate for new FK index                              │
│                                                                                         │
│  PRE-DELIVERY CHECKLIST: 18/23 items pass, 4 fail, 1 not applicable                     │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### How the Surgical Team Works

```
┌─────────────────────────────────────────────────────────────────┐
│  1. USER REQUEST                                                │
│     "Audit my API and tell me what's wrong"                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  2. DR. ORCHESTRATOR TRIAGES                                    │
│     "API + Database → Page Dr. Backend"                         │
│     Complex request → Multi-doctor dispatch                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  3. SPECIALIST EXECUTES PIPELINE                                │
│     • Loads domain rulebook (41 rules)                          │
│     • Executes 7-stage reasoning pipeline                       │
│     • Scans codebase with native AI tools                       │
│     • Produces violation report with rule citations             │
│     • Generates handoff artifacts for other specialists         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  4. CROSS-TEAM HANDOFFS                                         │
│     Dr. Backend → Dr. QA (idempotency test vectors)             │
│     Dr. Backend → Dr. DevOps (migration lock estimates)         │
│     Dr. Backend → Dr. Frontend (OpenAPI spec update)            │
└─────────────────────────────────────────────────────────────────┘
```

---

## Supported Tech Stack — Full Coverage Across 6 Domains

<p align="center">
  <sub>Every doctor brings expertise across the entire technology landscape. From frontend frameworks to infrastructure, databases to data pipelines.</sub>
</p>

### 🧬 Backend Languages & Frameworks

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" alt="Go" />
  <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" alt="Rust" />
  <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white" alt="C#" />
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
</p>

### 🎨 Frontend Frameworks & Tools

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="Vue" />
  <img src="https://img.shields.io/badge/Nuxt.js-00DC82?style=for-the-badge&logo=nuxtdotjs&logoColor=white" alt="Nuxt" />
  <img src="https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="Svelte" />
  <img src="https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white" alt="Storybook" />
</p>

### 🗄️ Databases & Storage

<p align="center">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
  <img src="https://img.shields.io/badge/ClickHouse-FFCC01?style=for-the-badge&logo=clickhouse&logoColor=black" alt="ClickHouse" />
  <img src="https://img.shields.io/badge/Snowflake-29B5E8?style=for-the-badge&logo=snowflake&logoColor=white" alt="Snowflake" />
  <img src="https://img.shields.io/badge/BigQuery-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" alt="BigQuery" />
  <img src="https://img.shields.io/badge/ScyllaDB-6CD5E7?style=for-the-badge&logo=scylladb&logoColor=black" alt="ScyllaDB" />
</p>

### 🔧 Infrastructure & DevOps

<p align="center">
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
  <img src="https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white" alt="Terraform" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Helm-0F1689?style=for-the-badge&logo=helm&logoColor=white" alt="Helm" />
  <img src="https://img.shields.io/badge/ArgoCD-EF7B4D?style=for-the-badge&logo=argo&logoColor=white" alt="ArgoCD" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white" alt="Prometheus" />
  <img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white" alt="Grafana" />
</p>

### ☁️ Cloud Platforms

<p align="center">
  <img src="https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS" />
  <img src="https://img.shields.io/badge/GCP-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" alt="GCP" />
  <img src="https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white" alt="Azure" />
  <img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Databricks-FF3621?style=for-the-badge&logo=databricks&logoColor=white" alt="Databricks" />
</p>

### 🧪 Testing & Quality

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-45BA4B?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright" />
  <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
  <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest" />
  <img src="https://img.shields.io/badge/k6-7D64FF?style=for-the-badge&logo=k6&logoColor=white" alt="k6" />
  <img src="https://img.shields.io/badge/Pytest-0A9EDC?style=for-the-badge&logo=pytest&logoColor=white" alt="Pytest" />
  <img src="https://img.shields.io/badge/OWASP_ZAP-00549E?style=for-the-badge&logo=owasp&logoColor=white" alt="OWASP ZAP" />
  <img src="https://img.shields.io/badge/axe--core-663399?style=for-the-badge&logo=axe&logoColor=white" alt="axe-core" />
</p>

### 📊 Data & Analytics

<p align="center">
  <img src="https://img.shields.io/badge/dbt-FF694B?style=for-the-badge&logo=dbt&logoColor=white" alt="dbt" />
  <img src="https://img.shields.io/badge/Apache_Airflow-017CEE?style=for-the-badge&logo=apacheairflow&logoColor=white" alt="Airflow" />
  <img src="https://img.shields.io/badge/Apache_Spark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white" alt="Spark" />
  <img src="https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white" alt="Kafka" />
  <img src="https://img.shields.io/badge/Flink-E6526F?style=for-the-badge&logo=apacheflink&logoColor=white" alt="Flink" />
  <img src="https://img.shields.io/badge/DuckDB-FFF000?style=for-the-badge&logo=duckdb&logoColor=black" alt="DuckDB" />
  <img src="https://img.shields.io/badge/Looker-7B1FA2?style=for-the-badge&logo=looker&logoColor=white" alt="Looker" />
  <img src="https://img.shields.io/badge/DataHub-00B0B9?style=for-the-badge&logo=datahub&logoColor=white" alt="DataHub" />
</p>

### 🔐 API, Auth & Messaging

<p align="center">
  <img src="https://img.shields.io/badge/OpenAPI-6BA539?style=for-the-badge&logo=openapiinitiative&logoColor=white" alt="OpenAPI" />
  <img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL" />
  <img src="https://img.shields.io/badge/gRPC-2A2A2A?style=for-the-badge&logo=grpc&logoColor=white" alt="gRPC" />
  <img src="https://img.shields.io/badge/OAuth_2.1-3C3C3C?style=for-the-badge&logo=oauth&logoColor=white" alt="OAuth" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white" alt="Kafka" />
  <img src="https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white" alt="RabbitMQ" />
  <img src="https://img.shields.io/badge/NATS-27AAE1?style=for-the-badge&logo=natsdotio&logoColor=white" alt="NATS" />
</p>

### 🔒 Security & Compliance

<p align="center">
  <img src="https://img.shields.io/badge/HashiCorp_Vault-000000?style=for-the-badge&logo=vault&logoColor=FFEC6E" alt="Vault" />
  <img src="https://img.shields.io/badge/Semgrep-1B1F24?style=for-the-badge&logo=semgrep&logoColor=white" alt="Semgrep" />
  <img src="https://img.shields.io/badge/Trivy-1904DA?style=for-the-badge&logo=trivy&logoColor=white" alt="Trivy" />
  <img src="https://img.shields.io/badge/SOC_2-0057B8?style=for-the-badge&logo=aicpa&logoColor=white" alt="SOC 2" />
  <img src="https://img.shields.io/badge/ISO_27001-0066A1?style=for-the-badge&logo=iso&logoColor=white" alt="ISO 27001" />
  <img src="https://img.shields.io/badge/PCI_DSS-CC0000?style=for-the-badge&logo=pci&logoColor=white" alt="PCI DSS" />
  <img src="https://img.shields.io/badge/GDPR-009639?style=for-the-badge&logo=gdpr&logoColor=white" alt="GDPR" />
  <img src="https://img.shields.io/badge/Snyk-4C4A73?style=for-the-badge&logo=snyk&logoColor=white" alt="Snyk" />
</p>

> **170+ tools, frameworks, languages, and platforms.** Every doctor activates the right subset for their domain. Dr. Backend uses PostgreSQL/Redis/Kafka/OpenAPI. Dr. Frontend uses React/Vue/Svelte/Tailwind/Storybook. Dr. DevOps uses Terraform/K8s/Helm/ArgoCD/Prometheus. And so on.

---

## Meet the Surgical Team

| Doctor | Domain | Rules | Pipeline | Specialty |
|---|---|---|---|---|
| 🧬 **Dr. Backend** | API & Database | 41 | 7-stage | OpenAPI, PostgreSQL, Auth, Caching, Resilience |
| 🔧 **Dr. DevOps** | Infrastructure | 39 | 7-stage | Terraform, K8s, CI/CD, Observability, DR |
| 🧪 **Dr. QA** | Testing | 36 | 6-stage | Playwright, k6, Contract Testing, A11y |
| 🎨 **Dr. Frontend** | UI/UX | 38 | 7-stage | React, Design Tokens, WCAG AA, Core Web Vitals |
| 🔐 **Dr. Security** | Security | 37 | 6-stage | OWASP, IAM, CIS Benchmarks, SOC2, IR |
| 📊 **Dr. Data** | Data | 34 | 6-stage | dbt, Airflow, Data Quality, Governance |
| 🏥 **Dr. Orchestrator** | Triage | 225 | N/A | Dispatch, cross-team coordination |

### 225 Industry-Specific Decision Rules

Every rule is prescriptive, not vague. Examples:

| Rule | Doctor | Prescription |
|---|---|---|
| **R003** | Dr. Backend | Every mutating endpoint MUST accept `Idempotency-Key` header with ≥24h TTL |
| **R004** | Dr. DevOps | All containers must run as non-root with `readOnlyRootFilesystem: true` |
| **R005** | Dr. QA | Performance tests must assert on p95/p99, never averages — averages hide tail-latency |
| **R009** | Dr. Frontend | Color contrast must meet WCAG AA minimum — 4.5:1 normal text, 3:1 large |
| **R001** | Dr. Security | CRITICAL CVEs must be fixed within 24 hours — no deferred acceptance without approval |
| **R001** | Dr. Data | Every dbt model must have `unique` test on PK and `not_null` on required columns |

---

## Features

- **7 AI Specialists** — Each with unique persona, domain expertise, and communication style
- **225 Prescriptive Rules** — Never "follow best practices" — always "FK columns must have covering indexes"
- **39 Reasoning Pipeline Stages** — Step-by-step mental workflows (spec-first gates, drift audits, coverage gap analysis)
- **133 Pre-Delivery Quality Checks** — Nothing ships without verification
- **18 Cross-Team Handoff Workflows** — Doctors hand off artifacts (OpenAPI specs, test vectors, CVE reports)
- **Self-Contained Personas** — Each Doctor folder is complete: identity, rules, pipeline, workflows, checklist
- **18+ AI Platforms** — Cline, Claude Code, Cursor, Windsurf, Copilot, Codex, and more

---

## Supported Platforms

| Platform | Support | Activation |
|---|---|---|
| **Cline** | ✅ Native | `use_skill("dr-backend")` |
| **Claude Code** | ✅ Native | Skill auto-activates |
| **Cursor** | ✅ Native | `.cursor/skills/` rules |
| **Windsurf** | ✅ Native | `.windsurf/skills/` rules |
| **GitHub Copilot** | ✅ Workflow | `/dr-backend` slash command |
| **Codex CLI** | ✅ Native | Skill auto-activates |
| **OpenCode** | ✅ Native | `.opencode/skills/` |
| **KiloCode** | ✅ Workflow | `/dr-backend` slash command |
| **Roo Code** | ✅ Workflow | Workflow mode |
| **Continue** | ✅ Native | `.continue/skills/` |
| **Gemini CLI** | ✅ Native | Skill auto-activates |
| **Qoder** | ✅ Native | `.qoder/skills/` |
| **Trae** | ✅ SOLO mode | Skill auto-activates |
| **CodeBuddy** | ✅ Native | `.codebuddy/skills/` |
| **Droid (Factory)** | ✅ Native | `.factory/skills/` |
| **Warp** | ✅ Native | `.warp/skills/` |
| **Augment** | ✅ Native | `.augment/skills/` |
| **Antigravity** | ✅ Native | `.antigravity/skills/` |

---

## Installation

### Using CLI (Recommended)

```bash
# Install CLI globally
npm install -g surgical-team

# Go to your project
cd /path/to/your/project

# Install for your AI assistant
cst init --ai claude      # Claude Code / Cline
cst init --ai cursor      # Cursor
cst init --ai windsurf    # Windsurf
cst init --ai copilot     # GitHub Copilot
cst init --ai codex       # Codex CLI
cst init --ai qoder       # Qoder
cst init --ai roocode     # Roo Code
cst init --ai gemini      # Gemini CLI
cst init --ai trae        # Trae
cst init --ai opencode    # OpenCode
cst init --ai continue    # Continue
cst init --ai codebuddy   # CodeBuddy
cst init --ai droid       # Droid (Factory)
cst init --ai kilocode    # KiloCode
cst init --ai warp        # Warp
cst init --ai augment     # Augment
cst init --ai antigravity # Antigravity
cst init --ai all         # All assistants
```

### Manual Install

```bash
# Clone into your AI assistant's skills directory
git clone https://github.com/parejajrjeffrey/Surgical-Team.git .cline/skills/
# or .cursor/skills/, .windsurf/skills/, .continue/skills/, etc.
```

### Install a Single Doctor

```bash
cst init --ai claude --doctor dr-backend    # Only install Dr. Backend
cst init --ai claude --doctor dr-devops     # Only install Dr. DevOps
cst init --ai claude --team backend-qa     # Install Backend, QA, and Orchestrator
```

### Other CLI Commands

```bash
cst doctors              # List all available doctors
cst doctor dr-backend    # Show Dr. Backend details (rules, pipeline, stats)
cst team                 # Show the full team roster
cst update               # Update to latest version
cst uninstall            # Remove skill (auto-detect platform)
cst uninstall --ai claude # Remove from specific platform
```

---

## Usage

### Skill Mode (Auto-activate)

**Supported:** Cline, Claude Code, Cursor, Windsurf, Codex CLI, Continue, Gemini CLI, OpenCode, Qoder, CodeBuddy, Droid (Factory), Warp, Augment, Antigravity

The skill activates automatically when you request domain-specific work. Just chat naturally:

```
Dr. Backend, audit my API
Dr. DevOps, review this Terraform module
Dr. QA, nothing ships without your sign-off
Dr. Frontend, this form isn't accessible
Dr. Security, run a full audit
Dr. Data, why are my dashboards stale?
Dr. Orchestrator, I need help with my entire stack
```

> **Trae**: Switch to **SOLO** mode first. The skill will activate for engineering requests.

### Workflow Mode (Slash Command)

**Supported:** GitHub Copilot, Roo Code, KiloCode

```
/dr-backend Audit my API
/dr-devops Review this Kubernetes deployment
/dr-qa Generate test cases for this endpoint
/dr-frontend Fix the accessibility issues on this page
/dr-security Scan my dependencies for CVEs
/dr-data Validate this dbt model
```

### Example Prompts

```
Dr. Backend — Add an idempotent POST endpoint with OpenAPI spec, rate limiting,
and a transactional outbox for side effects.

Dr. DevOps — Harden this Kubernetes deployment: non-root, read-only rootfs,
NetworkPolicy default-deny, PDB, and resource limits with Guaranteed QoS.

Dr. QA — Generate Playwright E2E tests for the checkout flow with semantic
locators, API mocking, and console error assertions.

Dr. Frontend — Audit this login form for WCAG 2.2 AA: labels, color contrast,
keyboard navigation, focus management, and screen reader support.

Dr. Security — Full compliance scan: CVE triage, IAM least-privilege audit,
CIS Benchmarks check, and SOC 2 evidence readiness.

Dr. Data — Review this dbt project: materialization strategy, incremental model
idempotency, JOIN key types, data quality tests, and partitioning strategy.
```

### How It Works

1. **You page a Doctor** — Use their name naturally or via `use_skill("dr-backend")`
2. **The Doctor self-bootstraps** — Loads `skill.json` for identity, `rules.md` for decisions
3. **7-stage pipeline executes** — Discovery → Audit → Implementation → Resilience → Security → Performance → Handoff
4. **Precise output** — Rule citations (R003: Idempotency-Key required), EXPLAIN output, concrete fixes
5. **Cross-team handoffs** — If domain boundaries are crossed, artifacts flow to the right specialist

---

## Architecture

### File Structure

```
Surgical-Team/
├── skill.json                    ← Team manifest (all 7 doctors registered)
├── README.md                     ← You're reading this
├── USAGE.md                      ← Quick-start reference
├── .cline/skills/                ← Cline platform installation
│   ├── dr-orchestrator/
│   ├── dr-backend/               ← Each doctor is self-contained:
│   │   ├── skill.json            ←   Doctor metadata (name, rules, pipeline, stacks)
│   │   ├── skill.md              ←   AI persona identity + activation
│   │   ├── README.md             ←   Shields + responsibility matrix
│   │   ├── reasoning-engine.md   ←   7-stage mental execution pipeline
│   │   ├── cross-team-workflows.md ← Handoff protocols to other doctors
│   │   ├── rules.md              ←   41 prescriptive decision rules
│   │   └── quality-checklist.md  ←   23-item pre-delivery verification
│   ├── dr-devops/                ← (39 rules, 7-stage pipeline, 22 checks)
│   ├── dr-qa/                    ← (36 rules, 6-stage pipeline, 22 checks)
│   ├── dr-frontend/              ← (38 rules, 7-stage pipeline, 23 checks)
│   ├── dr-security/              ← (37 rules, 6-stage pipeline, 23 checks)
│   └── dr-data/                  ← (34 rules, 6-stage pipeline, 20 checks)
├── templates/                    ← Platform-specific templates
│   ├── .cursor/skills/           ← Cursor template
│   ├── .windsurf/skills/         ← Windsurf template
│   ├── .continue/skills/         ← Continue template
│   └── ...                       ← One template per supported platform
└── cli/                          ← CLI installer (generates platform files)
```

### For Contributors

If you want to contribute to this project:

```bash
# 1. Clone the repository
git clone https://github.com/parejajrjeffrey/Surgical-Team.git
cd Surgical-Team

# 2. Understand the structure
.cline/skills/              # Source of truth (doctor personas + knowledge bases)
templates/                  # Platform-specific skill templates
cli/                        # CLI installer

# 3. Make changes to a doctor
# Edit .cline/skills/dr-backend/rules.md → Add new rule R042
# Edit .cline/skills/dr-backend/reasoning-engine.md → Add new pipeline stage

# 4. Sync to templates and test
cp .cline/skills/dr-backend/ templates/.cursor/skills/dr-backend/
# Repeat for each platform template

# 5. Create PR
git checkout -b feat/new-backend-rule
git commit -m "feat(dr-backend): add R042 for WebSocket connection pooling"
git push -u origin feat/new-backend-rule
gh pr create
```

---

## Stats

| Domain | Persona | Rules | Pipeline | Checklist | Keywords |
|---|---|---|---|---|---|
| Backend & API | 🧬 Dr. Backend | 41 | 7-stage | 23 items | OpenAPI, PostgreSQL, GraphQL, Auth, Caching |
| DevOps & Infra | 🔧 Dr. DevOps | 39 | 7-stage | 22 items | Terraform, Kubernetes, CI/CD, Prometheus, DR |
| QA & Testing | 🧪 Dr. QA | 36 | 6-stage | 22 items | Playwright, k6, Contract Testing, A11y |
| Frontend UI/UX | 🎨 Dr. Frontend | 38 | 7-stage | 23 items | React, Design Tokens, WCAG AA, Core Web Vitals |
| Security | 🔐 Dr. Security | 37 | 6-stage | 23 items | OWASP, IAM, CIS, SOC2, ISO27001, IR |
| Data Engineering | 📊 Dr. Data | 34 | 6-stage | 20 items | dbt, Airflow, Spark, Snowflake, Governance |
| **TOTAL** | **7 Doctors** | **225** | **39 stages** | **133 checks** | **6 domains** |

---

## License

This project is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](LICENSE).
