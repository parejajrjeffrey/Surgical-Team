o# 🏥 The Cline Surgical Team — Usage Guide

## What This Is

A complete AI skill system that turns Cline into 7 specialized "Doctors" — each an elite engineer in their domain. Dr. Orchestrator pages the right specialist. Each Dr. loads their own rules, follows a reasoning pipeline, and hands off to other Doctors with precise artifacts.

## Quick Start

### Paging Dr. Orchestrator (Start Here)

```
use_skill("dr-orchestrator")
```

Dr. Orchestrator will triage your request and page the right specialist. You can also page any Dr. directly:

```
use_skill("dr-backend")     → Backend & API Engineering (41 rules)
use_skill("dr-devops")      → DevOps & Infrastructure (39 rules)
use_skill("dr-qa")          → QA & Testing Engineering (36 rules)
use_skill("dr-frontend")    → Frontend UI/UX Engineering (38 rules)
use_skill("dr-security")    → Security & Compliance (37 rules)
use_skill("dr-data")        → Data Engineering & Analytics (34 rules)
```

### Direct Paging Examples

| You Say | Dr. Activated | What Happens |
|---|---|---|
| "Dr. Backend, audit my API" | `dr-backend` | 7-stage pipeline: spec-first gate → data model audit → endpoint hardening → concurrency check → security hardening → performance gate → handoff |
| "Dr. DevOps, this Terraform module needs review" | `dr-devops` | 7-stage pipeline: drift audit → container compliance → K8s hardening → network policy → CI/CD audit → observability → DR |
| "Dr. QA, nothing ships without your sign-off" | `dr-qa` | 6-stage pipeline: test landscape → coverage gap → E2E generation → contract validation → performance testing → reporting |
| "Dr. Frontend, this form isn't accessible" | `dr-frontend` | 7-stage pipeline: UI landscape → component audit → a11y hardening → state audit → performance → responsive → handoff |
| "Dr. Security, run a full audit" | `dr-security` | 6-stage pipeline: posture discovery → vuln triage → IAM audit → code audit → infrastructure audit → compliance |
| "Dr. Data, why are my dashboards stale?" | `dr-data` | 6-stage pipeline: data landscape → lineage audit → pipeline reliability → quality enforcement → query optimization → governance |

## How Each Dr. Works

Every specialist follows the same pattern when activated:

1. **Loads their rules** from their domain folder (`rules.md` — 34-41 rules each)
2. **Executes their reasoning pipeline** (`reasoning-engine.md` — 6-7 stages)
3. **Scans your codebase** using Cline-native tools (`read_file`, `search_files`, `execute_command`, `list_code_definition_names`)
4. **Produces actionable output** — code fixes, configuration changes, architecture recommendations
5. **Runs their quality checklist** before marking complete (`quality-checklist.md`)

## Cross-Team Handoffs

When a task spans multiple domains, Dr. Orchestrator coordinates the handoff:

```
Dr. Backend      ──OpenAPI spec──▶  Dr. Frontend (typed client generation)
Dr. Backend      ──migration spec──▶  Dr. DevOps (deployment review)
Dr. Backend      ──idempotency vectors──▶  Dr. QA (contract testing)
Dr. DevOps       ──canary metrics──▶  Dr. Backend (rollback decision)
Dr. QA           ──test failures──▶  Dr. Backend / Dr. Frontend (fix + regression)
Dr. Security     ──CVE reports──▶  Dr. Backend / Dr. DevOps (patching)
Dr. Data         ──event schemas──▶  Dr. Backend (producer implementation)
```

Each Dr.'s `cross-team-workflows.md` defines the exact artifact format, location, and handoff protocol.

## File Architecture

Every Dr. persona folder is **self-contained** — all rules, pipelines, workflows, and checklists live in the same directory. No relative path jumping.

```
cline-skills/
├── USAGE.md
├── .cline/
│   └── skills/
│       ├── dr-orchestrator/
│       │   └── skill.md                     ← Master pager / triage coordinator
│       ├── dr-backend/
│       │   ├── skill.md                     ← Persona identity + activation
│       │   ├── README.md                    ← Shields + responsibility matrix
│       │   ├── reasoning-engine.md          ← 7-stage pipeline
│       │   ├── cross-team-workflows.md      ← Handoff protocols
│       │   ├── rules.md                     ← 41 rules
│       │   └── quality-checklist.md         ← 23 checklist items
│       ├── dr-devops/
│       │   ├── skill.md → + 5 knowledge files (39 rules)
│       ├── dr-qa/
│       │   ├── skill.md → + 5 knowledge files (36 rules)
│       ├── dr-frontend/
│       │   ├── skill.md → + 5 knowledge files (38 rules)
│       ├── dr-security/
│       │   ├── skill.md → + 5 knowledge files (37 rules)
│       └── dr-data/
│           ├── skill.md → + 5 knowledge files (34 rules)
│
│ Total: 37 files | 225 rules across 6 domains | 39 pipeline stages | 133 checklist items
```

## Stats

| Domain | Persona | Rules | Pipeline Stages | Checklist Items |
|---|---|---|---|---|
| Backend & API | Dr. Backend | 41 | 7 | 23 |
| DevOps & Infra | Dr. DevOps | 39 | 7 | 22 |
| QA & Testing | Dr. QA | 36 | 6 | 22 |
| Frontend UI/UX | Dr. Frontend | 38 | 7 | 23 |
| Security | Dr. Security | 37 | 6 | 23 |
| Data Engineering | Dr. Data | 34 | 6 | 20 |
| **TOTAL** | **7 Doctors** | **225 rules** | **39 stages** | **133 checks** |