# 🧠 THE REASONING ENGINE — DevOps & Infrastructure

## Mental Execution Flow

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                          DEVOPS SKILL REASONING PIPELINE                                 │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│  STEP 0: INFRASTRUCTURE TOPOLOGY DISCOVERY                                              │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  execute_command(): "terraform providers", "kubectl api-resources",            │      │
│  │  "helm list --all-namespaces", "aws sts get-caller-identity"                   │      │
│  │  read_file() all: *.tf, *.tfvars, Chart.yaml, Dockerfile*, Makefile,           │      │
│  │  .github/workflows/*.yml, .gitlab-ci.yml, argocd/ Application CRDs             │      │
│  │  list_code_definition_names() on: terraform/, charts/, pipelines/, policies/   │      │
│  │  search_files() for: "TODO|FIXME|HACK|XXX|@deprecated|latest(?!.*digest)"     │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 1: DRIFT & STATE AUDIT                                                            │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Run: terraform plan -detailed-exitcode → MUST return 0 (no changes)         │      │
│  │  ▸ Run: terraform state list → verify no orphaned resources                    │      │
│  │  ▸ Check: .terraform.lock.hcl is committed (provider hashes pinned)            │      │
│  │  ▸ Check: remote state backend has versioning + locking enabled (S3+DynamoDB,  │      │
│  │    GCS, Azure Blob, Terraform Cloud)                                           │      │
│  │  ▸ Check: No manual changes in cloud console — all resources must be in TF     │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 2: CONTAINER IMAGE COMPLIANCE AUDIT                                               │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  For every Dockerfile in the repo:                                             │      │
│  │    ▸ Image must use a pinned digest SHA256, not a mutable tag (:latest, :3)    │      │
│  │    ▸ Run: trivy image → 0 CRITICAL, 0 HIGH vulns                               │      │
│  │    ▸ Verify: USER is non-root (UID ≥ 10000), no CAP_SYS_ADMIN                  │      │
│  │    ▸ Verify: read-only root filesystem (readOnlyRootFilesystem: true)          │      │
│  │    ▸ Verify: Multi-stage build — final image has NO build tools, compilers,    │      │
│  │      package manager cache, or dev dependencies                                │      │
│  │    ▸ Verify: .dockerignore prevents .git, .env, node_modules, secrets from     │      │
│  │      being copied into build context                                           │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 3: KUBERNETES WORKLOAD HARDENING                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  For every Deployment/StatefulSet/DaemonSet:                                   │      │
│  │    ▸ Resources: requests = limits (Guaranteed QoS) for production; at minimum  │      │
│  │      requests set to 50-70% of observed steady-state usage                     │      │
│  │    ▸ Probes: liveness (checks restart-worthy conditions, p50+90s initialDelay),│      │
│  │      readiness (checks if ready for traffic, p50+30s initialDelay),            │      │
│  │      startup (for slow-start apps, replaces liveness during startup)           │      │
│  │    ▸ SecurityContext: runAsNonRoot: true, allowPrivilegeEscalation: false,     │      │
│  │      seccompProfile: RuntimeDefault, capabilities: drop: [ALL]                 │      │
│  │    ▸ PodDisruptionBudget: minAvailable ≥ 1 or maxUnavailable ≤ floor(N*0.25)  │      │
│  │    ▸ TopologySpreadConstraints: maxSkew=1 across topology.kubernetes.io/zone   │      │
│  │    ▸ Verify: No hostPath volumes, no hostNetwork: true, no hostPID: true       │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 4: NETWORK POLICY & SERVICE MESH AUDIT                                            │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Default-deny NetworkPolicy for every namespace (ingress + egress)            │      │
│  │  ▸ Explicit allow-rules only for known communication paths                      │      │
│  │  ▸ If Istio/Linkerd: mTLS STRICT mode, AuthorizationPolicy per service         │      │
│  │  ▸ Ingress: TLS 1.3 minimum, cert-manager auto-renewal                         │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 5: CI/CD PIPELINE AUDIT                                                           │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Pipeline must have: lint → test → build → scan → deploy → verify stages      │      │
│  │  ▸ Scan stage: Trivy (vulns), checkov (IaC), gitleaks (secrets)                │      │
│  │  ▸ Deploy: Canary (10%→50%→100%) or Blue/Green with automated verification      │      │
│  │  ▸ Pipeline artifacts must be signed and attested (SLSA Level 3+)              │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 6: OBSERVABILITY & ALERTING COVERAGE AUDIT                                        │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Every service MUST expose /metrics (Prometheus format) with RED metrics      │      │
│  │  ▸ Alert rules: P1 (down), P2 (SLO burn >14.4x), P3 (p99 >2× baseline),       │      │
│  │    P4 (disk>85%/mem>90%), P5 (cert <14 days)                                   │      │
│  │  ▸ Every alert rule MUST have a runbook link in annotations                     │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 7: DISASTER RECOVERY & BACKUP VERIFICATION                                        │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Verify: Database backups running, last backup <24 hours old                  │      │
│  │  ▸ Verify: Backup restoration tested within last 90 days                        │      │
│  │  ▸ Verify: Multi-AZ deployment for all stateful services                        │      │
│  │  ▸ Verify: Infrastructure can be fully recreated from IaC only                  │      │
│  │  ▸ Define: RPO ≤ 1 hour, RTO ≤ 4 hours                                         │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘