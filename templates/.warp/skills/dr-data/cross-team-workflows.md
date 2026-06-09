# 🔗 INTEGRATED CROSS-TEAM WORKFLOWS — Data Engineering & Analytics

## Workflow 1: Event Schema → Backend Team

```
DATA (this skill)                             BACKEND SKILL
┌─────────────────────────────────┐          ┌───────────────────────────────┐
│ 1. Define event schema for      │          │                               │
│    analytics pipeline:           │          │                               │
│    - Avro/Protobuf schema       │─────────▶│ 2. Implement producer:        │
│    - Schema registry upload     │  PR with │    - Emit event with schema   │
│    - Example event payload      │  schema  │      ID + correct format      │
│    - Field definitions +        │          │    - Register new schema      │
│      business meaning           │          │      version in registry      │
│                                 │          │                               │
│ 3. Build consumer:              │          │ 4. Verify:                    │
│    - dbt source definition      │          │    - Schema compatibility     │
│    - Staging model (view)       │          │      (FULL_TRANSITIVE)        │
│    - Transformation models      │◀─────────│    - Event emitted on        │
│    - Data quality tests         │          │      correct topic/stream     │
│                                 │          │    - Idempotent producer       │
│ 5. Dashboard/metric built on    │          │                               │
│    transformed data              │          │                               │
└─────────────────────────────────┘          └───────────────────────────────┘
```

## Workflow 2: Data Quality Issue → Backend/DevOps Team

```
DATA (this skill)                     BACKEND / DEVOPS SKILL
┌──────────────────────────────┐      ┌────────────────────────────────┐
│ 1. Data quality check fails: │      │                                │
│    - Uniqueness violation    │─────▶│ 2. Investigate root cause:     │
│    - Null rate spike         │ Alert│    - Backend bug               │
│    - Volume anomaly          │      │    - Pipeline lag              │
│    - Freshness delayed       │      │    - Schema change             │
│                              │      │    - Data entry issue          │
│ 3. Impact analysis:          │      │                                │
│    - Which downstream models │      │ 4. Fix root cause + backfill  │
│      are affected?           │      │    affected data               │
│    - Which dashboards?       │      │                                │
│    - Which ML models?        │      │                                │
│ 5. Verify: quality checks    │      │                                │
│    pass after backfill       │      │                                │
└──────────────────────────────┘      └────────────────────────────────┘
```

## Workflow 3: New Metric → Product + Frontend Teams

```
DATA (this skill)               PRODUCT / FRONTEND SKILL
┌──────────────────────────┐    ┌─────────────────────────────────┐
│ 1. Define metric in      │    │                                 │
│    semantic layer:       │───▶│ 2. Consume metric via API:      │
│    - dbt Metrics / Cube  │    │    - Cube/MetricFlow REST API   │
│    - Dimensions           │    │    - Looker Explore             │
│    - Time granularity    │    │    - Metabase question           │
│    - Aggregation type    │    │                                 │
│                          │    │ 3. Build:                       │
│                          │    │    - Dashboard visualization    │
│                          │    │    - Embedded analytics         │
│                          │    │    - Automated report           │
│                          │    │                                 │
│                          │◀───│ 4. Validate: metric values      │
│                          │    │    match expectations,          │
│                          │    │    drill-down works,            │
│                          │    │    time comparisons correct     │
└──────────────────────────┘    └─────────────────────────────────┘
```

## Handoff Artifact Table

| To Team | Artifact | Location | Format |
|---|---|---|---|
| **Backend** | Event schema definition | `schemas/events/<event-name>.avsc` | Avro/Protobuf, registered in schema registry |
| **Backend** | Source data quality requirements | `data-contracts/sources/<source>.yml` | dbt sources config with freshness SLA |
| **Backend** | Data lineage impact report | PR comment or dbt docs | DAG visualization |
| **DevOps** | Pipeline SLA/SLO definitions | Airflow/Dagster DAG tags or `SLA.md` | Markdown: `{dag_id, expected_completion_by}` |
| **DevOps** | Incremental model refresh requirements | `docs/incremental-strategy.md` | Markdown: schedule, unique key, lookback window |
| **Security** | PII classification manifest | `data-catalog/pii-manifest.yml` | YAML: `{table.column, classification, masking_policy}` |
| **Security** | Data access audit requirements | `docs/access-audit.md` | Markdown |
| **Product / Frontend** | Semantic metric definitions | `metrics/<metric-name>.yml` | dbt Metrics or Cube YAML |
| **Product / Frontend** | Dashboard data freshness SLA | `docs/freshness-sla.md` | Per dashboard: `{dashboard, max_data_age, refresh_schedule}` |
| **ML Team** | Feature definitions and serving config | `features/<feature-set>.yml` | Feast/Tecton feature definition YAML |