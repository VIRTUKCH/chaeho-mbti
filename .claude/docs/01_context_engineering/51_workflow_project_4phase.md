# 51. 프로젝트 워크플로우 — 골격 → UI 더미 → 핵심 → 최적화

> **내가 할 일:** 채호 MBTI 프로젝트 전체를 **4-Phase 구조 우선** 로드맵으로 짠다. 짐코딩 `development-planner` 에이전트가 강제하는 패턴.

---

## 1. 4-Phase 한눈에

| Phase | 무엇을 만든다 | 데이터 | 검증 기준 |
| --- | --- | --- | --- |
| **1. 골격** | 라우팅, 빈 페이지, 레이아웃, Navigation | 없음 | 모든 페이지가 *클릭 가능* |
| **2. UI 더미** | 모든 화면을 더미 데이터로 완성 | **하드코딩 더미** | 모든 화면이 *보임* |
| **3. 핵심 기능** | 실제 데이터·로직·API 연동 | **실제 데이터** | 기능이 *동작함* |
| **4. 최적화** | 성능·SEO·접근성·테스트 | (변동 없음) | Lighthouse 90+ 등 |

---

## 2. 왜 *구조 우선* 인가

### 일반적 실수: 기능 하나씩 완성

```
Day 1: 메인 페이지 디자인 + 데이터 연동 + 광고까지 (한 페이지에 다 함)
Day 2: 결과 페이지 만들려는데 메인 페이지 구조랑 안 맞음 → 다시
Day 3: SEO 추가하려는데 라우팅 변경 필요 → 다시
```

→ 한 페이지를 *완성* 한 다음 다음 페이지로 가면, 전체 구조 변경 비용이 매번 발생.

### 구조 우선

```
Phase 1: 모든 페이지를 *빈 상태로* 먼저 만든다. 라우팅 한 번 확정.
Phase 2: 모든 페이지에 더미 텍스트 채운다. 디자인 한 번 확정.
Phase 3: 한 페이지씩 실제 데이터 연결.
Phase 4: 한 번에 SEO·성능 최적화.
```

→ **각 Phase 가 한 차원만 다룸.** 라우팅을 한 번 정하면 그 다음엔 안 건드림.

---

## 3. 짐코딩 development-planner 의 추가 규칙

- **API 연동·비즈니스 로직 구현 시 Playwright MCP 테스트 필수**
- **Task 파일은 `/tasks/XXX-description.md` 로 별도 분리** (→ [53](./53_task_file_split.md))
- **`000-sample.md` 를 빈 박스 샘플로 두는 패턴**

---

## 4. 채호 MBTI 적용 (예시 로드맵)

### Phase 1 — 골격
- [ ] 라우트: `/`, `/test`, `/result/[type]`, `/about`, `/privacy`
- [ ] 공통 레이아웃: 헤더, 푸터
- [ ] Navigation: 메뉴 4개
- [ ] 광고 자리 (placeholder div) — 메인 / 결과 / 사이드

→ 데이터 0, 디자인 미정. 모든 페이지 클릭 가능.

### Phase 2 — UI 더미
- [ ] 메인 페이지: hero 영역, "테스트 시작" CTA, 더미 텍스트
- [ ] 테스트 페이지: 더미 질문 5개, 보기 4개, 진행 바
- [ ] 결과 페이지 (16타입 중 1개만 더미로): 캐릭터 이미지 placeholder, 더미 설명 텍스트
- [ ] About / Privacy: lorem ipsum

→ 모든 화면이 디자인된 상태로 보임. 데이터는 여전히 가짜.

### Phase 3 — 핵심 기능
- [ ] MBTI 16타입 실제 데이터 JSON
- [ ] 60문항 실제 질문 데이터
- [ ] 점수 계산 로직 (E/I, S/N, T/F, J/P)
- [ ] 결과 페이지 동적 라우팅
- [ ] 결과 공유 (URL, 카카오톡)

→ 실제로 동작.

### Phase 4 — 최적화
- [ ] 메타 태그 (OG, Twitter Card)
- [ ] 사이트맵, robots.txt
- [ ] Lighthouse 90+
- [ ] AdSense 실제 광고 코드 적용
- [ ] GA4 설치

→ 출시 가능 상태.

---

## 5. 4-Phase 로드맵 파일 (`docs/ROADMAP.md`) 템플릿

```markdown
# 채호 MBTI 개발 로드맵

> **현재 단계:** Phase 1 — 골격
> **최종 갱신:** 2026-05-12

---

## Phase 1: 골격 (목표: YYYY-MM-DD)

### Task 001 — 라우팅 설정
- [ ] `/` 페이지 라우트
- [ ] `/test` 페이지 라우트
- [ ] `/result/[type]` 동적 라우트
- 상태: 진행 중

### Task 002 — 공통 레이아웃
- [ ] 헤더 컴포넌트
- [ ] 푸터 컴포넌트
- 상태: 대기

## Phase 2: UI 더미
...

## Phase 3: 핵심 기능
...

## Phase 4: 최적화
...
```

---

## 6. 한 줄 정리

> **한 페이지를 완성하지 말고, 모든 페이지를 같이 한 단계씩 올린다.**

---

## 7. 출처

- [.claude/agents/dev/development-planner.md (raw, 280줄)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/agents/dev/development-planner.md)
