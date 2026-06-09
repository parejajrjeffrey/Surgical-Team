# 🔗 INTEGRATED CROSS-TEAM WORKFLOWS — Backend & API Engineering

## Workflow 1: API Contract Delivery → Frontend Team

```
BACKEND (this skill)                          FRONTEND UI/UX SKILL
┌────────────────────────────┐                ┌────────────────────────────┐
│ 1. Write/update OpenAPI    │                │                            │
│    spec in specs/ dir      │───────────────▶│ 1. Consume OpenAPI spec    │
│                            │   commit to    │    via openapi-generator   │
│ 2. Run: spectral lint      │   shared repo  │    or @hey-api/openapi-ts  │
│    specs/orders.yaml       │                │                            │
│                            │                │ 2. Generate typed API      │
│ 3. Publish breaking change │                │    client automatically    │
│    warnings in PR with     │                │                            │
│    label: breaking-change  │                │ 3. Flag any endpoints      │
│    with migration guide    │                │    missing response types  │
│                            │                │    (no empty 200 OK)       │
│ 4. Ensure all responses    │                │                            │
│    have JSON Schema        │                │ 4. Build UI components     │
│    definitions — never     │                │    against typed client    │
│    `{}` as response schema │                │                            │
└────────────────────────────┘                └────────────────────────────┘
```

## Workflow 2: Database Change → DevOps & QA

```
BACKEND (this skill)                   DEVOPS SKILL                    QA SKILL
┌──────────────────────┐          ┌──────────────────────┐     ┌──────────────────────┐
│ 1. Create migration  │          │                      │     │                      │
│    with UP and DOWN  │─────────▶│ 2. Review migration   │     │                      │
│                      │  PR tag  │    for:               │     │                      │
│                      │ [db-mig] │    - Lock duration    │     │                      │
│                      │          │    - Backfill scripts │     │                      │
│                      │          │    - Rollback plan    │     │                      │
│                      │          │                      │     │                      │
│                      │          │ 3. Run migration in   │     │                      │
│                      │          │    staging with       │     │                      │
│                      │          │    EXPLAIN output     │────▶│ 4. Run integration   │
│                      │          │    captured in PR     │     │    tests against     │
│                      │          │                      │     │    staged DB schema  │
│                      │          │                      │     │                      │
│                      │          │                      │     │ 5. Verify: data      │
│                      │          │                      │     │    integrity, FK     │
│                      │          │                      │     │    constraints hold  │
└──────────────────────┘          └──────────────────────┘     └──────────────────────┘
```

## Workflow 3: Auth Change → Security Team

```
BACKEND (this skill)                          SECURITY SKILL
┌────────────────────────────────┐           ┌───────────────────────────────┐
│ 1. Add/modify authZ middleware │           │                               │
│    (new permission, new role)  │──────────▶│ 2. Audit: Does new permission │
│                                │  PR tag   │    follow least-privilege?    │
│ 2. Document in PERMISSIONS.md  │ [sec-auth]│                               │
│    the permission matrix       │           │ 3. Verify: No privilege       │
│    (Role × Resource × Action)  │           │    escalation path exists     │
│                                │           │                               │
│ 3. Add integration test that   │           │ 4. Pen-test the new endpoint  │
│    asserts 403 when missing    │           │    for auth bypass (JWT none  │
│    required permission         │           │    alg, claim injection, etc) │
└────────────────────────────────┘           └───────────────────────────────┘
```

## Handoff Artifact Table

| To Team | Artifact | Location | Format |
|---|---|---|---|
| **Frontend** | OpenAPI 3.1 spec | `specs/<service>-openapi.yaml` | YAML with full JSON Schema responses |
| **Frontend** | Mock server config | `mocks/<service>/` | Prism or Mock Service Worker handlers |
| **Frontend** | WebSocket/SSE event catalog | `specs/<service>-asyncapi.yaml` | AsyncAPI 2.6+ |
| **QA** | Idempotency test vectors | `test-vectors/idempotency/<endpoint>.json` | JSON array of {input, expected} |
| **QA** | Rate-limit test spec | `test-vectors/rate-limiting/<service>.yaml` | YAML with thresholds & 429 expectations |
| **DevOps** | Migration lock-estimate | PR description table | Markdown table |
| **DevOps** | Resource requirement delta | PR comment: `@devops-bot estimate` | Bot-parsed format |
| **Security** | Permission change-log | `PERMISSIONS.md` diff | Markdown permission matrix |
| **Data** | New/modified event schemas | `contracts/events/<event-name>.avsc` | Avro or JSON Schema |