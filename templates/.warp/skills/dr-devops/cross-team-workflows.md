# 🔗 INTEGRATED CROSS-TEAM WORKFLOWS — DevOps & Infrastructure

## Workflow 1: Deployment Approval → Backend Team

```
DEVOPS (this skill)                              BACKEND SKILL
┌─────────────────────────────────┐             ┌────────────────────────────┐
│ 1. CI pipeline completes:       │             │                            │
│    - Tests pass                 │             │                            │
│    - Image scanned (0 CRITICAL) │             │                            │
│    - Terraform plan reviewed    │────────────▶│ 2. Review: deployment      │
│                                 │  PR comment │    checklist, migration    │
│ 3. Canary deployment: 10%       │  with plan  │    runbook, rollback plan  │
│    traffic for 5 min            │  summary +  │                            │
│                                 │  diff links │ 3. Approve if:             │
│ 4. Metric verification:         │             │    - EXPLAIN output clean  │
│    error_rate < 0.1% delta      │             │    - Rollback plan defined │
│    p99 latency < 10% increase   │             │    - Idempotency tested     │
│                                 │             │                            │
│ 5. Proceed: 50% → 100% with     │             │ 4. Monitor: RED dashboards │
│    automated metric gates at    │             │    post-deployment         │
│    each step; auto-rollback on  │             │                            │
│    degradation                  │             │                            │
└─────────────────────────────────┘             └────────────────────────────┘
```

## Workflow 2: Infrastructure Change → Security Team

```
DEVOPS (this skill)                          SECURITY SKILL
┌──────────────────────────────┐            ┌─────────────────────────────────┐
│ 1. Propose Terraform module  │            │                                 │
│    change (new security      │───────────▶│ 2. Scan: checkov, tfsec against │
│    group, IAM role, network  │  PR tag    │    proposed changes             │
│    policy)                   │ [sec-iac]  │                                 │
│                              │            │ 3. Verify:                      │
│ 4. Include: terraform plan   │            │    - IAM: least privilege       │
│    output showing only       │            │    - SGs: 0.0.0.0/0 justified? │
│    intended changes          │            │    - Encryption: at rest +      │
│                              │            │      transit for all data       │
│                              │            │                                 │
│                              │            │ 4. Approve with security        │
│                              │            │    review stamp or request      │
│                              │            │    changes with specific        │
│                              │            │    remediation steps            │
└──────────────────────────────┘            └─────────────────────────────────┘
```

## Workflow 3: Observability Setup → All Teams

```
DEVOPS (this skill)                    BACKEND / FRONTEND / QA
┌──────────────────────────────┐      ┌────────────────────────────────────┐
│ 1. Provision:                 │      │                                    │
│    - Prometheus + Grafana     │      │                                    │
│    - Loki for logs            │─────▶│ 2. Instrument: OpenTelemetry SDK   │
│    - Tempo for traces         │      │    in application code             │
│    - Alertmanager + PagerDuty │      │                                    │
│                              │      │ 3. Export:                         │
│ 4. Create:                   │      │    - /metrics endpoint (RED)       │
│    - Base dashboards          │      │    - Structured logs (JSON→Loki)   │
│    - SLO definitions          │      │    - Trace context propagation    │
│    - Alert rules template     │      │                                    │
│    - On-call rotation         │      │ 5. Verify: Dashboards populated,  │
│                              │      │    alerts firing in staging,       │
│                              │      │    traces visible end-to-end       │
└──────────────────────────────┘      └────────────────────────────────────┘
```

## Handoff Artifact Table

| To Team | Artifact | Location | Format |
|---|---|---|---|
| **Backend** | `terraform plan` summary | PR comment with collapsed `<details>` | Markdown diff of resource changes |
| **Backend** | Migration deployment runbook | `runbooks/migrations/<service>.md` | Markdown with rollback steps, lock estimates |
| **Backend** | Resource sizing recommendations | `docs/sizing/<service>.md` | Table: {pod, CPU req/lim, Mem req/lim, replicas, HPA config} |
| **Backend** | Canary metric report | CI artifact URL | JSON: `{baseline_p99, canary_p99, error_rate_delta, verdict}` |
| **Security** | IaC security scan report | PR check: `checkov` / `tfsec` | SARIF or Markdown table |
| **Security** | Container vulnerability report | CI artifact: `trivy-results.sarif` | SARIF (CRITICAL=0, HIGH=0) |
| **Security** | Compliance audit evidence | `compliance/<framework>/` | SOC2/ISO27001 evidence artifacts |
| **QA** | Ephemeral test environment URL | PR comment auto-posted by CI | `https://pr-<num>.review.example.com` |
| **QA** | Load-test infrastructure config | `load-tests/<scenario>/terraform/` | Terraform config for k6/Gatling/Locust infra |
| **Data** | Backup/restore verification report | `reports/dr/<quarter>/` | PDF/Markdown with timestamps, RPO/RTO achieved |