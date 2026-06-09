# ✅ PRE-DELIVERY QUALITY CHECKLIST — Security & Compliance Engineering

## Before marking ANY task as complete, verify:

- [ ] **Vulnerability scan clean** — Trivy/Snyk/Grype shows 0 CRITICAL and 0 HIGH vulnerabilities in all images and dependencies
- [ ] **SAST scan clean** — Semgrep/CodeQL shows 0 HIGH or CRITICAL findings (false positives documented with justification)
- [ ] **Secret scan clean** — Gitleaks/truffleHog returns 0 findings in the entire git history and working directory
- [ ] **IAM audit clean** — IAM Access Analyzer shows 0 findings; no `"Resource": "*"` with `"Action": "*"`; no access keys >90 days old
- [ ] **S3/Blob public access blocked** — account-level block public access enabled; 0 public buckets/containers in production
- [ ] **Security groups audited** — no 0.0.0.0/0 on sensitive ports (22, 3389, 3306, 5432, 6379, 27017)
- [ ] **CloudTrail/Audit Logs enabled** — all regions, log file validation, SSE-KMS encryption, multi-region aggregation
- [ ] **Encryption enforced** — all RDS/EBS/S3/DynamoDB encrypted; KMS key rotation enabled; TLS 1.3 minimum on all endpoints
- [ ] **MFA enforced** — all human IAM users have MFA enabled; root account has hardware MFA; service accounts use OIDC
- [ ] **Security headers present** — HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy on all responses
- [ ] **Dependency pinning** — all dependencies use exact versions (no `^`/`~` for critical deps); lockfiles committed; SRI hashes for CDN scripts
- [ ] **Container security baseline** — non-root user, read-only root filesystem, no privileged mode, distroless/minimal base, signed images
- [ ] **IR plan current and tested** — last tabletop exercise ≤3 months ago; team contacts up to date; runbooks accessible offline
- [ ] **Compliance evidence current** — automated compliance scans passing; evidence pipeline running on schedule; no stale evidence
- [ ] **No hardcoded secrets** — grep for `password|secret|api_key|token|private_key` in source code → 0 matches
- [ ] **CSRF protection** — all mutating endpoints require CSRF token or custom header; CORS whitelists specific origins
- [ ] **Rate limiting enforced** — auth endpoints rate-limited to 5/min/IP; API endpoints have per-consumer limits with 429 responses
- [ ] **File upload security** — MIME validation by magic bytes, size limit enforced, malware scanning in pipeline, stored outside webroot
- [ ] **Data classification labels** — all data stores tagged with classification; PII/PHI/PCI in dedicated, restricted-access stores
- [ ] **Password policy NIST-compliant** — min 12 chars, no complexity rules, breached password check, bcrypt/argon2id hashing
- [ ] **Backup restore tested** — last restore test ≤90 days ago; backup integrity verified; immutable/WORM backups for critical data
- [ ] **Security training current** — all team members completed OWASP Top 10 training within last 12 months; phishing simulation results acceptable
- [ ] **Threat model completed** — for all new features; STRIDE analysis documented; mitigations implemented and verified