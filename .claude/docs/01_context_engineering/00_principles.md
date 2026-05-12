# 00. 5원칙 + 11 안티패턴

> **이 디렉터리의 목적:** 짐코딩이 보여준 방식대로 채호 MBTI 코드를 어떻게 짤지 정리.
> 각 항목은 "해야 할 것 + 왜 + 자세히 볼 곳" 흐름.

---

## 5원칙

### 원칙 1. CLAUDE.md 는 인덱스로, 본문은 분리

- **해야 할 것:** CLAUDE.md 본문은 40줄 / 1.5KB 이내. 진짜 규칙은 `docs/guides/*.md` 로 빼고 `@/docs/guides/foo.md` 식으로 참조.
- **왜:** AI가 매 세션 CLAUDE.md 전체를 짊어진다. 본문이 길면 자주 안 보는 규칙이 매번 토큰을 차지하고 중요한 지시가 묻힘.
- **자세히:** [01_claude_md.md](./01_claude_md.md)

### 원칙 2. 책임은 서브에이전트 단위로 쪼개기

- **해야 할 것:** 한 에이전트가 다 하지 않게. 역할별로 만들고, 각 에이전트는 *자기가 안 하는 일* 도 명시.
- **왜:** 거대한 에이전트 하나는 컨텍스트 오염 + 충돌. 작은 에이전트 여럿이 깨끗.
- **짐코딩 예:** `ui-markup-specialist` 는 "상태 관리·이벤트 핸들러·API 호출·폼 검증·애니메이션·비즈니스 로직·서버 액션 모두 **금지**" 명시.
- **자세히:** [03_subagents.md](./03_subagents.md)

### 원칙 3. 권한은 슬래시 커맨드 단위로 좁히기

- **해야 할 것:** settings.json 에 Edit/Write 글로벌 allow 금지. 슬래시 커맨드 YAML `allowed-tools` 에서 **파일 경로까지** 좁힘.
- **왜:** 실수로 엉뚱한 파일이 수정되는 일을 차단. 커맨드 자체가 권한 경계.
- **짐코딩 예:** `update-roadmap.md` 는 `allowed-tools: ['Read(docs/ROADMAP.md:*)', 'Edit(docs/ROADMAP.md:*)']` — 이 한 파일만 만짐.
- **자세히:** [04_slash_commands.md](./04_slash_commands.md), [05_settings_mcp_hooks.md](./05_settings_mcp_hooks.md)

### 원칙 4. 환각 방지를 시스템으로 박기

- **해야 할 것:**
  - 추측·확정을 **태깅**으로 구분: `[FACT]` `[INFERENCE]` `[UNCERTAIN]` `[ASSUMPTION]` `[ALTERNATIVE]` `[LIMITATION]`
  - "구현 불가능" 단정 전 **3개 이상 대안 검토** 강제
  - API 기능은 **공식 문서 fetch 의무화** (Context7 MCP)
- **왜:** AI가 모르는 걸 아는 척하는 게 가장 비싼 실수. 시스템 프롬프트에 박아두면 그 비용이 0이 됨.
- **자세히:** [06_workflows.md](./06_workflows.md#환각-방지-태깅)

### 원칙 5. 세션은 4단계, 프로젝트는 4-Phase

- **세션 단위:** 탐색 → 계획 → 구현 → 커밋
- **프로젝트 단위:** 골격(Phase 1) → UI 더미(Phase 2) → 핵심 기능(Phase 3) → 최적화(Phase 4)
- **왜:** "X 만들어줘" 한 번에 시키면 토큰만 태우고 못 쓰는 결과. 단계 분리하면 각 단계 검증 후 다음으로.
- **자세히:** [06_workflows.md](./06_workflows.md)

### 한 줄 합치면

> **컨텍스트는 작게 · 책임은 쪼개고 · 권한은 좁히고 · 환각은 막고 · 단계를 분리한다.**

---

## 짐코딩 11가지 안티 패턴

| # | 안티 패턴 | 회피 처방 |
| --- | --- | --- |
| 1 | CLAUDE.md 한 파일에 모든 규칙 욱여넣기 | [01_claude_md.md](./01_claude_md.md) — 인덱스 1.5KB + `docs/guides/*.md` 분리 |
| 2 | 모든 권한 글로벌 allow | [04_slash_commands.md](./04_slash_commands.md) — 커맨드별 `allowed-tools` 로 경로까지 |
| 3 | 거대한 에이전트 하나로 만능 처리 | [03_subagents.md](./03_subagents.md) — 7개 역할로 분리 |
| 4 | MCP "있으면 쓰고 없으면 말고" | 에이전트 본문에 *Phase-MCP 매핑* 명시 |
| 5 | "구현 불가능" 으로 빠르게 단정 | 3개 이상 대안 검토 의무 (Step 2.5) |
| 6 | 추측/환각으로 답변 | [FACT]/[INFERENCE]/[UNCERTAIN] 태깅 |
| 7 | 시작부터 본격 구현 | 4단계 세션 워크플로우 (탐색→계획→구현→커밋) |
| 8 | 한 번에 모든 페이지/기능 구현 | `/tasks/XXX.md` 로 Task 파일 분리 |
| 9 | 커밋 메시지에 "🤖 Generated with Claude Code" | `/git:commit` 본문에 "Claude 서명 절대 추가하지 않음" 명시 |
| 10 | `npm run dev` 만 보고 끝 | CLAUDE.md "작업 완료 체크리스트" 에 `build` + `check` 박기 |
| 11 | Edit 글로벌 allow | settings 는 Read 까지만, Edit 는 슬래시 커맨드 단위 |

---

## 짐코딩 인물 (한 줄)

한국 프론트엔드 강사 출신, 2025–2026년 무게중심을 Claude Code/AI 주도 개발로 옮긴 유튜버 겸 인프런 강사. 자세한 채널·강의·저장소 URL 은 [99_references.md](./99_references.md).

핵심 1차 출처는 GitHub 두 저장소:
- [gymcoding/claude-nextjs-starters](https://github.com/gymcoding/claude-nextjs-starters) — Next.js 스타터킷, 거의 모든 패턴이 여기.
- [gymcoding/claude-code-mastery](https://github.com/gymcoding/claude-code-mastery) — 강의 초보 단계 저장소.

---

## 이 노트의 사용 규칙

- 이 폴더는 **사람·AI 모두를 위한 영구 가이드**. 한꺼번에 다 던지지 말고 작업할 때 필요한 파일만 골라 로드.
- 짐코딩이 한 짓을 *베끼는 게 목적이 아니라*, 그가 왜 그렇게 했는지 이해해서 **채호 MBTI 프로젝트에 맞게 변형** 하는 게 목적.
- 우리 스택은 React + Vite + CSS Modules. Next.js/shadcn 전제 디테일은 *원칙만* 차용하고 그대로 베끼지 말 것.
