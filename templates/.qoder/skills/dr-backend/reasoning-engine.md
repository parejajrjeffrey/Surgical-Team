# 🧠 THE REASONING ENGINE — Backend & API Engineering

## Mental Execution Flow

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                          BACKEND SKILL REASONING PIPELINE                                │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│  STEP 0: CONTEXT INGESTION                                                              │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  read_file() all existing: package.json / go.mod / Cargo.toml / pyproject.toml │      │
│  │  list_code_definition_names() on: routes/, controllers/, services/, models/,   │      │
│  │  middlewares/, repositories/, migrations/                                       │      │
│  │  search_files() for: "TODO|FIXME|HACK|XXX|@deprecated|console\\.(log|error)"   │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 1: SPEC-FIRST GATE                                                                │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  Does an OpenAPI / Protobuf / AsyncAPI / GraphQL schema exist?                  │      │
│  │    YES → Validate schema against linter (spectral, buf breaking, graphql-insp)  │      │
│  │    NO  → GENERATE spec FIRST before any implementation code                     │      │
│  │  Write schema to: specs/<service>-openapi.yaml or protos/<service>/             │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 2: DATA MODEL AUDIT                                                               │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  Read all migration files. For each entity:                                     │      │
│  │    ▸ Enumerate all columns, types, constraints, defaults, nullable flags        │      │
│  │    ▸ Check: Every FK has an index (EXPLAIN output must show Index Scan)         │      │
│  │    ▸ Check: No VARCHAR without length limit unless justified (PostgreSQL TEXT)  │      │
│  │    ▸ Check: Every table has created_at, updated_at (and deleted_at if soft-del) │      │
│  │    ▸ Check: UUIDv7 or ULID for PKs (not auto-increment for exposed IDs)         │      │
│  │    ▸ Verify: Migration is REVERSIBLE with a down() that doesn't lose data       │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 3: ENDPOINT IMPLEMENTATION                                                        │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  For every route handler:                                                       │      │
│  │    ▸ Input validation MUST execute BEFORE any business logic (Joi, Zod,        │      │
│  │      class-validator, Pydantic, go-playground/validator)                        │      │
│  │    ▸ Every mutating endpoint MUST accept and validate Idempotency-Key           │      │
│  │    ▸ All DB queries MUST go through a repository/DAO layer — never raw SQL      │      │
│  │      in controller (except analytics/aggregation)                               │      │
│  │    ▸ Transaction boundaries must be explicit: BEGIN → work → COMMIT/ROLLBACK    │      │
│  │    ▸ All errors output through a centralized error handler producing:           │      │
│  │      { "error": { "code": "RESOURCE_NOT_FOUND", "message": "...",              │      │
│  │        "request_id": "uuid", "timestamp": "ISO8601" } }                         │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 4: CONCURRENCY & RESILIENCE AUDIT                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  For every state-mutating operation:                                            │      │
│  │    ▸ Does this operation touch >1 service? If yes → Saga or Outbox required     │      │
│  │    ▸ Is there a SELECT … FOR UPDATE for pessimistic locking on critical paths?  │      │
│  │    ▸ Is there optimistic concurrency (version column / etag) where appropriate?  │      │
│  │    ▸ Are external calls wrapped in circuit breakers with fallbacks defined?      │      │
│  │    ▸ Are all background jobs idempotent? (Job ID as idempotency key)            │      │
│  │    ▸ Is there a dead-letter queue with alerting for poison messages?            │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 5: SECURITY HARDENING                                                              │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Every endpoint: Verify authN middleware is applied (no anonymous unless      │      │
│  │    explicitly allowed in spec)                                                  │      │
│  │  ▸ Every endpoint: Verify authZ check (RBAC/ABAC) — not just "is logged in"    │      │
│  │  ▸ Every SQL query: Parameterized/bound — search for string concatenation       │      │
│  │  ▸ Every response: Check for PII/secret leakage — no internal IDs, stack        │      │
│  │    traces, DB errors, env vars, IPs, internal hostnames in production responses  │      │
│  │  ▸ Every file upload: MIME type validation by magic bytes, not extension;       │      │
│  │    size cap, virus scanning hook, storage outside webroot                        │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 6: PERFORMANCE GATE                                                                │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Add EXPLAIN ANALYZE to every new query in PR description                     │      │
│  │  ▸ All list endpoints MUST have pagination (cursor-based > offset-based)         │      │
│  │  ▸ All list endpoints MUST have server-enforced max page size (default: 100)    │      │
│  │  ▸ N+1 detection: scan for loops containing DB calls — use eager loading or      │      │
│  │    DataLoader batching                                                          │      │
│  │  ▸ Connection pool sizing: pool_max = (core_count * 2) + effective_spindle_count│      │
│  │  ▸ Set statement_timeout (PostgreSQL) or max_execution_time (MySQL) per-query   │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                         │                                                │
│                                         ▼                                                │
│  STEP 7: CROSS-TEAM HANDOFF PREPARATION                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────┐      │
│  │  ▸ Generate/update: specs/<service>-openapi.yaml → commit to shared specs repo  │      │
│  │  ▸ Generate/update: contracts/ directory with JSON schema for all events        │      │
│  │  ▸ Update: .env.example with ALL new env vars (never .env itself)               │      │
│  │  ▸ Document: BREAKING change migration steps in CHANGELOG.md under [BREAKING]   │      │
│  │  ▸ Tag: QA handoff artifacts with @qa-notify in commit message                  │      │
│  └───────────────────────────────────────────────────────────────────────────────┘      │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘