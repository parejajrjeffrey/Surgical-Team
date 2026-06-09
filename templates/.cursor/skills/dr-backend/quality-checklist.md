# ✅ PRE-DELIVERY QUALITY CHECKLIST — Backend & API Engineering

## Before marking ANY task as complete, verify:

- [ ] **OpenAPI/Protobuf spec is up-to-date** — run `spectral lint specs/*.yaml` → 0 errors, 0 warnings
- [ ] **Every FK column has a covering index** — `EXPLAIN` output for all JOIN queries shows `Index Scan` only, no `Seq Scan`
- [ ] **All mutating endpoints enforce Idempotency-Key** — curl test with same key twice returns identical response, single side-effect
- [ ] **Centralized error handler produces consistent envelope** — every error path returns `{"error":{"code":"...","message":"...","request_id":"...","timestamp":"..."}}`
- [ ] **No secrets/PII in logs or responses** — grep logs for `password|token|secret|ssn|credit_card|authorization` → 0 matches
- [ ] **All SQL queries are parameterized** — regex search for string interpolation in queries → 0 matches
- [ ] **Rate limiting headers on all endpoints** — `RateLimit-Limit`, `RateLimit-Remaining`, `RateLimit-Reset` present in every response
- [ ] **Pagination enforced on all list endpoints** — `?limit=99999999` returns ≤ server max (e.g., 100) with `hasMore` indicator
- [ ] **Circuit breakers configured** — every external service call has a circuit breaker with fallback defined
- [ ] **Outbox pattern for transactional side-effects** — no email/push/webhook calls inside DB transaction boundaries
- [ ] **Migration has reversible down()** — `migrate:rollback` succeeds in CI without data loss or manual intervention
- [ ] **Datetimes are UTC with timezone** — all DB columns `TIMESTAMPTZ`, all API outputs ISO 8601 with `Z` suffix
- [ ] **Graceful shutdown handles SIGTERM** — `kill -TERM <pid>` results in clean shutdown within 30 seconds, no dropped requests
- [ ] **Health endpoint reflects real dependency status** — `GET /health` → 200 only when DB + Redis + MQ all pass connectivity checks
- [ ] **Monetary values stored as integers** — no FLOAT/DOUBLE in any `amount`/`price`/`balance` column or API field
- [ ] **Multi-tenant RLS enabled** — `EXPLAIN SELECT * FROM orders` shows `Filter: (tenant_id = ...)` pushed down by RLS policy
- [ ] **GraphQL maxDepth/maxComplexity configured** (if applicable) — deeply nested query returns error, not success
- [ ] **No N+1 queries detected** — automated scanner or manual review of all loop bodies confirms no DB calls inside loops
- [ ] **Cache keys are namespaced and versioned** — all `cache.set/get/del` calls use key format `v{N}:{service}:{entity}:{id}:{hash}`
- [ ] **Trace context propagated** — all outbound HTTP/gRPC calls include `traceparent` header with current span context
- [ ] **README/CHANGELOG updated** — breaking changes documented under `## [BREAKING]` with migration steps
- [ ] **Cross-team handoff artifacts generated** — OpenAPI spec committed, event schemas in `contracts/`, `.env.example` updated
- [ ] **Integration tests pass** — `npm test` / `go test ./...` / `pytest` → all green, including idempotency and rate-limiting tests