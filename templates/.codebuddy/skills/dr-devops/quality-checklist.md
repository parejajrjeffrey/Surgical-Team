# ✅ PRE-DELIVERY QUALITY CHECKLIST — DevOps & Infrastructure

## Before marking ANY task as complete, verify:

- [ ] **`terraform plan` returns 0 changes** (infrastructure matches code) — `terraform plan -detailed-exitcode` exits 0
- [ ] **All container images referenced by SHA256 digest** — `grep -r ':latest\|:[0-9]\+$' kubernetes/ charts/` returns 0 matches
- [ ] **Vulnerability scans pass** — `trivy image <image>` shows 0 CRITICAL, 0 HIGH; `checkov -d terraform/` shows 0 FAILED
- [ ] **Secrets scan clean** — `gitleaks detect --source .` or `truffleHog filesystem .` returns 0 findings
- [ ] **All Kubernetes workloads have resource requests AND limits** — `kubectl get pods -o json | jq '[.items[].spec.containers[].resources]'` shows no empty `{}`
- [ ] **All containers run as non-root** — `kubectl get pods -o json | jq '[.items[].spec.containers[].securityContext.runAsNonRoot]'` all `true`
- [ ] **NetworkPolicy default-deny exists** in every namespace — `kubectl get networkpolicy --all-namespaces` shows policies for all production namespaces
- [ ] **PDB set for all Deployments with ≥2 replicas** — `kubectl get pdb --all-namespaces` matches production Deployments
- [ ] **Probes correctly configured** — liveness≠readiness endpoints; startup probe for slow-start apps; failure thresholds ≥3
- [ ] **TLS enforced** — Ingress/Gateway has TLS block with cert-manager annotation; mesh PeerAuthentication is STRICT
- [ ] **Logs are structured JSON** — spot-check `kubectl logs <pod>` → parseable JSON lines, not unformatted text
- [ ] **Alert rules have runbook links** — every alert in Prometheus/Alertmanager has `runbook_url` annotation
- [ ] **SLOs defined and tracked** — Grafana/GCP/AWS dashboard shows error budget for each critical service
- [ ] **Database backups <24 hours old** — check cloud console or Velero schedules; restore tested in last 90 days
- [ ] **IAM roles use least privilege** — IAM Access Analyzer shows 0 findings; no `*` in Action + Resource unless fully justified
- [ ] **Cost estimation in CI** — Infracost comment on PR shows `$ diff`; cost increase approved if significant
- [ ] **Graceful shutdown tested** — `kubectl delete pod <name>` → no 5xx errors in monitoring during termination
- [ ] **CI/CD pipelines have all mandatory stages** — lint → test → build → scan → deploy → verify present and passing
- [ ] **Infrastructure is reproducible** — `terraform apply` in sandbox account recreates entire stack from scratch
- [ ] **Documentation present** — every Terraform module and Helm chart has README with usage, inputs, outputs, examples
- [ ] **Branch protection enabled** on all infrastructure repos — require PR, approvals, status checks, linear history
- [ ] **WAF in blocking mode** on all public endpoints — OWASP Top 10 rules active, not just `count`