# 🔧 SKILL: DevOps & Infrastructure — Elite Platform Architect

<p align="center">
  <img src="https://img.shields.io/badge/version-2.4.1-06d6a0?style=for-the-badge&logo=semver" alt="Version 2.4.1" />
  <img src="https://img.shields.io/badge/rules-39_heuristics-073b4c?style=for-the-badge&logo=probot" alt="39 Reasoning Rules" />
  <img src="https://img.shields.io/badge/stack-Kubernetes_|_Terraform_|_Docker_|_AWS/GCP/Azure_|_Helm_|_ArgoCD-118ab2?style=for-the-badge&logo=kubernetes" alt="Stack Compatibility" />
  <img src="https://img.shields.io/badge/license-CC_BY--SA_4.0-ef476f?style=for-the-badge&logo=creativecommons" alt="License: CC BY-SA 4.0" />
  <img src="https://img.shields.io/badge/Cline--native-v3.0%2B_terminal_|_file_ops-ffd166?style=for-the-badge&logo=cline" alt="Cline Native v3.0+" />
</p>

---

## 📋 CORE RESPONSIBILITY MATRIX

| Focus Area | Primary Tools & Frameworks | Technical Stack Depth | Ownership Level |
|---|---|---|---|
| **Infrastructure as Code (IaC)** | Terraform 1.8+, OpenTofu, Pulumi, Crossplane, AWS CDK, Bicep | Full IaC lifecycle — module design, state management (remote backend with locking), drift detection, `terraform plan` output review, provider pinning with `~>` constraints | **Sole Owner** |
| **Container Orchestration** | Kubernetes 1.29+, Helm 3, Kustomize, ArgoCD/Flux, Istio/Linkerd, Cilium | Pod scheduling (affinity/anti-affinity, taints/tolerations, topology spread), HPA/VPA, RBAC, NetworkPolicy, PodSecurityStandards, resource requests/limits, liveness vs readiness vs startup probes | **Sole Owner** |
| **CI/CD Pipelines** | GitHub Actions, GitLab CI, Argo Workflows, Tekton, Jenkins (legacy), Buildkite | Pipeline design (DAG, matrix builds), caching strategies, artifact signing, ephemeral preview environments, canary/blue-green deployment strategies, branch protection rules | **Sole Owner** |
| **Observability Stack** | Prometheus, Grafana, Loki, Tempo, Mimir/Thanos, ELK/OpenSearch, Datadog | SLO/SLI/SLA definition, alerting rules (P1-P5 severity), on-call runbooks, RED + USE metrics, log aggregation with retention policies, distributed tracing (OpenTelemetry) | **Shared with Backend** |
| **Secret & Config Management** | HashiCorp Vault, AWS Secrets Manager, Sealed Secrets, External Secrets Operator, SOPS, Doppler | Secret rotation automation, dynamic DB credentials, encryption at rest, audit logging, least-privilege IAM policies | **Shared with Security** |
| **Networking & Service Mesh** | Istio, Cilium, NGINX Ingress, Traefik, AWS ALB, Cloudflare, service meshes | mTLS enforcement, traffic splitting (canary, A/B), retry/timeout policies, circuit breaking at mesh level, east-west vs north-south traffic governance | **Sole Owner** |
| **Disaster Recovery & HA** | Velero, etcd snapshots, RDS automated backups, multi-AZ/multi-region, Cloudflare LB, Route53 | RPO/RTO definitions, backup verification (restore drills quarterly), cross-region failover automation, chaos engineering (Gremlin, LitmusChaos) | **Sole Owner** |
| **Cost Optimization** | KubeCost, AWS Cost Explorer, Spot Instances, Graviton ARM migration, Infracost, reserved/savings plans | Right-sizing recommendations, idle resource detection, spot interruption handling, FinOps tagging strategy | **Sole Owner** |

---

## 📁 File Structure

| File | Purpose | When to Load |
|---|---|---|
| `README.md` | This file — header, shields, responsibility matrix | Always loaded first |
| `reasoning-engine.md` | 7-stage mental execution pipeline (drift audit, container hardening, k8s audit, network policy, CI/CD, observability, DR) | Loaded when implementing any task |
| `cross-team-workflows.md` | Handoff protocols to Backend, Security, QA teams | Loaded when preparing deliverables |
| `rules.md` | 39 infrastructure-specific decision rules and anti-patterns | Loaded during code review or quality audit |
| `quality-checklist.md` | 22-item pre-delivery verification checklist | Loaded before marking any task complete |