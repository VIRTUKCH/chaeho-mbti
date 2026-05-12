# 00. 이 노트의 목적

> **이 디렉터리의 진짜 목적:**
> 짐코딩이 누구인지가 아니라, **그가 보여준 방식대로 내가 채호 MBTI 프로젝트의 코드를 어떻게 짜야 하는가** 를 정리하는 것.
>
> → 모든 문서는 "**나는 X를 해야 한다 + 왜 + 짐코딩 실제 예시**" 흐름으로 적는다.

---

## 🧭 핵심 결론 (먼저 보고 가는 곳)

1. **CLAUDE.md 는 인덱스로 짧게.** 본문은 `docs/guides/*.md` 로 분리. → [02](./02_claude_md_index_pattern.md)
2. **역할별 서브에이전트로 책임을 쪼갠다.** 한 에이전트가 다 하지 않게. → [20](./20_subagent_yaml_frontmatter.md)
3. **권한은 슬래시 커맨드 단위로 좁힌다.** `allowed-tools` 로 파일 경로까지 제한. → [31](./31_slash_command_allowed_tools.md)
4. **장시간 작업은 Slack 훅으로 알림 받는다.** → [40](./40_hooks_slack.md)
5. **MCP 4개를 기본으로 깐다.** playwright / context7 / sequential-thinking / shadcn → [41](./41_mcp_default.md)
6. **세션 워크플로우: 탐색 → 계획 → 구현 → 커밋.** → [50](./50_workflow_session_4steps.md)
7. **프로젝트 워크플로우: 골격 → UI(더미) → 핵심 기능 → 최적화.** → [51](./51_workflow_project_4phase.md)

---

## 📂 목차 (잘게 쪼갬)

### 원칙
- [01_principles.md](./01_principles.md) — 짐코딩에게서 뽑은 5개 원칙

### CLAUDE.md
- [02_claude_md_index_pattern.md](./02_claude_md_index_pattern.md) — 인덱스형 CLAUDE.md 만들기
- [03_claude_md_body_pattern.md](./03_claude_md_body_pattern.md) — 본문형 CLAUDE.md (초기/단순 프로젝트용)

### 디렉터리 구조
- [10_directory_layout.md](./10_directory_layout.md) — `.claude/` 디렉터리 전체 레이아웃
- [11_docs_guides_split.md](./11_docs_guides_split.md) — `docs/guides/*.md` 를 어떻게 쪼갤지

### 서브에이전트
- [20_subagent_yaml_frontmatter.md](./20_subagent_yaml_frontmatter.md) — YAML frontmatter 표준
- [21_subagent_six_skeleton.md](./21_subagent_six_skeleton.md) — 본문 6골격
- [22_subagent_model_picking.md](./22_subagent_model_picking.md) — opus vs sonnet 언제 쓸지
- [23_subagent_examples.md](./23_subagent_examples.md) — 실제 7개 에이전트 분석

### 슬래시 커맨드
- [30_slash_command_yaml.md](./30_slash_command_yaml.md) — YAML frontmatter 표준
- [31_slash_command_allowed_tools.md](./31_slash_command_allowed_tools.md) — 권한 좁히는 법
- [32_slash_command_examples.md](./32_slash_command_examples.md) — 실제 5개 커맨드 분석

### 훅 & MCP & 권한
- [40_hooks_slack.md](./40_hooks_slack.md) — Slack 알림 훅 만들기
- [41_mcp_default.md](./41_mcp_default.md) — `.mcp.json` 기본 4개 구성
- [42_settings_safe_defaults.md](./42_settings_safe_defaults.md) — `settings.json` 안전 기본값

### 워크플로우
- [50_workflow_session_4steps.md](./50_workflow_session_4steps.md) — 탐색→계획→구현→커밋
- [51_workflow_project_4phase.md](./51_workflow_project_4phase.md) — 골격→UI더미→핵심→최적화
- [52_anti_hallucination_tags.md](./52_anti_hallucination_tags.md) — [FACT]/[INFERENCE]/[UNCERTAIN] 태깅
- [53_task_file_split.md](./53_task_file_split.md) — `/tasks/XXX-description.md` 로 작업 쪼개기

### 안티 패턴
- [60_anti_patterns.md](./60_anti_patterns.md) — 짐코딩이 회피하는 11가지

### 참고
- [90_gymcoding_profile.md](./90_gymcoding_profile.md) — 짐코딩 인물·채널 정보 (있다는 것만 알고 넘어가는 용도)
- [99_references.md](./99_references.md) — 출처 URL 전부

---

## ⚠️ 이 노트의 사용 규칙

- 이 폴더는 **사람용**. AI에게 통째로 던지지 말 것.
- 작업할 때 AI가 봐야 할 압축본은 `.claude/ai-context/` 에 따로 만든다.
- 각 파일은 "내가 무엇을 해야 한다"가 첫 줄에 와야 한다.
- 짐코딩이 한 짓을 *베끼는 게 목적이 아니라*, 그가 왜 그렇게 했는지 이해해서 **채호 MBTI 프로젝트에 맞게 변형** 하는 게 목적.

---

## 📌 리서치 메타데이터

- 리서치 일자: 2026-05-12
- 주제 유형: 데이터/사실형 (특정 인물의 실제 콘텐츠 확인)
- 1차 출처: 짐코딩 본인 GitHub raw 파일 (`gymcoding/claude-nextjs-starters`, `gymcoding/claude-code-mastery`)
- 신뢰도: ★★★★☆ (강의 *세부 본문*은 미구매 → GitHub 공개 자료까지만 확인)
