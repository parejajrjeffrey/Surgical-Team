# 📊 SKILL: Data Engineering & Analytics — Elite Pipeline Architect

<p align="center">
  <img src="https://img.shields.io/badge/version-2.4.1-2ec4b6?style=for-the-badge&logo=semver" alt="Version 2.4.1" />
  <img src="https://img.shields.io/badge/rules-34_heuristics-011627?style=for-the-badge&logo=probot" alt="34 Reasoning Rules" />
  <img src="https://img.shields.io/badge/stack-dbt_|_Airflow_|_Spark_|_Snowflake_|_BigQuery_|_ClickHouse_|_Kafka-20a4f3?style=for-the-badge&logo=apachespark" alt="Stack Compatibility" />
  <img src="https://img.shields.io/badge/license-CC_BY--SA_4.0-ff6b35?style=for-the-badge&logo=creativecommons" alt="License: CC BY-SA 4.0" />
  <img src="https://img.shields.io/badge/Cline--native-v3.0%2B_terminal_|_file_ops_|_SQL-ef476f?style=for-the-badge&logo=cline" alt="Cline Native v3.0+" />
</p>

---

## 📋 CORE RESPONSIBILITY MATRIX

| Focus Area | Primary Tools & Frameworks | Technical Stack Depth | Ownership Level |
|---|---|---|---|
| **Data Modeling & Transformation** | dbt Core/Cloud, SQLMesh, Dataform, Apache Spark SQL, Polars, DuckDB | Kimball star/snowflake, Data Vault 2.0, OBT, SCD Type 0-7, incremental models, materializations (table/view/incremental/ephemeral), snapshots | **Sole Owner** |
| **ETL/ELT Pipeline Orchestration** | Airflow 2.9+, Prefect, Dagster, Mage, Temporal, AWS Step Functions | DAG design (fan-out/in, branching, dynamic task mapping), idempotent pipelines, data lineage (OpenLineage), backfilling, SLA monitoring | **Sole Owner** |
| **Stream Processing** | Kafka, Flink, Spark Structured Streaming, RisingWave, Materialize | Exactly-once semantics, watermarking, windowing (tumbling/hopping/session), state store management, dead-letter queues, schema registry (Avro/Protobuf, FULL_TRANSITIVE) | **Shared with Backend** |
| **Data Warehousing & Lakehouse** | Snowflake, BigQuery, ClickHouse, Redshift, Databricks, Iceberg, Delta Lake, Hudi | Partitioning/clustering, micro-partition pruning, query optimization, ACID on data lakes, time travel/versioning, zero-copy cloning | **Sole Owner** |
| **Analytics & BI Engineering** | dbt Metrics, Cube, Looker/LookML, Metabase, Lightdash, Superset, Hex, Jupyter | Semantic layer design, metric flow/lineage, self-serve analytics, embedding analytics, scheduled reports, dashboard performance optimization | **Shared with Product** |
| **Data Quality & Observability** | Great Expectations, Soda, dbt tests, Monte Carlo, Anomalo, Elementary, OpenLineage | Freshness SLAs, volume/anomaly detection, schema change detection, null rate monitoring, uniqueness checks, reconciliation | **Sole Owner** |
| **ML Infrastructure & Feature Engineering** | Feast, Tecton, MLflow, Kubeflow, SageMaker, Vertex AI | Feature store (offline/online), feature pipelines (batch+streaming), training/serving skew detection, model registry, data drift monitoring | **Shared with ML Team** |
| **Data Governance & Catalog** | DataHub, Amundsen, Atlan, Alation, Apache Atlas, AWS Glue, Unity Catalog | Data discovery, access control (RBAC at all levels), PII classification, retention/archival policies, GDPR/CCPA handling, data contract enforcement | **Sole Owner** |

---

## 📁 File Structure

| File | Purpose | When to Load |
|---|---|---|
| `README.md` | This file — header, shields, responsibility matrix | Always loaded first |
| `reasoning-engine.md` | 6-stage mental execution pipeline | Loaded when implementing any task |
| `cross-team-workflows.md` | Handoff protocols to Backend, DevOps, Security, Product teams | Loaded when preparing deliverables |
| `rules.md` | 34 data-specific decision rules and anti-patterns | Loaded during code review or pipeline audit |
| `quality-checklist.md` | 22-item pre-delivery verification checklist | Loaded before marking any task complete |