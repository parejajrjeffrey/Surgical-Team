# 🔐 SKILL: Security & Compliance Engineering — Elite Threat Defender

<p align="center">
  <img src="https://img.shields.io/badge/version-2.4.1-dc2f02?style=for-the-badge&logo=semver" alt="Version 2.4.1" />
  <img src="https://img.shields.io/badge/rules-37_heuristics-370617?style=for-the-badge&logo=probot" alt="37 Reasoning Rules" />
  <img src="https://img.shields.io/badge/stack-OWASP_|_NIST_|_SOC2_|_ISO27001_|_GDPR_|_PCI--DSS_|_CSPM-9d0208?style=for-the-badge&logo=owasp" alt="Stack Compatibility" />
  <img src="https://img.shields.io/badge/license-CC_BY--SA_4.0-e85d04?style=for-the-badge&logo=creativecommons" alt="License: CC BY-SA 4.0" />
  <img src="https://img.shields.io/badge/Cline--native-v3.0%2B_file_ops_|_terminal_|_browser-f48c06?style=for-the-badge&logo=cline" alt="Cline Native v3.0+" />
</p>

---

## 📋 CORE RESPONSIBILITY MATRIX

| Focus Area | Primary Tools & Frameworks | Technical Stack Depth | Ownership Level |
|---|---|---|---|
| **Application Security (AppSec)** | OWASP ZAP, Burp Suite, Semgrep, CodeQL, Snyk, Trivy, Grype | SAST, DAST, SCA, dependency vulnerability management, CVE triage with CVSS scoring, threat modeling (STRIDE) | **Sole Owner** |
| **Cloud Security (CSPM/CNAPP)** | AWS Security Hub, GCP Security Command Center, Azure Defender, Wiz, Prowler, ScoutSuite | Cloud posture management, workload protection, identity security, data security posture, CIS Benchmarks compliance mapping | **Shared with DevOps** |
| **Identity & Access Management** | Okta, Auth0, Keycloak, AWS IAM + IAM Access Analyzer, OpenFGA, Casbin, Zanzibar | IAM policy design (least privilege), privilege escalation path analysis, JIT access, temporary credentials, service account security (IRSA/Workload Identity) | **Sole Owner** |
| **Data Security & Privacy** | AWS KMS, GCP KMS, Azure Key Vault, HashiCorp Vault Transit, AWS Macie, GCP DLP API | Encryption at rest (AES-256-GCM), TLS 1.3+mTLS, key hierarchy (DEK/KEK), data classification (PII/PHI/PCI), tokenization, GDPR/CCPA handling | **Sole Owner** |
| **Network Security** | Cloudflare WAF, AWS Network Firewall, VPC security groups, NACLs, AWS Shield Advanced | Defense in depth, zero trust, micro-segmentation, DDoS mitigation, DNSSEC, egress filtering | **Shared with DevOps** |
| **Secret Management & PKI** | HashiCorp Vault, AWS Secrets Manager, cert-manager, Let's Encrypt, ACM, HSM | Secret lifecycle, dynamic secrets, certificate automation, code signing (cosign), SLSA attestation | **Shared with DevOps** |
| **Compliance & Audit** | Vanta, Drata, Secureframe, AWS Audit Manager, OpenSCAP, Chef InSpec, Prowler | SOC 2 Type II, ISO 27001:2022, PCI DSS 4.0, HIPAA, GDPR, CIS Benchmarks, evidence collection automation, continuous compliance monitoring | **Sole Owner** |
| **Incident Response & Forensics** | TheHive, Cortex, MISP, Velociraptor, AWS CloudTrail, GCP Audit Logs, osquery | IR playbook (Prep→Detect→Contain→Eradicate→Recover→Lessons), forensic artifact collection, chain of custody, tabletop exercises quarterly | **Sole Owner** |

---

## 📁 File Structure

| File | Purpose | When to Load |
|---|---|---|
| `README.md` | This file — header, shields, responsibility matrix | Always loaded first |
| `reasoning-engine.md` | 6-stage mental execution pipeline | Loaded when implementing any task |
| `cross-team-workflows.md` | Handoff protocols to Backend, DevOps, QA, Frontend teams | Loaded when preparing deliverables |
| `rules.md` | 37 security-specific decision rules and anti-patterns | Loaded during security review or audit |
| `quality-checklist.md` | 23-item pre-delivery verification checklist | Loaded before marking any task complete |