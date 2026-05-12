# 32. 슬래시 커맨드 — 짐코딩 5개 실제 분석

> **내가 할 일:** 짐코딩이 만든 5개를 한 번 훑어 *어떤 커맨드를 먼저 만들지* 정한다. Git 4개 + ROADMAP 1개.

---

## 1. 5개 한 줄 요약

| # | 커맨드 | 권한 범위 | 핵심 |
| --- | --- | --- | --- |
| 1 | `/docs:update-roadmap` | docs/ROADMAP.md 만 Read/Edit | 대화형으로 완료 Task 받아 자동 체크 |
| 2 | `/git:branch` | git branch/checkout/switch/status/stash/log/fetch | 브랜치 관리 전반 |
| 3 | `/git:commit` | git add/status/commit/diff/log | 이모지+컨벤셔널, **Claude 서명 절대 금지** |
| 4 | `/git:merge` | (위 추정) | FF/No-FF/Squash 3전략 + 충돌 해결 가이드 |
| 5 | `/git:pr` | (위 추정) | 브랜치명 → PR 제목 자동 변환 |

---

## 2. `/docs:update-roadmap` 자세히

**작동 방식**: 사용자가 `/docs:update-roadmap` 치면 → AI가 *대화형* 으로 묻는다:

```
> 어떤 Task를 완료했나요? (예: 004 또는 004,005)
```

→ 답하면 AI 가 자동으로:
- Task 상태 체크박스 갱신
- 하위 체크리스트 갱신
- Phase 완료 여부 갱신
- 완료 날짜 갱신

**인사이트**: 슬래시 커맨드는 **단순 실행** 이 아니라 *대화형 워크플로우* 를 박을 수 있다.

→ 채호 MBTI 적용: `/content:add-mbti-type` 같은 커맨드가 "어떤 타입? 어떤 톤? 어떤 직업군 예시?" 식으로 묻고 한 번에 5개 파일 작성.

---

## 3. `/git:commit` 자세히

### 이모지 매핑 (한 줄에 다 박음)

```
✨ feat | 🐛 fix | 📝 docs | 💄 style | ♻️ refactor | ⚡ perf | ✅ test | 🔧 chore | ...
```

→ 약 50개. 본문에 그대로 박아두면 AI 가 그대로 매칭.

### **중요 규칙** (강하게 명시)

> **커밋에 Claude 서명 절대 추가하지 않음**

→ Claude Code 기본값은 `🤖 Generated with Claude Code` 같은 서명을 다는데, 짐코딩은 이걸 **금지**.

→ 우리도 그대로 카피할 것: 커밋 메시지는 사람이 짠 것처럼 보여야 함.

---

## 4. `/git:branch` 의 가치

브랜치 관리 = git 사용 빈도 1위. 슬래시 커맨드로 묶어두면 매번 `git checkout -b feature/...` 안 쳐도 됨.

**적용**: 채호 MBTI 에서도 `/git:branch` 그대로 도입. **첫 슬래시 커맨드로 추천**.

---

## 5. `/git:merge` 와 `/git:pr` (관찰 가능한 범위)

`/git:merge`:
- Fast-forward / No-fast-forward / Squash 3전략 ASCII 다이어그램
- 충돌 해결 유형 (content / delete-modify / rename) 별 옵션

`/git:pr`:
- 브랜치명 → PR 제목 자동 변환
  예: `feature/user-auth` → `✨ feat: 사용자 인증 기능 추가`
- PR 본문 템플릿 포함

→ 채호 MBTI 사이드 프로젝트는 협업이 적으므로 `/git:merge`, `/git:pr` 은 **나중** 으로 미뤄도 됨.

---

## 6. 우선순위 — 채호 MBTI 에 만들 슬래시 커맨드

| 우선 | 커맨드 | 비고 |
| --- | --- | --- |
| 🔥 즉시 | `/git:commit` | 짐코딩 본문 거의 그대로 카피 가능 |
| 🔥 즉시 | `/git:branch` | 짐코딩 본문 거의 그대로 |
| 🟡 곧 | `/docs:update-roadmap` | 우리 ROADMAP.md 가 생긴 뒤 |
| 🟡 곧 | `/content:new-mbti-type` | MBTI 콘텐츠 생성 자동화 |
| 🟢 나중 | `/git:pr` | 협업 늘면 |
| 🟢 나중 | `/git:merge` | 협업 늘면 |

---

## 7. 한 줄 정리

> **첫 슬래시 커맨드는 `/git:commit` + `/git:branch`. 짐코딩 본문 그대로 베껴 와도 ok.**

---

## 8. 출처

- [.claude/commands/git/commit.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/commands/git/commit.md)
- [.claude/commands/git/branch.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/commands/git/branch.md)
- [.claude/commands/git/merge.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/commands/git/merge.md)
- [.claude/commands/git/pr.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/commands/git/pr.md)
- [.claude/commands/docs/update-roadmap.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/commands/docs/update-roadmap.md)
