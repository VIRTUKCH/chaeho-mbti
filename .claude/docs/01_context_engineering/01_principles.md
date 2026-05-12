# 01. 짐코딩에게서 뽑은 5개 원칙

> **내가 채호 MBTI 코드를 짤 때 지킬 원칙들.**
> 각 원칙은 짐코딩의 실제 GitHub 파일에서 관찰된 것에서 일반화함.

---

## 원칙 1. CLAUDE.md 는 인덱스로, 본문은 분리한다

**해야 할 것**: CLAUDE.md 본문은 40줄 / 1.5KB 이내로 유지. 진짜 규칙은 `docs/guides/*.md` 로 빼고 `@/docs/guides/foo.md` 식으로 참조.

**왜**: AI가 매번 모든 규칙을 짊어지지 않게. 작업할 때 필요한 가이드만 골라 로드. 토큰 절약 + 주의력 보존.

**짐코딩 예시**: `claude-nextjs-starters` 의 CLAUDE.md 가 1.5KB / 40줄짜리 인덱스. 본문은 `docs/guides/{project-structure, styling-guide, component-patterns, nextjs-15, forms-react-hook-form}.md` 5개로 분리.

→ 자세히: [02_claude_md_index_pattern.md](./02_claude_md_index_pattern.md)

---

## 원칙 2. 책임은 서브에이전트 단위로 쪼갠다

**해야 할 것**: 한 에이전트가 모든 걸 하지 않게. 역할별로 에이전트를 만들고, 각 에이전트는 **자기가 하지 않는 일**도 명시한다.

**왜**: 거대한 에이전트 하나는 컨텍스트 오염 + 충돌. 작은 에이전트 여럿은 깨끗.

**짐코딩 예시**: 7개 에이전트로 분리.
- `code-reviewer` (리뷰)
- `development-planner` (로드맵)
- `nextjs-app-developer` (App Router 구현)
- `starter-cleaner` (스타터킷 정리)
- `ui-markup-specialist` (정적 마크업 전담)
- `prd-generator` (PRD 생성)
- `prd-validator` (PRD 기술 검증)

특히 `ui-markup-specialist` 는 "상태 관리, 이벤트 핸들러 로직, API 호출, 폼 검증, 애니메이션, 비즈니스 로직, 서버 액션 모두 **금지**" 라고 명시.

→ 자세히: [20_subagent_yaml_frontmatter.md](./20_subagent_yaml_frontmatter.md)

---

## 원칙 3. 권한은 가능한 한 좁게 — 슬래시 커맨드 단위로

**해야 할 것**: settings.json 에 `Edit` `Write` 를 글로벌 allow 하지 말 것. 그 대신 슬래시 커맨드 YAML 의 `allowed-tools` 에서 **파일 경로까지 좁힌다**.

**왜**: 실수로 엉뚱한 파일이 수정되는 일을 차단. 커맨드 자체가 권한 경계가 됨.

**짐코딩 예시**: `update-roadmap.md` 슬래시 커맨드의 frontmatter
```yaml
---
description: 'ROADMAP.md에서 완료된 작업을 체크하고 진행 상황을 업데이트합니다'
allowed-tools: ['Read(docs/ROADMAP.md:*)', 'Edit(docs/ROADMAP.md:*)']
---
```
→ 이 커맨드는 `docs/ROADMAP.md` 만 만질 수 있다.

→ 자세히: [31_slash_command_allowed_tools.md](./31_slash_command_allowed_tools.md)

---

## 원칙 4. 환각을 막을 시스템을 코드에 박는다

**해야 할 것**:
- 추측·확정을 **태깅**으로 구분: `[FACT]` `[INFERENCE]` `[UNCERTAIN]` `[ASSUMPTION]` `[ALTERNATIVE]` `[LIMITATION]`
- "구현 불가능" 단정 전 **3개 이상 대안 검토** 강제
- API 기능은 **공식 문서 WebFetch 의무화** (Context7 MCP)

**왜**: AI가 모르는 걸 아는 척하는 게 가장 비싼 실수. 시스템 프롬프트에 박아두면 그 비용이 0이 됨.

**짐코딩 예시**: `prd-validator` 에이전트(opus 모델) 본문의 Step 0 ~ Step 2.5 절차.

→ 자세히: [52_anti_hallucination_tags.md](./52_anti_hallucination_tags.md)

---

## 원칙 5. 세션은 4단계, 프로젝트는 4-Phase

**해야 할 것**:
- **세션 단위**: 탐색 → 계획 → 구현 → 커밋
- **프로젝트 단위**: 골격(Phase 1) → UI 더미(Phase 2) → 핵심 기능(Phase 3) → 최적화(Phase 4)

**왜**: AI에게 무작정 "X 만들어줘" 하면 토큰만 태우고 못 쓰는 결과 나옴. 단계를 분리하면 각 단계의 결과를 검증 후 다음으로 갈 수 있음.

**짐코딩 예시**:
- 강의 헤드라인이 "탐색 → 계획 → 구현 → 커밋"
- `development-planner` 에이전트가 만드는 ROADMAP 은 항상 Phase 1-4 구조 우선 (Structure-First Approach)

→ 자세히: [50_workflow_session_4steps.md](./50_workflow_session_4steps.md), [51_workflow_project_4phase.md](./51_workflow_project_4phase.md)

---

## 한 줄 합치면

> **컨텍스트는 작게 · 책임은 쪼개고 · 권한은 좁히고 · 환각은 막고 · 단계를 분리한다.**
