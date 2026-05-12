# 53. `/tasks/XXX-description.md` — Task 파일로 작업 쪼개기

> **내가 할 일:** 한 Phase 안의 작업들을 *Task 파일 단위* 로 쪼개서 `/tasks/` 디렉터리에 별도 보관. AI에게 한 번에 한 Task 만 시킨다.

---

## 1. 패턴 (짐코딩 development-planner 강제)

```
프로젝트 루트/
├── docs/
│   └── ROADMAP.md          # Phase + Task 목록만
└── tasks/
    ├── 000-sample.md       # 빈 박스 샘플 (템플릿)
    ├── 001-라우팅-설정.md
    ├── 002-공통-레이아웃.md
    ├── 003-네비게이션.md
    └── ...
```

---

## 2. 왜 분리하는가

### ROADMAP.md 한 파일에 다 적으면

- 파일이 길어진다 (1000줄+ 흔함)
- AI 가 매번 전체를 짊어진다
- 진행 상황 갱신할 때 충돌·실수

### Task 파일로 쪼개면

- ROADMAP.md 는 *목차* 만 (~200줄)
- AI 에게 작업 시킬 때 *해당 Task 파일만* 로드
- 완료된 Task 는 파일째로 archive 가능

---

## 3. Task 파일 표준 구조

```markdown
# Task 001 — 라우팅 설정

> **Phase:** 1 (골격)
> **상태:** 진행 중
> **담당:** dev/nextjs-app-developer
> **시작:** 2026-05-12
> **완료:** -

## 목표
Next.js App Router 로 모든 페이지 경로를 만든다. 페이지는 빈 상태.

## 작업 항목
- [ ] `/` 라우트
- [ ] `/test` 라우트
- [ ] `/result/[type]` 동적 라우트
- [ ] `/about` 라우트
- [ ] `/privacy` 라우트

## 완료 기준
- [ ] 모든 라우트가 클릭 가능
- [ ] 404 페이지 작동
- [ ] `npm run build` 통과

## 참고
- @/docs/guides/project-structure.md
- @/docs/guides/nextjs-15.md

## 메모
(작업 중 발견한 이슈, 결정 사항 등)
```

---

## 4. `000-sample.md` 의 역할

빈 박스 템플릿. 새 Task 만들 때 이걸 복사해서 채운다.

→ 짐코딩이 `000-sample.md` 를 따로 두는 이유: **AI 가 새 Task 만들라고 했을 때 형식이 일관되게 유지됨.**

---

## 5. ROADMAP.md 와의 연결

ROADMAP.md 에서는 Task 를 한 줄로만:

```markdown
## Phase 1: 골격

- [ ] [Task 001 — 라우팅 설정](../tasks/001-라우팅-설정.md)
- [ ] [Task 002 — 공통 레이아웃](../tasks/002-공통-레이아웃.md)
- [ ] [Task 003 — 네비게이션](../tasks/003-네비게이션.md)
```

→ ROADMAP 짧게 유지, 디테일은 Task 파일.

---

## 6. AI 호출 패턴

### Bad — 전체 짊어지기

```
"Phase 1 다 해줘"
```

→ AI 가 ROADMAP 전체 + 모든 Task 를 다 봐야 함. 컨텍스트 폭발.

### Good — 한 Task 씩

```
"@tasks/001-라우팅-설정.md 를 봐. 이 Task 부터 시작."
```

→ AI 가 *그 한 파일* 만 짊어짐. 토큰 절약, 집중도 ↑.

---

## 7. 진행 상황 동기화 — 짐코딩 `/docs:update-roadmap` 활용

Task 가 끝나면 `/docs:update-roadmap` 슬래시 커맨드 실행 → ROADMAP.md 의 체크박스 자동 갱신.

→ [32](./32_slash_command_examples.md) 의 update-roadmap 참조.

---

## 8. 한 줄 정리

> **ROADMAP 은 목차, Task 는 본문, 한 번에 한 Task 만 AI에게.**

---

## 9. 출처

- [.claude/agents/dev/development-planner.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/agents/dev/development-planner.md)
- [.claude/commands/docs/update-roadmap.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/commands/docs/update-roadmap.md)
