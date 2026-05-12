# 05. settings.json + .mcp.json + 훅

> **내가 할 일:** `.claude/settings.json` 안전 기본값, `.mcp.json` 최소 구성, 필요해질 때 훅 추가.

---

## 1. settings.json — 두 가지 패턴

### 패턴 A — 초보자/시연용 (`claude-code-mastery`)

```json
{
  "permissions": {
    "allow": ["Bash"],
    "deny": [],
    "ask": [],
    "defaultMode": "plan"
  },
  "outputStyle": "Explanatory"
}
```

- `defaultMode: "plan"` → 세션이 **Plan 모드로 시작**, 실수로 파일 수정 안 됨.
- `outputStyle: "Explanatory"` → 행위만 하지 않고 설명까지.

### 패턴 B — 작업용 (`claude-nextjs-starters` 의 `settings.local.json`)

```json
{
  "permissions": {
    "allow": [
      "Read", "Bash", "WebFetch", "WebSearch",
      "mcp__ide", "mcp__shadcn", "mcp__playwright", "mcp__sequential-thinking",
      "mcp__shadcn__search_items_in_registries",
      "mcp__context7__resolve-library-id",
      "mcp__context7__get-library-docs"
    ]
  },
  "enableAllProjectMcpServers": true,
  "enabledMcpjsonServers": ["playwright"],
  "hooks": { "Notification": [...], "Stop": [...] }
}
```

- Read·Bash·WebFetch·WebSearch + MCP 함수까지 화이트리스트.
- **Edit·Write 는 allow 에 없음** → 매 수정마다 권한 프롬프트. → 슬래시 커맨드 `allowed-tools` 로 보완.

### 두 패턴의 의미

| 패턴 | 위험도 | 어울리는 시점 |
| --- | --- | --- |
| A (Bash + Plan) | 낮음 | 막 시작 / 데모 |
| B (Read+Bash+MCP, Edit/Write 묻기) | 중간 | 실제 작업 |
| 글로벌 Edit/Write allow | 높음 | **권장 안 함** |

---

## 2. 채호 MBTI 초기 settings.json (제안)

```json
{
  "permissions": {
    "allow": [
      "Read",
      "Bash(git status:*)",
      "Bash(git log:*)",
      "Bash(git diff:*)",
      "Bash(npm:*)",
      "WebFetch",
      "WebSearch"
    ],
    "deny": [],
    "ask": [],
    "defaultMode": "plan"
  },
  "outputStyle": "Explanatory",
  "enableAllProjectMcpServers": true
}
```

**근거:**
- `defaultMode: "plan"` — 매 세션 안전 우선.
- `Read` 글로벌 — 읽기는 위험 없음.
- `Bash` 는 git 조회·npm 만 글로벌. 그 외는 슬래시 커맨드 단위 (→ [04_slash_commands.md](./04_slash_commands.md)).
- `Edit`/`Write` 글로벌 allow 안 함.

### `settings.json` vs `settings.local.json`

| 파일 | 용도 | git 추적 |
| --- | --- | --- |
| `.claude/settings.json` | **팀 공유 기본값** | ✅ 커밋 |
| `.claude/settings.local.json` | **개인 오버라이드** | ❌ gitignore |

⚠️ 짐코딩은 `settings.local.json` 을 그대로 커밋 (강의용). 우리는 일반 룰대로 gitignore.

### 진화 단계

1. **Day 0:** 위 초기 settings 적용. Plan 모드 + Read·Bash 일부.
2. **첫 작업 후:** 자주 묻는 Bash 명령이 있으면 글로벌 allow 추가.
3. **에이전트·커맨드 도입 후:** 글로벌 그대로, *권한 확장은 커맨드 frontmatter* 에서.
4. **본격 운영:** 훅 추가.

---

## 3. `.mcp.json` — 짐코딩 4개

```json
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    },
    "context7": {
      "type": "http",
      "url": "https://mcp.context7.com/mcp"
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    },
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

### 4개의 역할

| MCP | 역할 | 언제 |
| --- | --- | --- |
| **playwright** | E2E 테스트 자동화 | API 연동·비즈니스 로직 구현 시 (development-planner 강제) |
| **context7** | 최신 공식 문서 조회 | 환각 방지. 라이브러리 사용 전 doc fetch. (`prd-validator` Step 0 의 도구) |
| **sequential-thinking** | 복잡한 의사결정·설계 | Phase 1 설계, Phase 6 검토 |
| **shadcn** | shadcn/ui 컴포넌트 검색·설치 | shadcn 안 쓰면 빼기 |

### 채호 MBTI 적용

- ✅ **context7** — 환각 방지. 거의 모든 프로젝트에.
- ✅ **sequential-thinking** — 의사결정에 좋음.
- ⚠️ **playwright** — 테스트 본격적으로 짤 때.
- ❌ **shadcn** — 우리는 CSS Modules. 제외.

추가 후보: filesystem (콘텐츠 대량 조작), fetch (외부 MBTI 데이터), notion (콘텐츠 기획).

→ **처음엔 context7 + sequential-thinking 만.**

### settings 에서 MCP 활성화

`.mcp.json` 만으로는 부족. settings 에서도:

```json
{
  "enableAllProjectMcpServers": true,
  "enabledMcpjsonServers": ["playwright"],
  "permissions": {
    "allow": [
      "mcp__context7",
      "mcp__sequential-thinking",
      "mcp__context7__resolve-library-id",
      "mcp__context7__get-library-docs"
    ]
  }
}
```

→ MCP 함수 단위까지 권한 명시 가능.

---

## 4. 훅 — Slack 알림 (필요해질 때만)

### 왜

클로드한테 큰 작업 시켜놓고 다른 일 하다가 멈춰있는 줄 모르고 30분 지남 → 비효율. Slack 으로 *백그라운드 + 알림 + 복귀* 워크플로우.

### 패턴 (4줄짜리)

```bash
# .env 에서 SLACK_WEBHOOK_URL 로드
source "$CLAUDE_PROJECT_DIR/.env"

# stdin JSON 파싱
MESSAGE=$(jq -r '.message')
PROJECT_NAME=$(basename "$CLAUDE_PROJECT_DIR")
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# Slack payload + curl
PAYLOAD=$(printf '{"channel": "#claude-code", "username": "Claude Code", "text": "🔔 권한 요청\n프로젝트: %s\n상태: %s\n시간: %s", "icon_emoji": ":bell:"}' "$PROJECT_NAME" "$MESSAGE" "$TIMESTAMP")
curl -X POST --data-urlencode "payload=$PAYLOAD" "$SLACK_WEBHOOK_URL" > /dev/null 2>&1
```

→ **`.env` 로드 → jq 파싱 → printf payload → curl webhook**. 새 이벤트 훅 (`PreToolUse`, `PostToolUse`, `SubagentStop`) 도 같은 템플릿.

### settings 에 등록

```json
{
  "hooks": {
    "Notification": [{
      "matcher": "*",
      "hooks": [{ "type": "command", "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/notification-hook.sh" }]
    }],
    "Stop": [{
      "matcher": "*",
      "hooks": [{ "type": "command", "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/stop-hook.sh" }]
    }]
  }
}
```

- `matcher: "*"` → 모든 이벤트
- `$CLAUDE_PROJECT_DIR` 환경변수 (절대 경로 하드코딩 금지)

### Discord/Telegram 으로 바꾸려면

같은 패턴, webhook URL + payload 형식만 교체.

### 도입 시점

훅은 **진짜 필요해질 때**. 초반엔 과함.
도입 신호: 한 작업이 5분 이상 / 권한 묻는 거 놓치는 일이 반복.

---

## 5. 한 줄 정리

> **초기 settings 는 "Plan 모드 + Read·Bash 일부", MCP 는 context7 + sequential-thinking 만, 훅은 필요할 때.**

---

## 6. 출처

- 짐코딩 settings/.mcp.json/hooks raw 링크는 [99_references.md](./99_references.md)
