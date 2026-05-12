# 41. `.mcp.json` — 기본 4개 구성

> **내가 할 일:** 프로젝트 루트에 `.mcp.json` 만들고 짐코딩의 4개 MCP 를 기본으로 깐다. 그 다음 우리 도메인용 추가.

---

## 1. 짐코딩 `.mcp.json` 전문

경로: 프로젝트 루트 `/.mcp.json`

```json
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["@playwright/mcp@latest"],
      "env": {}
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

---

## 2. 4개의 역할

| MCP | 역할 | 언제 쓰이나 |
| --- | --- | --- |
| **playwright** | E2E 테스트 자동화 | API 연동·비즈니스 로직 구현 시 (development-planner 가 강제) |
| **context7** | 최신 공식 문서 조회 (Next.js/React/Tailwind 등) | 환각 방지. 라이브러리 사용 전에 doc fetch. |
| **sequential-thinking** | 복잡한 의사결정·설계 단계 | Phase 1 설계, Phase 6 검토 |
| **shadcn** | shadcn/ui 컴포넌트 검색·설치 명령 생성 | UI 컴포넌트 추가 시 |

---

## 3. 각각 자세히

### playwright

```json
"playwright": {
  "type": "stdio",
  "command": "npx",
  "args": ["@playwright/mcp@latest"],
  "env": {}
}
```

- `type: stdio` — 표준 입출력으로 통신
- 짐코딩의 `development-planner` 에이전트가 **"API 연동·비즈니스 로직 구현 시 Playwright MCP 테스트 필수"** 라고 못박음 → E2E 테스트 강제 워크플로우.

### context7 (환각 방지의 핵심)

```json
"context7": {
  "type": "http",
  "url": "https://mcp.context7.com/mcp"
}
```

- `type: http` — HTTP 기반 원격 서버
- 짐코딩의 `prd-validator` 에이전트 Step 0 에서 **"공식 문서 WebFetch 의무화 — API 기능을 추측하지 마라"** 강제 → context7 이 그 도구.

### sequential-thinking

```json
"sequential-thinking": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
}
```

- 모델이 *체계적으로 단계별 사고* 하도록 강제하는 MCP.
- `nextjs-app-developer` Phase 1 (설계) 과 Phase 6 (검토) 에서 명시적으로 사용.

### shadcn

```json
"shadcn": {
  "command": "npx",
  "args": ["shadcn@latest", "mcp"]
}
```

- shadcn/ui 사용 시 컴포넌트 검색 → 상세 → 예제 → 설치 명령 4단계 자동화.
- 우리 프로젝트가 shadcn 안 쓰면 **빼라.**

---

## 4. 채호 MBTI 적용 (제안)

### 기본 (짐코딩에서 차용)
- ✅ context7 — 환각 방지. 거의 모든 프로젝트에 권장.
- ✅ sequential-thinking — 의사결정 단계에 좋음.
- ⚠️ playwright — 테스트 본격적으로 짤 거면 도입, 아니면 보류.
- ❌ shadcn — 우리가 shadcn 안 쓰면 제외.

### 채호 MBTI 만의 추가 후보
- **filesystem** MCP — 콘텐츠 파일 대량 조작 시
- **fetch** MCP — 외부 MBTI 데이터 소스 참고 시
- **notion** MCP — 콘텐츠 기획을 Notion 에서 한다면

→ **처음엔 context7 + sequential-thinking 만** 깔고, 필요 따라 추가.

---

## 5. settings 에서 MCP 활성화

`.mcp.json` 만으로는 불충분. settings 에서도 활성화 필요:

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

## 6. 한 줄 정리

> **MCP 4개 중 우리한테 진짜 의미 있는 건 context7 + sequential-thinking.**
> 나머지(playwright, shadcn)는 도구 채택 시에만.

---

## 7. 출처

- [.mcp.json (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.mcp.json)
- [Context7 공식](https://mcp.context7.com/)
- [Sequential Thinking MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking)
