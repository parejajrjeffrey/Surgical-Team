# ✅ PRE-DELIVERY QUALITY CHECKLIST — Data Engineering & Analytics

## Before marking ANY task as complete, verify:

- [ ] **dbt models have tests** — every model has `unique` on PK and `not_null` on required columns; `dbt test` passes with 0 failures
- [ ] **No `SELECT *` in production models** — `grep -r "SELECT \*" models/` returns 0 matches in non-analysis models
- [ ] **Incremental models handle late arrivals** — `is_incremental()` includes a lookback window; `unique_key` defined for MERGE behavior
- [ ] **Pipeline idempotency verified** — running the same pipeline twice with same input produces identical output (row counts match, no duplicates)
- [ ] **Data quality checks at each stage** — freshness, uniqueness, not_null, and accepted_values checks present and passing
- [ ] **PII classified and masked** — no raw PII in non-production environments; data catalog has classification tags
- [ ] **Source freshness monitored** — every source has `freshness` config in dbt or equivalent; alerts configured for stale sources
- [ ] **Partitioning/clustering matches query patterns** — EXPLAIN shows partition pruning or cluster filtering for top-10 queries
- [ ] **JOIN keys are same type** — no implicit casts in JOIN conditions; all FK-PK relationships have matching data types
- [ ] **Documentation for consumers** — model descriptions explain business meaning; column descriptions include examples; data catalog searchable
- [ ] **Schema evolution compatible** — new fields have defaults; no field removals or type changes without major version bump and migration window
- [ ] **Backfill procedure documented and tested** — runbook exists; backfill tested in staging; idempotent; rollback plan defined
- [ ] **Dashboards load <5s** — top-10 dashboards have query performance within SLA; aggregate tables or materialized views used where needed
- [ ] **Cost budgets configured** — per-query or per-user cost limits; max slots/nodes for Spark/Databricks; billing alerts ≥80% of budget
- [ ] **Data reconciled with source** — row counts and key financial totals matched between warehouse and source within 0.01% tolerance
- [ ] **DLQ monitored and alertable** — dead-letter queues have depth alerts; replay capability tested; no silent message drops
- [ ] **All infrastructure in git** — dbt project, DAGs, Spark jobs, schema definitions all version-controlled; no production UI edits
- [ ] **CI/CD for data changes** — PRs run `dbt build --select state:modified+` or equivalent; failing tests block merge
- [ ] **Data catalog populated** — all models have owner, description, freshness, lineage populated in DataHub/Amundsen/Alation
- [ ] **Retention policies enforced** — lifecycle policies/partition expiry configured; historical data archived to cold storage; GDPR deletion process documented and tested

---

<p align="center">
  <em>⚡ Skill Loaded: Data Engineering & Analytics — Elite Pipeline Architect</em><br/>
  <em>Reasoning Pipeline: 6-stage gate | Rules Active: 34 | Cross-Team Handoffs: 4 workflows</em>
</p>