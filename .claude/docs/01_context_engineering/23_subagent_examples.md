# 23. 서브에이전트 — 짐코딩 7개 실제 분석

> **내가 할 일:** 채호 MBTI 에 어떤 에이전트를 만들지 정하기 전에, 짐코딩의 7개를 한 번 훑어 *어떤 단위로 책임을 쪼개야 좋은지* 감을 잡는다.

---

## 1. 7개 한 줄 요약

| # | 에이전트 | model | 책임 |
| --- | --- | --- | --- |
| 1 | `code-reviewer` | sonnet | 방금 짠 코드를 심각도별로 리뷰 |
| 2 | `development-planner` | opus | ROADMAP.md 를 4-Phase 구조 우선 패턴으로 작성/갱신 |
| 3 | `nextjs-app-developer` | sonnet | Next.js App Router 코드 전체를 작성 (1402줄짜리 거대 에이전트) |
| 4 | `starter-cleaner` | sonnet | create-next-app 보일러플레이트를 PRD 기반으로 정리·재작성 |
| 5 | `ui-markup-specialist` | sonnet | **정적 마크업과 스타일링만** 담당 (로직 일체 금지) |
| 6 | `prd-generator` | sonnet | MVP 기능 명세 PRD 생성. 우선순위·인프라·페르소나는 금지. |
| 7 | `prd-validator` | opus | PRD 를 환각·실현가능성 관점에서 검증. 태깅+5단계 판정. |

---

## 2. 각각의 인사이트 (내가 따라 할 부분만)

### `code-reviewer` — 출력 포맷이 핵심

리뷰 결과를 **심각도 3단계** (🚨높음 / ⚠️중간 / 💡낮음) + 각 항목당 **문제 / 영향 / 해결방안** 3분할.

→ 채호 MBTI 에 적용한다면: 콘텐츠 리뷰 에이전트도 **심각도 3단계**로 출력하게 강제.

---

### `development-planner` — 4-Phase 구조 우선

이 에이전트가 만드는 ROADMAP 은 항상:

```
Phase 1: 골격 (라우팅, 레이아웃, 빈 페이지)
Phase 2: UI (더미 데이터로 모든 화면 완성)
Phase 3: 핵심 기능 (실제 데이터·로직 연결)
Phase 4: 최적화 (성능·SEO·접근성)
```

**강제 규칙**:
- API 연동·비즈니스 로직 구현 시 **Playwright MCP 테스트 필수**
- Task 파일은 `/tasks/XXX-description.md` 로 별도 분리
- `000-sample.md` 를 빈 박스 샘플로 두는 패턴

→ 채호 MBTI 적용: 콘텐츠도 Phase 1 골격(타입 16개 빈 페이지) → Phase 2 UI(더미 텍스트) → Phase 3 실제 콘텐츠 → Phase 4 SEO/광고 최적화.

---

### `nextjs-app-developer` — 가이드 내장형

1402줄 / 41.5KB 짜리 거대 에이전트. Next.js 책 한 권 수준.

내장 내용:
- 8개 파일 컨벤션(page, layout, template, loading, error, global-error, not-found, route) 전부 코드 예시
- 13개 고급 코드 패턴 (메타데이터, params Promise, 병렬 라우트, 인터셉트 라우트 등)
- 가상 프로젝트 구조 트리
- 약 50개 항목 품질 체크리스트

→ 인사이트: **가이드를 `docs/guides/*.md` 로 분리하는 패턴 + 에이전트 본문에 내장하는 패턴이 *공존*** 가능. 둘 중 어느 하나만 옳은 게 아님.

→ 채호 MBTI 적용: 핵심 작업(예: MBTI 결과 페이지 작성)은 *가이드를 에이전트 본문에 통째로 박는* 게 나을 수 있다 (가이드 매번 안 거치고 한 번에 처리).

---

### `starter-cleaner` — 메타 워크플로우

이 에이전트가 **README.md 와 CLAUDE.md 를 PRD 기반으로 자동 재작성**한다.

→ 즉 짐코딩은 사용자가 PRD 만 만들면 README/CLAUDE 는 에이전트가 채워주도록 설계.

→ 채호 MBTI 적용: 우리도 *콘텐츠 PRD* 한 번 만들고 나면, 거기서 메타 데이터·태그·요약 등을 자동 생성하는 에이전트를 만들 수 있다.

---

### `ui-markup-specialist` — **금지 사항이 핵심**

이 에이전트는 5가지를 **명시적으로 금지**:
- 상태 관리
- 이벤트 핸들러 로직
- API 호출
- 폼 검증
- 비즈니스 로직 / 서버 액션

→ 인사이트: **"내가 안 하는 일"을 frontmatter 와 본문 양쪽에 박으면 다른 에이전트와 충돌이 사라진다.**

또한 3개 MCP 를 절차로 매핑:
- Sequential Thinking → 복잡한 UI 분해
- Context7 → 최신 문서
- Shadcn → 컴포넌트 검색 → 상세 조회 → 예제 → 설치 명령 (4단계)

---

### `prd-generator` — 책임 좁히기

**"절대 생성하지 말 것"** 리스트:
- 개발 우선순위 / 성능 지표 / API 라우트 / 인프라 / 마일스톤 / 개발 단계 / 워크플로우 / 보안 요구사항 / 페르소나

→ PRD 는 **MVP 기능 명세만** 담는다. 나머지는 다른 문서/에이전트 담당.

**정합성 보장 원칙**: 기능 명세 / 메뉴 구조 / 페이지별 상세 기능 세 섹션 간 상호 참조 ID (`F001`, `F002` ...) 강제. PRD 작성 완료 후 **4단계 정합성 검증 체크리스트** 실행.

---

### `prd-validator` — 환각 방지의 정수

본문에 박힌 시스템:

#### 태깅 시스템 (6종)
```
[FACT]        — 공식 문서/원본에 명시된 사실
[INFERENCE]   — 사실에 근거한 합리적 추론
[UNCERTAIN]   — 확실치 않음
[ASSUMPTION]  — 명시되지 않아 가정한 부분
[ALTERNATIVE] — 다른 가능한 해석/구현
[LIMITATION]  — 현재 기술/도구의 한계
```

#### 강제 단계
- **Step 0**: 공식 문서 WebFetch 의무화 (Context7 MCP) — "API 기능을 추측하지 마라"
- **Step 2.5**: 대안 탐색 — "구현 불가능" 판단 전 3개 이상 대안 검토

#### 5단계 판정
1. 검증 완료
2. 조건부 통과
3. 대규모 수정 필요
4. 부분 구현 가능
5. 재검토 필요

→ **이건 그대로 카피해서 채호 MBTI 에 써먹을 수 있다.** 콘텐츠 검증 에이전트에 태깅 시스템 박으면 환각·과장이 줄어듦.

---

## 3. 7개 → 채호 MBTI 적용 시사점

| 짐코딩 | 우리 프로젝트의 대응 후보 |
| --- | --- |
| code-reviewer | `content-reviewer` (콘텐츠 톤·맞춤법·MBTI 정확성 리뷰) |
| development-planner | `roadmap-planner` (4-Phase 적용) |
| nextjs-app-developer | `page-builder` (페이지 빌더, 가이드 내장형으로) |
| starter-cleaner | (적용 불필요) |
| ui-markup-specialist | `static-page-writer` (정적 페이지 작성, 로직 금지) |
| prd-generator | `content-prd-generator` (콘텐츠 기획서 작성) |
| prd-validator | `seo-content-validator` (태깅+판정 시스템 그대로 차용) |

---

## 4. 출처

- [.claude/agents/ 전체 (GitHub)](https://github.com/gymcoding/claude-nextjs-starters/tree/main/.claude/agents)
