# 🧠 THE REASONING ENGINE — Data Engineering & Analytics

## Mental Execution Flow

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                          DATA ENGINEERING SKILL REASONING PIPELINE                        │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│  STEP 0: DATA LANDSCAPE DISCOVERY                                                       │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  read_file() all: dbt_project.yml, packages.yml, profiles.yml,                │      │
│  │    airflow/dags/*.py, schema.yml, metrics/*.yml,                              │      │
│  │    great_expectations/great_expectations.yml                                   │      │
│  │  list_code_definition_names() on: models/, macros/, analyses/, seeds/,        │      │
│  │    snapshots/, tests/, metrics/, dags/, tasks/, sensors/                       │      │
│  │  execute_command(): "dbt ls --resource-type model", "dbt test --select        │      │
│  │    source:*", "airflow dags list", "dbt run --select state:modified --dry-run"│      │
│  │  search_files() for: "SELECT \*|INSERT INTO|CREATE TABLE|                     │      │
│  │    TODO|FIXME|HACK|@deprecated|CROSS JOIN"                                    │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 1: DATA LINEAGE & MODELING AUDIT                                                   │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ dbt docs generate → review DAG (lineage graph)                              │      │
│  │  ▸ Materialization: staging→view, intermediate→ephemeral, core→table/incremental│      │
│  │  ▸ Every model has unique PK test + not_null required columns                  │      │
│  │  ▸ Every model + column has description for data catalog                       │      │
│  │  ▸ No SELECT * in production models (explicit column list)                     │      │
│  │  ▸ Incremental models have unique_key + handle late-arriving facts            │      │
│  │  ▸ JOIN keys are same type (no implicit VARCHAR↔INTEGER cast)                 │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 2: PIPELINE RELIABILITY & IDEMPOTENCY AUDIT                                        │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Every task/DAG is idempotent — MERGE/UPSERT or DELETE+INSERT atomic swap    │      │
│  │  ▸ Backfill strategy defined; no double-count or missed data                   │      │
│  │  ▸ Retries: exponential backoff with max limit, no infinite loops               │      │
│  │  ▸ Every pipeline has SLA/SLO with alerting (P1-P4)                            │      │
│  │  ▸ Dependencies explicit (task_a >> task_b), not timing-based                 │      │
│  │  ▸ Data validated AFTER each transformation stage (shift-left quality)         │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 3: DATA QUALITY ENFORCEMENT (3 LEVELS)                                            │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  L1—Freshness&Volume: source freshness window, row count within 3σ, null rates │      │
│  │  L2—Integrity&Uniqueness: PK uniqueness, referential integrity, accepted values│      │
│  │  L3—Distribution&Anomaly: distribution drift (K-S test), anomaly detection,       │
│  │    schema change detection                                                      │      │
│  │  For each failure: severity WARN (continue)/ERROR (stop, alert), documented runbook│      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 4: QUERY PERFORMANCE OPTIMIZATION                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ EXPLAIN/profiler → full scans→check partitioning, spill→more memory,       │      │
│  │    skew→broadcast/salted JOIN, cartesian→verify ON clause                      │      │
│  │  ▸ Partition by most common filter (date); cluster by high-cardinality WHERE cols│      │
│  │  ▸ Snowflake: cluster on filter cols; BigQuery: DATE(timestamp) partition      │      │
│  │  ▸ ClickHouse: ORDER BY for merge tree, SummingMergeTree for pre-aggregates    │      │
│  │  ▸ BI layer: use extracts/aggregate tables for dashboards >10s load time       │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 5: DATA GOVERNANCE & SECURITY                                                     │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ All tables/views in data catalog with owner, description, lineage           │      │
│  │  ▸ PII columns tagged + masked/hashed/encrypted in non-production              │      │
│  │  ▸ Column/row-level access controls for sensitive data                         │      │
│  │  ▸ Access audit logging enabled — who queried what, when, from which tool      │      │
│  │  ▸ Retention policies enforced via lifecycle policies                          │      │
│  │  ▸ No production data in dev/staging — synthetic data or sampled with PII masking│      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 6: CROSS-TEAM HANDOFF                                                               │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ dbt docs site with lineage graph, column descriptions, test results         │      │
│  │  ▸ Data catalog entries for all new models (DataHub/Amundsen)                  │      │
│  │  ▸ Event schemas in schema registry → Backend handoff                          │      │
│  │  ▸ Metric definitions in semantic layer → Product/Analytics handoff             │      │
│  │  ▸ SLA expectations for data freshness per dashboard/model                     │      │
│  │  ▸ Runbook for data quality alerts                                             │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘