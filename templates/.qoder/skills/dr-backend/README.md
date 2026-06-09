# 🧬 SKILL: Backend & API Engineering — Elite System Architect

<p align="center">
  <img src="https://img.shields.io/badge/version-2.4.1-e63946?style=for-the-badge&logo=semver" alt="Version 2.4.1" />
  <img src="https://img.shields.io/badge/rules-41_heuristics-1d3557?style=for-the-badge&logo=probot" alt="41 Reasoning Rules" />
  <img src="https://img.shields.io/badge/stack-Node.js_|_Go_|_Python_|_Rust_|_C%23_|_Java-2a9d8f?style=for-the-badge&logo=backend" alt="Stack Compatibility" />
  <img src="https://img.shields.io/badge/license-CC_BY--SA_4.0-f4a261?style=for-the-badge&logo=creativecommons" alt="License: CC BY-SA 4.0" />
  <img src="https://img.shields.io/badge/Cline--native-v3.0%2B_optimized-9b5de5?style=for-the-badge&logo=cline" alt="Cline Native v3.0+" />
</p>

---

## 📋 CORE RESPONSIBILITY MATRIX

| Focus Area | Primary Tools & Frameworks | Technical Stack Depth | Ownership Level |
|---|---|---|---|
| **API Design & Lifecycle** | OpenAPI 3.1, gRPC/Protobuf, GraphQL (Apollo/Relay), AsyncAPI, JSON:API | Full API lifecycle — spec-first design, versioning, deprecation, sunset headers | **Sole Owner** |
| **Database Architecture** | PostgreSQL 16+, MySQL 8.4, MongoDB 7+, ClickHouse, Redis/Valkey, ScyllaDB | Schema design, migration strategy (declarative > imperative), indexing, query optimization, connection pooling, read replicas, sharding keys | **Sole Owner** |
| **Message Queues & Streams** | Apache Kafka, NATS JetStream, RabbitMQ, AWS SQS/SNS, Redis Streams | Event schema evolution (Avro/Protobuf), dead-letter queues, exactly-once semantics, consumer group rebalancing | **Shared with DevOps** |
| **Caching Strategy** | Redis, Memcached, CDN edge-cache, in-app LRU/TTL | Cache invalidation patterns (write-through, write-behind, cache-aside), stampede protection, hot-key mitigation | **Sole Owner** |
| **AuthN / AuthZ** | OAuth 2.1, OIDC, JWK/JWT/JWE, PASETO, RBAC/ABAC/ReBAC, OpenFGA, Casbin, Zanzibar | Token lifecycle management, refresh rotation, token binding, fine-grained permissions, multi-tenancy isolation | **Shared with Security** |
| **Observability** | OpenTelemetry, Prometheus, Grafana, Jaeger/Tempo, structured logging (OTLP) | RED metrics (Rate/Errors/Duration), cardinality budgeting, tail-sampling, SLO/SLI definition | **Shared with DevOps** |
| **Idempotency & Resilience** | Idempotency-Key HTTP header, circuit breaker (CB), bulkhead, retry with exponential backoff + jitter, rate limiting (token bucket, sliding window) | Distributed transactions (Saga pattern, Outbox pattern), compensating transactions, idempotency key TTL and garbage collection | **Sole Owner** |
| **Rate Limiting & Throttling** | Kong, Envoy, NGINX, custom middleware | Token-bucket, sliding-window-log, GCRA (Generic Cell Rate Algorithm), per-consumer/per-endpoint/per-ip tiering, 429 response with `Retry-After` and `RateLimit-*` headers | **Sole Owner** |

---

## 📁 File Structure

| File | Purpose | When to Load |
|---|---|---|
| `README.md` | This file — header, shields, responsibility matrix | Always loaded first |
| `reasoning-engine.md` | 7-stage mental execution pipeline | Loaded when implementing any task |
| `cross-team-workflows.md` | Handoff protocols to Frontend, DevOps, QA, Security teams | Loaded when preparing deliverables |
| `rules.md` | 41 industry-specific decision rules and anti-patterns | Loaded during code review or quality audit |
| `quality-checklist.md` | 23-item pre-delivery verification checklist | Loaded before marking any task complete |

---

<p align="center">
  <em>⚡ Skill Loaded: Backend & API Engineering — Elite System Architect</em><br/>
  <em>Reasoning Pipeline: 7-stage gate | Rules Active: 41 | Cross-Team Handoffs: 5 workflows</em>
</p>