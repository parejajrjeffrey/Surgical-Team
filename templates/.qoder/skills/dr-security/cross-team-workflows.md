# 🔗 INTEGRATED CROSS-TEAM WORKFLOWS — Security & Compliance Engineering

## Workflow 1: Vulnerability Report → Backend/DevOps Team

```
SECURITY (this skill)                      BACKEND / DEVOPS SKILL
┌────────────────────────────────┐        ┌────────────────────────────────┐
│ 1. Scanner identifies CVE:    │        │                                │
│    - CVE ID, CVSS score       │        │                                │
│    - Affected package + version│───────▶│ 2. Receive: vulnerability     │
│    - Reachability analysis    │  Issue │    report with fix instructions │
│    - Fix version available?   │  [sec] │                                │
│                                │        │ 3. Apply fix:                 │
│ 4. Verify: re-scan after fix  │        │    - Patch/upgrade dependency  │
│    → CVE resolved, no         │◀───────│    - Test: existing tests pass  │
│    regressions detected       │  PR    │    - Deploy to staging         │
│                                │        │                                │
│ 5. Close issue — no CVE       │        │ 6. Document in security       │
│    deferred without approved   │        │    changelog with fix commit  │
│    risk acceptance             │        │    hash and verification      │
└────────────────────────────────┘        └────────────────────────────────┘
```

## Workflow 2: IAM Change Approval → DevOps Team

```
SECURITY (this skill)                      DEVOPS SKILL
┌──────────────────────────────┐          ┌─────────────────────────────────┐
│ 1. Review IAM policy change  │          │                                 │
│    in Terraform PR:          │◀─────────│ 2. Propose: new IAM policy or   │
│                              │  PR tag  │    role, S3 bucket policy,      │
│ 3. Check:                    │ [sec-iam]│    security group rule          │
│    - Least privilege?        │          │                                 │
│    - No * in Action+Resource?│          │ 4. Include:                     │
│    - Conditions present?     │          │    - Justification per          │
│    - MFA for privileged ops? │          │      permission                 │
│    - No public principals?   │          │    - Terraform plan showing     │
│    - Access Analyzer passes? │          │      only intended changes      │
│                              │          │                                 │
│ 5. Approve with conditions   │─────────▶│ 6. Apply with required          │
│    or request changes with   │          │    approval; audit trail        │
│    specific remediation      │          │    captured in CloudTrail       │
└──────────────────────────────┘          └─────────────────────────────────┘
```

## Workflow 3: Compliance Evidence → All Teams

```
SECURITY (this skill)         BACKEND / DEVOPS / QA / FRONTEND
┌──────────────────────┐      ┌────────────────────────────────────┐
│ 1. Define compliance │      │                                    │
│    evidence schedule  │─────▶│ 2. Implement:                     │
│    and requirements   │      │    - Automated evidence scripts    │
│                      │      │    - Git-based policy docs         │
│ 3. Monitor:          │      │    - Scanner output archiving      │
│    - Evidence CI      │◀─────│    - Access review reports         │
│      pipeline passing │      │                                    │
│    - Control coverage │      │                                    │
│    - Gap remediation  │      │                                    │
│                      │      │                                    │
│ 4. Report: compliance│─────▶│ 5. Address gaps — prioritized by  │
│    dashboard + audit  │      │    risk and effort                 │
│    readiness score    │      │                                    │
└──────────────────────┘      └────────────────────────────────────┘
```

## Handoff Artifact Table

| To Team | Artifact | Location | Format |
|---|---|---|---|
| **Backend** | CVE report with fix instructions | GitHub Issue with `label:security` | Issue body: CVE ID, CVSS, affected package, fix version, reachability |
| **Backend** | SAST finding with code fix | PR comment from Semgrep/CodeQL | SARIF with code line, rule ID, fix example |
| **Backend** | OWASP Top 10 coverage gap report | `reports/security/owasp-coverage.json` | JSON per category: `{covered, gaps, severity}` |
| **DevOps** | IAM policy review verdict | PR review: `@sec-bot iam-review` | Approved / Changes Requested with specific remediation |
| **DevOps** | Cloud compliance scan results | CI artifact: `prowler-output.ocsf.json` | OCSF JSON or CSV: `{check_id, status, region, resource}` |
| **DevOps** | Container image CVE report | CI artifact: `trivy-image-results.sarif` | SARIF with `0 CRITICAL, 0 HIGH` requirement |
| **QA** | Security test vectors | `test-vectors/security/<scenario>.json` | JSON array: `{attack, expected_result, test_endpoint}` |
| **QA** | Penetration test report (external) | `reports/security/pentest-<YYYY-QN>.pdf` | PDF with findings, severity, remediation |
| **Frontend** | CSP header specification | `csp-policy.json` | JSON: `{directive: value, reason}` |
| **Frontend** | Frontend security checklist | `SECURITY.md#frontend` | Markdown checklist |
| **All Teams** | Security awareness training completion | LMS API report | CSV: `{user, module, completion_date, score}` |