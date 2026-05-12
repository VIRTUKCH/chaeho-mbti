# 42. `settings.json` — 안전 기본값

> **내가 할 일:** `.claude/settings.json` 을 짐코딩의 두 가지 패턴 중 *프로젝트 단계에 맞는 것*으로 시작한다. 초기엔 보수적, 익숙해지면 확장.

---

## 1. 짐코딩 두 가지 패턴

### 패턴 A — 초보자/시연용 (`claude-code-mastery`)

경로: `.claude/settings.json`

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

**특징**:
- `defaultMode: "plan"` → **세션이 Plan 모드로 시작**. 실수로 파일 수정 안 됨.
- `outputStyle: "Explanatory"` → 클로드가 행위만 하지 않고 설명까지 곁들임.
- 권한은 `Bash` 만 allow. Read/Edit/Write 는 매번 묻는다.

---

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
    ],
    "deny": [],
    "ask": []
  },
  "enableAllProjectMcpServers": true,
  "enabledMcpjsonServers": ["playwright"],
  "hooks": {
    "Notification": [...],
    "Stop": [...]
  }
}
```

**특징**:
- Read·Bash·WebFetch·WebSearch + MCP 함수까지 화이트리스트로 명시.
- **Edit·Write 는 allow 에 없음** → 매 수정마다 권한 프롬프트.
- 훅 등록.

---

## 2. 두 패턴의 의미

| 패턴 | 위험도 | 어울리는 시점 |
| --- | --- | --- |
| A (Bash + Plan 모드) | 낮음 | 막 시작 / 데모 / 강의 |
| B (Read+Bash+MCP, Edit/Write 묻기) | 중간 | 실제 작업 시작 후 |
| (글로벌 Edit/Write allow) | 높음 | **권장 안 함**. 슬래시 커맨드별 allowed-tools 로 대체. |

---

## 3. 채호 MBTI 초기 settings.json (제안)

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

**근거**:
- `defaultMode: "plan"` — 매 세션 Plan 으로 시작. 안전 우선.
- `Read` 글로벌 allow — 코드 읽기는 위험 없음.
- `Bash` 는 git 조회·npm 만 글로벌 allow. 그 외는 슬래시 커맨드 단위 (→ [31](./31_slash_command_allowed_tools.md)).
- `Edit`/`Write` 글로벌 allow 안 함 — 매번 묻거나 슬래시 커맨드 단위 화이트리스트.
- `outputStyle: "Explanatory"` — AI 가 결정 이유 설명하게.

---

## 4. settings.json vs settings.local.json vs .local/settings.json

| 파일 | 용도 | git 추적 |
| --- | --- | --- |
| `.claude/settings.json` | **팀 공유 기본값** | ✅ 커밋 |
| `.claude/settings.local.json` | **개인 오버라이드** | ❌ gitignore (보통) |

⚠️ 짐코딩은 `settings.local.json` 을 그대로 git에 커밋해두었음 (강의용 공유 의도). 우리는 보통 룰대로 `local` 은 gitignore 하는 게 맞음.

---

## 5. 진화 단계

1. **Day 0**: 위의 채호 MBTI 초기 settings.json 적용. Plan 모드 + Read·Bash 일부.
2. **첫 작업 시작 후**: 자주 묻는 Bash 명령이 있으면 글로벌 allow 추가.
3. **에이전트·커맨드 도입 후**: 글로벌은 그대로 두고, *권한 확장은 슬래시 커맨드 frontmatter 에서*.
4. **본격 운영**: 훅 추가, 모델 디폴트 지정 등.

---

## 6. 한 줄 정리

> **초기 settings 는 "Plan 모드 + Read·Bash 일부" 로 보수적. 권한 확장은 슬래시 커맨드 단위로.**

---

## 7. 출처

- [.claude/settings.json (mastery, raw)](https://raw.githubusercontent.com/gymcoding/claude-code-mastery/main/.claude/settings.json)
- [.claude/settings.local.json (starters, raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/settings.local.json)
