# 60. 짐코딩이 회피하는 안티 패턴 11가지

> **내가 할 일:** 코드 짤 때 이 11개에 해당하는 패턴이 보이면 즉시 멈추고 짐코딩 방식으로 교정한다.

---

| # | 안티 패턴 | 짐코딩의 회피 |
| --- | --- | --- |
| 1 | **CLAUDE.md 한 파일에 모든 규칙 욱여넣기** | `docs/guides/*.md` 5개로 분리, CLAUDE.md 는 인덱스 1.5KB |
| 2 | **모든 권한을 settings.json 에 글로벌 allow** | 커맨드 단위 `allowed-tools` 로 경로까지 좁히기 |
| 3 | **거대한 에이전트 하나로 만능 처리** | 7개 에이전트로 역할 분리 (UI 마크업 / 로직 / 라우팅 / 리뷰 / PRD 생성 / PRD 검증 / 로드맵) |
| 4 | **MCP 를 "있으면 쓰고 없으면 말고"** | 에이전트 본문에 *"어떤 Phase 에 어떤 MCP 를 쓴다"* 명시화 |
| 5 | **"구현 불가능" 으로 빠르게 단정** | prd-validator Step 2.5: "3개 이상 대안 검토 의무" |
| 6 | **추측/환각으로 답변** | `[FACT]/[INFERENCE]/[UNCERTAIN]` 태깅 시스템 (→ [52](./52_anti_hallucination_tags.md)) |
| 7 | **시작부터 본격 구현** | 구조 우선 4-Phase (골격→UI더미→핵심→최적화) (→ [51](./51_workflow_project_4phase.md)) |
| 8 | **한 번에 모든 페이지/기능 구현** | `/tasks/XXX-description.md` 로 Task 파일 분리 (→ [53](./53_task_file_split.md)) |
| 9 | **커밋 메시지에 "🤖 Generated with Claude Code"** | `commands/git/commit.md` 에 "Claude 서명 절대 추가하지 않음" 명시 |
| 10 | **`npm run dev` 만 시키고 끝내기** | `npm run check-all` + `npm run build` 통과를 작업 완료 기준 |
| 11 | **Edit 를 글로벌 allow** | settings.local.json 에서 Edit/Write 빠짐 (안전 + 강의 시연 목적) |

---

## 1. 한 줄씩 자세히

### 1. CLAUDE.md 욱여넣기

증상: CLAUDE.md 가 500줄. 모든 규칙이 본문에 있음.
손해: 진짜 중요한 지시가 묻힘, 토큰 비용 폭발.
처방: → [02_claude_md_index_pattern.md](./02_claude_md_index_pattern.md), [11_docs_guides_split.md](./11_docs_guides_split.md)

### 2. 글로벌 allow

증상: `permissions.allow: ["*"]` 또는 `["Read","Edit","Write","Bash"]`.
손해: 실수가 너무 비싸짐.
처방: → [31_slash_command_allowed_tools.md](./31_slash_command_allowed_tools.md)

### 3. 만능 에이전트

증상: `general-developer` 같은 한 에이전트가 UI·로직·테스트·리뷰 다 처리.
손해: 한 영역 잘못 건드리면 다른 영역 오염.
처방: → [23_subagent_examples.md](./23_subagent_examples.md)

### 4. MCP 자유방임

증상: MCP 가 등록만 되어 있고 *언제* 쓸지 명시 없음.
손해: AI 가 안 쓰거나, 엉뚱한 데 씀.
처방: 에이전트 본문에 Phase-MCP 매핑 박기 → [21_subagent_six_skeleton.md](./21_subagent_six_skeleton.md)

### 5. "구현 불가" 단정

증상: AI 가 "이 기능은 X 제약 때문에 불가능합니다" 라고 단정.
손해: 사실은 우회로 3개 있는데 못 본 거.
처방: prd-validator 의 Step 2.5 패턴 → [52_anti_hallucination_tags.md](./52_anti_hallucination_tags.md)

### 6. 추측 환각

증상: 없는 함수/API/옵션을 있는 척.
손해: 빌드 에러, 디버깅 시간 폭발.
처방: 태깅 시스템 + Context7 강제 → [52](./52_anti_hallucination_tags.md), [41](./41_mcp_default.md)

### 7. 시작부터 구현

증상: "MBTI 결과 페이지 만들어줘" → 1시간 후 결과물이 의도랑 다름.
손해: 1시간 토큰 + 다시 짜는 비용.
처방: 4단계 세션 워크플로우 → [50](./50_workflow_session_4steps.md)

### 8. 한 번에 다 구현

증상: 한 Phase 안의 5개 Task 를 한 세션에서 다.
손해: 컨텍스트 폭발, 진행 추적 불가.
처방: Task 파일 분리 → [53](./53_task_file_split.md)

### 9. Claude 서명

증상: 커밋 메시지 마지막에 `🤖 Generated with Claude Code` `Co-Authored-By: Claude` 박힘.
손해: 협업 시 노이즈, 깃 히스토리 오염.
처방: `/git:commit` 슬래시 커맨드 본문에 "절대 추가하지 않음" 명시 → [32](./32_slash_command_examples.md)

### 10. 검증 없이 끝

증상: 코드 짜고 `npm run dev` 한 번 돌아가는 거 보고 끝.
손해: 빌드 실패·타입 에러·테스트 실패는 다음 사람이 발견.
처방: CLAUDE.md 의 "작업 완료 체크리스트" 에 `check-all` + `build` 박기 → [02](./02_claude_md_index_pattern.md)

### 11. Edit 글로벌

증상: settings 에 `Edit` 가 글로벌 allow.
손해: 의도 안 한 파일 수정.
처방: settings 에는 Read 까지만, Edit 는 슬래시 커맨드 단위 → [42](./42_settings_safe_defaults.md)

---

## 2. 한 줄 정리

> **이 11개 중 하나라도 보이면 멈추고 처방 문서 다시 본다.**
