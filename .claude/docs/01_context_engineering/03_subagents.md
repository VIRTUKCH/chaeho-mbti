# 03. 서브에이전트 — YAML + 6골격 + 모델 선택 + 짐코딩 7개 분석

> **내가 할 일:** `.claude/agents/{도메인}/이름.md` 파일을 만들 때 frontmatter + 6골격 본문을 갖춘다.

---

## 1. YAML frontmatter 표준

```yaml
---
name: <kebab-case-name>
description: |
  Use this agent when you need to <영문 한 줄>.

  <example>
    Context: <상황 묘사>
    user: "<사용자 요청>"
    assistant: "<응답 또는 에이전트 호출>"
    <commentary>왜 이 에이전트를 부르는지</commentary>
  </example>
model: sonnet  # 또는 opus
color: red     # 또는 blue, yellow ...
---
```

### 필드 의미

| 필드 | 값 | 의미 |
| --- | --- | --- |
| `name` | kebab-case | 호출 시 사용. 파일명과 동일하게. |
| `description` | 영문 한 줄 (+ 한국어 example) | **언제 이 에이전트를 부르나** 의 핵심. 라우팅 판단 근거. |
| `model` | `sonnet` / `opus` | 모델 선택 (아래 ⓶ 참조). |
| `color` | `red`/`blue`/... | UI 표시 색. |

### description 잘 쓰는 법

✅ **좋은 예 (짐코딩):** `Use this agent when you need to create, update, or maintain a ROADMAP.md file in Korean.`
❌ **나쁜 예:** `이 에이전트는 다양한 작업을 수행하는 만능 에이전트입니다.` → "다양한", "만능" 같은 단어는 라우팅을 어렵게 만듦.

`<example>` 블록은 *메인 클로드의 라우터* 가 보고 학습. 시나리오 2~3개 박으면 정확도 ↑.

> **frontmatter 의 description 은 "라우팅 메시지", 본문은 "에이전트의 시스템 프롬프트". 절대 섞지 말 것.**

---

## 2. 본문 6골격

```markdown
## 1. 핵심 미션 / 역할
(한 문단으로 "무엇을 하는가". 이 에이전트가 *하지 않는 일* 도 함께 정의하면 더 좋다.)

## 2. 작업 프로세스 (Phase 또는 Step)
Phase 1: ...
Phase 2: ...

## 3. 출력 형식 / 포맷
(마크다운 템플릿 직접 제공)

## 4. 품질 체크리스트
- [ ] ...

## 5. 금지 사항 / 안티 패턴
- 절대 ...

## 6. 예시
(시나리오 1~2개)
```

### 골격별 핵심

- **① 역할:** "내가 안 하는 일" 을 명시하면 다른 에이전트와 충돌 사라짐. `ui-markup-specialist` 는 상태 관리·이벤트 핸들러·API 호출·폼 검증·비즈니스 로직 모두 금지.
- **② 프로세스:** 각 Phase 에 *어떤 MCP 를 쓸지* 미리 못박는다. `nextjs-app-developer` 의 6 Phase 가 각각 Sequential Thinking / Context7 / Shadcn 을 호출.
- **③ 출력 형식:** AI 출력 형식을 본문에 **마크다운 그대로** 박는다. `code-reviewer` 는 심각도 3단계 (🚨/⚠️/💡) + 문제/영향/해결방안 3분할 템플릿 박음.
- **④ 체크리스트:** AI 가 *스스로 검증* 할 기준. 50개 항목도 괜찮다.
- **⑤ 금지 사항:** 종종 가장 가치 있다. `prd-generator` 는 우선순위·인프라·페르소나 등 9가지를 "절대 생성하지 말 것" 으로 명시 → 다른 에이전트와 책임 충돌 차단.
- **⑥ 예시:** `<example>` 블록은 본문에도. frontmatter 의 example 은 라우팅용, 본문 example 은 *작업 흐름 시연용*.

### 고급 에이전트만 (선택)

- MCP 도구 매핑 (Phase ↔ MCP)
- Chain-of-Thought 단계 (분석 → 이유 → 계획 → 실행 → 검증 → 문서화)
- 태깅 시스템 ([FACT]/[INFERENCE]/...) → [06_workflows.md](./06_workflows.md#환각-방지-태깅)
- 5단계 판정 (검증 완료 / 조건부 통과 / 대규모 수정 / 부분 구현 / 재검토)

---

## 3. `model: opus` vs `model: sonnet`

### 휴리스틱

> **만들 거면 sonnet, 판단할 거면 opus.**

| 작업 성격 | 추천 | 이유 |
| --- | --- | --- |
| 코드/문서 *작성* | sonnet | 빠르고 충분히 정확. 비용 낮음. |
| 단순 리뷰 | sonnet | 패턴 매칭 충분. |
| 로드맵·아키텍처 *설계* | **opus** | 큰 그림, 여러 대안 비교. |
| 추측·확정 *분리* (태깅) | **opus** | 메타인지 필요. sonnet 은 자기 추측을 사실로 단정. |
| 환각 검증·대안 탐색 | **opus** | "3개 이상 대안 검토" 같은 절차에 강함. |

### 짐코딩 7개 매핑 (opus 2 : sonnet 5)

| 에이전트 | model | 역할 |
| --- | --- | --- |
| `code-reviewer` | sonnet | 코드 리뷰 (실행) |
| `development-planner` | **opus** | ROADMAP (분석·전략) |
| `nextjs-app-developer` | sonnet | App Router 구현 (실행) |
| `starter-cleaner` | sonnet | 보일러플레이트 정리 (실행) |
| `ui-markup-specialist` | sonnet | 정적 마크업 (실행) |
| `prd-generator` | sonnet | PRD 작성 (포맷 채움) |
| `prd-validator` | **opus** | PRD 검증 (판단·반박) |

→ **자주 호출 = sonnet, 드물고 결정적 = opus.** opus 가 sonnet 보다 약 5배 비쌈.

---

## 4. 짐코딩 7개 에이전트 — 채호 MBTI 적용 시사점

### 7개 한 줄 요약

| # | 에이전트 | model | 책임 |
| --- | --- | --- | --- |
| 1 | `code-reviewer` | sonnet | 방금 짠 코드를 심각도별로 리뷰 |
| 2 | `development-planner` | opus | ROADMAP 을 4-Phase 패턴으로 작성/갱신 |
| 3 | `nextjs-app-developer` | sonnet | App Router 코드 (1402줄 거대 에이전트) |
| 4 | `starter-cleaner` | sonnet | create-next-app 보일러플레이트 정리 |
| 5 | `ui-markup-specialist` | sonnet | **정적 마크업만**, 로직 일체 금지 |
| 6 | `prd-generator` | sonnet | MVP 기능 명세 PRD |
| 7 | `prd-validator` | opus | 환각·실현가능성 검증, 태깅+5단계 판정 |

### 인사이트별 적용

- **`code-reviewer` — 심각도 3단계 출력 포맷이 핵심.** → 콘텐츠 리뷰 에이전트도 심각도 3단계로 강제.
- **`development-planner` — 4-Phase 구조 우선.** API 연동·로직 구현 시 Playwright MCP 테스트 필수. Task 파일 `/tasks/XXX.md` 별도 분리.
- **`nextjs-app-developer` — 가이드 내장형.** 가이드를 `docs/guides/*.md` 로 분리하는 패턴 *과* 에이전트 본문에 통째로 내장하는 패턴이 **공존 가능**. 핵심 작업은 후자가 나을 수도.
- **`starter-cleaner` — 메타 워크플로우.** PRD 만 있으면 README/CLAUDE 를 에이전트가 채워줌. 우리도 *콘텐츠 PRD* 한 번 만들면 메타 자동 생성 에이전트 가능.
- **`ui-markup-specialist` — 금지 사항이 핵심.** frontmatter 와 본문 양쪽에 "안 하는 일" 박으면 충돌 사라짐. 3개 MCP 절차 매핑 (Sequential Thinking → 분해 / Context7 → 문서 / Shadcn → 컴포넌트 4단계).
- **`prd-generator` — 책임 좁히기.** "절대 생성하지 말 것": 우선순위 / 성능 지표 / API 라우트 / 인프라 / 마일스톤 / 워크플로우 / 보안 / 페르소나. **상호 참조 ID** (`F001`) + 4단계 정합성 검증.
- **`prd-validator` — 환각 방지의 정수.** 6종 태깅 + Step 0 (공식 문서 fetch 의무) + Step 2.5 (3개 대안 검토) + 5단계 판정. **이건 그대로 카피해서 콘텐츠 검증 에이전트에 써먹기.**

### 채호 MBTI 적용 후보

| 짐코딩 | 우리 후보 | model |
| --- | --- | --- |
| code-reviewer | `content-reviewer` (톤·맞춤법·MBTI 정확성) | sonnet |
| development-planner | `roadmap-planner` (4-Phase 적용) | opus |
| nextjs-app-developer | `page-builder` (가이드 내장형) | sonnet |
| ui-markup-specialist | `static-page-writer` (로직 금지) | sonnet |
| prd-generator | `content-prd-generator` | sonnet |
| prd-validator | `seo-content-validator` (태깅+판정 그대로) | opus |
| (없음) | `traffic-strategy-planner` | opus |
| (없음) | `ad-placement-validator` | opus |

→ 대략 opus 3 : sonnet 5 비율.

---

## 5. 출처

- [.claude/agents/ 전체 (GitHub)](https://github.com/gymcoding/claude-nextjs-starters/tree/main/.claude/agents)
- 개별 raw 링크는 [99_references.md](./99_references.md)
