# 06. 워크플로우 — 세션 4단계 / 프로젝트 4-Phase / 태깅 / Task 분리

> **내가 할 일:** AI에게 한 번에 시키지 말고, 단위별로 쪼개서 시킨다. 세션·프로젝트·검증·Task 4 층의 패턴.

---

## 1. 세션 워크플로우 — 탐색 → 계획 → 구현 → 커밋

| # | 단계 | AI 가 하는 일 | 내 역할 |
| --- | --- | --- | --- |
| 1 | **탐색** | 코드/문서 읽고 현재 상태 파악 | 결과 확인 |
| 2 | **계획** | 무엇을 어떻게 할지 단계 나열 | 계획 검토·승인 |
| 3 | **구현** | 계획대로 코드 작성 | 진행 모니터링 |
| 4 | **커밋** | 메시지 작성 후 git commit | 메시지 확인 |

### 왜 4단계

**한 번에 시키면:** AI 가 수많은 가정·추측으로 완성 → 의도와 안 맞음 → 토큰·시간 낭비.
**4단계로 쪼개면:** *계획 검토 시점이 가장 비용 효율적인 교정 시점.*

### 각 단계의 명령 예시

```
1. 탐색: "현재 src/app/ 구조를 보고, 비슷한 페이지가 있는지 확인해줘. 변경은 하지 마."
2. 계획: "위 분석을 바탕으로, X 를 구현할 단계별 계획만 적어줘. 코드 작성은 아직."
3. 구현: "좋아. 위 계획 그대로 구현해. (n) 단계는 빼고."
4. 커밋: "/git:commit"
```

→ Plan 모드 (`defaultMode: "plan"`) 켜두면 ① ② 가 자동으로 강제됨.

> **세션은 탐색·계획·구현·커밋 4단계, 가장 비싼 실수는 "계획 없이 구현 시작".**

---

## 2. 프로젝트 워크플로우 — 4-Phase 구조 우선

| Phase | 무엇을 만든다 | 데이터 | 검증 기준 |
| --- | --- | --- | --- |
| **1. 골격** | 라우팅, 빈 페이지, 레이아웃, Nav | 없음 | 모든 페이지 *클릭 가능* |
| **2. UI 더미** | 모든 화면을 더미 데이터로 완성 | 하드코딩 더미 | 모든 화면이 *보임* |
| **3. 핵심 기능** | 실제 데이터·로직·API 연동 | 실제 | 기능이 *동작* |
| **4. 최적화** | 성능·SEO·접근성·테스트 | (변동 없음) | Lighthouse 90+ 등 |

### 왜 *구조 우선*

**기능 하나씩 완성하면:** Day 1 메인 페이지 다 만듦 → Day 2 결과 페이지 만들려는데 구조가 안 맞음 → 다시 → Day 3 SEO 추가하려는데 라우팅 변경 → 다시.

**구조 우선:** 각 Phase 가 *한 차원만* 다룸. 라우팅 한 번 정하면 안 건드림.

### 추가 규칙 (development-planner)

- API 연동·비즈니스 로직 구현 시 **Playwright MCP 테스트 필수**
- Task 파일은 `/tasks/XXX-description.md` 로 별도 분리 (아래 § 4)
- `000-sample.md` 를 빈 박스 템플릿으로

### 채호 MBTI 예시 로드맵

```
Phase 1: 골격
- 라우트: /, /test, /result/[type], /about, /privacy
- 공통 레이아웃: 헤더, 푸터
- 광고 자리 (placeholder div)

Phase 2: UI 더미
- 메인: hero, CTA, 더미 텍스트
- 테스트: 더미 질문 5개, 보기 4개, 진행 바
- 결과 (1타입만): 캐릭터 placeholder, 더미 설명

Phase 3: 핵심 기능
- 16타입 실제 데이터 JSON, 60문항, 점수 계산, 동적 라우팅, 공유

Phase 4: 최적화
- 메타 태그, 사이트맵, Lighthouse 90+, AdSense, GA4
```

> **한 페이지를 완성하지 말고, 모든 페이지를 같이 한 단계씩 올린다.**

---

## 3. 환각 방지 태깅

### 6종 태그

```
[FACT]        — 공식 문서/원본에 명시된 사실
[INFERENCE]   — 사실에 근거한 합리적 추론
[UNCERTAIN]   — 확실치 않음
[ASSUMPTION]  — 명시되지 않아 가정한 부분
[ALTERNATIVE] — 다른 가능한 해석/구현
[LIMITATION]  — 현재 기술/도구의 한계
```

→ `prd-validator.md` (opus) 본문에 박힌 시스템.

### 왜 효과적인가

AI는 자기 추측을 *말투로만* 약하게 표현한다 ("아마도"). 사용자는 그 차이를 잘 못 느끼고 사실로 받아들임 → 비싼 실수.
태그를 **출력 형식으로 강제**하면:

```
[FACT] React 19 에서 `useFormStatus` 는 폼 컴포넌트 내부에서만 동작 [출처: react.dev]
[INFERENCE] 따라서 외부 컴포넌트가 status 를 알려면 props 로 전달해야 한다
[ASSUMPTION] 현재 React 19.1 이 설치되어 있다 (확인 필요)
```

→ 사용자가 각 진술의 *신뢰도* 를 한눈에.

### 적합한 / 부적합한 에이전트

- ✅ 검증, 분석, 의사결정, 리서치
- ❌ 단순 작성 (PRD generator, page builder), 자동화 (commit, branch)

### prd-validator 강제 절차

- **Step 0:** 공식 문서 WebFetch 의무 (Context7 MCP) — "[FACT] 태그를 붙일 권리는 *문서를 본 다음* 에만 생긴다."
- **Step 2.5:** "구현 불가능" 판단 전 **3개 이상 대안 검토** — [ALTERNATIVE] 태그로 명시
- **5단계 판정:** 검증 완료 / 조건부 통과 / 대규모 수정 / 부분 구현 / 재검토

### 채호 MBTI 적용 — `mbti-content-validator` 본문 일부

```markdown
## 검증 절차
### Step 0: 공식 자료 fetch
- 16personalities.com 또는 학술 자료를 WebFetch — 확인 안 한 정보는 [UNCERTAIN] 필수

### Step 1: 진술별 태깅
모든 진술에 [FACT]/[INFERENCE]/[UNCERTAIN]/[ASSUMPTION] 중 하나 + 출처/이유

### Step 2: 대안 검토
- 다르게 설명하는 자료가 있나? → [ALTERNATIVE] 병기

### Step 3: 판정
- 검증 완료 / 조건부 통과 / 수정 필요 / 재검토
```

> **태그는 "AI 가 자기 추측을 사실로 위장하는 것" 을 차단하는 가장 싼 도구.**

---

## 4. Task 파일 분리 — `/tasks/XXX-description.md`

### 패턴

```
프로젝트 루트/
├── docs/ROADMAP.md         # Phase + Task 목록만 (~200줄)
└── tasks/
    ├── 000-sample.md       # 빈 박스 템플릿
    ├── 001-라우팅-설정.md
    ├── 002-공통-레이아웃.md
    └── ...
```

### 왜

**ROADMAP 한 파일에 다 적으면:** 1000줄+ → AI 가 매번 전체 짊어짐 → 갱신 충돌·실수.
**분리하면:** ROADMAP 은 *목차*, AI 에게 시킬 때 *해당 Task 파일만* 로드, 완료된 Task 는 archive.

### Task 파일 표준

```markdown
# Task 001 — 라우팅 설정

> **Phase:** 1 (골격)
> **상태:** 진행 중
> **담당:** dev/nextjs-app-developer
> **시작:** 2026-05-12

## 목표
모든 페이지 경로를 빈 상태로 만든다.

## 작업 항목
- [ ] `/` 라우트
- [ ] `/test` 라우트
- [ ] `/result/[type]` 동적 라우트

## 완료 기준
- [ ] 모든 라우트 클릭 가능
- [ ] 404 페이지 작동
- [ ] `npm run build` 통과

## 참고
- @/docs/guides/project-structure.md

## 메모
(작업 중 발견한 이슈)
```

### ROADMAP 과의 연결

```markdown
## Phase 1: 골격
- [ ] [Task 001 — 라우팅 설정](../tasks/001-라우팅-설정.md)
- [ ] [Task 002 — 공통 레이아웃](../tasks/002-공통-레이아웃.md)
```

→ ROADMAP 짧게, 디테일은 Task 파일.

### AI 호출 패턴

```
❌ Bad: "Phase 1 다 해줘"     → 컨텍스트 폭발
✅ Good: "@tasks/001-라우팅-설정.md 를 봐. 이 Task 부터 시작."
```

### 진행 동기화

Task 끝나면 `/docs:update-roadmap` 슬래시 커맨드 실행 → ROADMAP 체크박스 자동 갱신.

> **ROADMAP 은 목차, Task 는 본문, 한 번에 한 Task 만 AI 에게.**

---

## 5. 출처

- 짐코딩 강의: [클로드 코드 완벽 마스터](https://www.gymcoding.co/courses/claude-code-master)
- [전체강의 통합본 (YouTube)](https://www.youtube.com/watch?v=vxEvo2BLM6A)
- 개별 raw 링크는 [99_references.md](./99_references.md)
