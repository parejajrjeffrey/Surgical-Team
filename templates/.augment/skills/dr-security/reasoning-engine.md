# 🧠 THE REASONING ENGINE — Security & Compliance Engineering

## Mental Execution Flow

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                          SECURITY SKILL REASONING PIPELINE                               │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│  STEP 0: SECURITY POSTURE DISCOVERY                                                     │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  execute_command(): "npm audit --json", "trivy fs --scanners vuln,secret .",   │      │
│  │    "semgrep --config=auto . --json", "prowler aws -M json-ocsf",              │      │
│  │    "gitleaks detect --source . --report-format json"                           │      │
│  │  read_file() all: package.json, go.mod, Dockerfile*, terraform/*.tf,           │      │
│  │    SECURITY.md, COMPLIANCE.md                                                   │      │
│  │  search_files() for: "API_KEY|SECRET|PASSWORD|TOKEN|PRIVATE_KEY|eval\(|exec\("│      │
│  │  list_code_definition_names() on: auth/, middleware/, policies/, iam/         │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 1: VULNERABILITY TRIAGE & REMEDIATION                                              │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Classify by CVSS: CRITICAL(≥9.0), HIGH(7.0-8.9), MEDIUM(4.0-6.9), LOW(<4.0)│      │
│  │  ▸ Remediation SLA: CRITICAL→24h, HIGH→7d, MEDIUM→30d, LOW→90d or accept      │      │
│  │  ▸ Check reachability: is vulnerable code path ACTUALLY used?                  │      │
│  │  ▸ Remediation priority: patch→upgrade→remove→mitigate (WAF, network control)  │      │
│  │  ▸ Verify: re-scan after fix → 0 findings for that CVE                        │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 2: IAM & ACCESS CONTROL AUDIT                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Run: IAM Access Analyzer → identify external access, unused roles           │      │
│  │  ▸ Check: No "Resource": "*" with "Action": "*" — instant CRITICAL              │      │
│  │  ▸ Check: No "Principal": "*" in trust policies                                │      │
│  │  ▸ Check: Conditions for boundary enforcement (SourceIp, PrincipalOrgID)       │      │
│  │  ▸ Check: MFA required for privileged actions                                   │      │
│  │  ▸ Verify: Service accounts use IRSA/Workload Identity — no long-lived keys    │      │
│  │  ▸ Verify: IAM credential report → 0 access keys older than 90 days            │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 3: CODE-LEVEL SECURITY AUDIT (OWASP TOP 10)                                       │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ SAST: Semgrep OWASP Top 10 + project-specific rules                          │      │
│  │  ▸ A1: Broken Access Control → authZ on every endpoint                         │      │
│  │  ▸ A2: Cryptographic Failures → no MD5/SHA-1/DES/RC4/ECB/static IVs           │      │
│  │  ▸ A3: Injection → parameterized queries, no exec/system user input            │      │
│  │  ▸ A5: Security Misconfiguration → no debug mode, verbose errors, defaults     │      │
│  │  ▸ A7: Auth Failures → no JWT none alg, tokens ≤24h, MFA enforced             │      │
│  │  ▸ A10: SSRF → user-controlled URLs validated with allowlist                   │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 4: INFRASTRUCTURE SECURITY AUDIT (CIS BENCHMARKS)                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ S3: block public access, encryption, versioning, logging, no public ACLs    │      │
│  │  ▸ RDS: encryption, no public accessibility, automated backups ≥7d, deletion prot│      │
│  │  ▸ Security Groups: no 0.0.0.0/0 on 22, 3389, 3306, 5432, 6379, 27017        │      │
│  │  ▸ CloudTrail: all regions, log validation, SSE-KMS, multi-region              │      │
│  │  ▸ KMS: key rotation enabled, least privilege key policies                     │      │
│  │  ▸ VPC: Flow Logs enabled, no default VPC for production                       │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 5: COMPLIANCE & EVIDENCE COLLECTION                                                │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Map controls: SOC 2, ISO 27001:2022, PCI DSS 4.0, GDPR, HIPAA              │      │
│  │  ▸ Automate evidence: API-driven screenshots, git-versioned policies, SARIF    │      │
│  │  ▸ Evidence: immutable (WORM), timestamped, signed, scheduled weekly           │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 6: INCIDENT RESPONSE PREPAREDNESS                                                   │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ IR plan documented and accessible offline                                    │      │
│  │  ▸ On-call rotation with escalation (P1→Lead→CTO→CEO)                          │      │
│  │  ▸ Detection: GuardDuty/Security Hub→PagerDuty→on-call; test monthly           │      │
│  │  ▸ Forensic readiness: immutable CloudTrail, VPC Flow Logs, EBS snapshots      │      │
│  │  ▸ Tabletop exercise quarterly — simulate real incident with full team          │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘