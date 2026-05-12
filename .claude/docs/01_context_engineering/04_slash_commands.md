# 04. 슬래시 커맨드 — YAML + 권한 좁히기 + 짐코딩 5개

> **내가 할 일:** `.claude/commands/{도메인}/이름.md` 파일에 frontmatter 로 권한을 *파일 경로/명령 단위* 까지 좁힌다. 글로벌 settings 대신 커맨드별.

---

## 1. 표준 frontmatter

```yaml
---
description: '<한국어 한 문장 설명>'
allowed-tools: ['<권한 토큰 1>', '<권한 토큰 2>', ...]
---
```

### 두 필드의 의미

| 필드 | 역할 |
| --- | --- |
| `description` | `/명령어` 자동완성에 표시. 한국어 한 문장. |
| `allowed-tools` | **이 커맨드의 도구·권한 화이트리스트**. 글로벌 settings.json 보다 강력. |

### `allowed-tools` 토큰 문법

```
Read(path:*)             # path 경로 아래만 Read
Edit(path:*)             # path 경로 아래만 Edit
Write(path:*)            # path 경로 아래만 Write
Bash(git add:*)          # 'git add' 로 시작하는 명령만
WebFetch(domain:foo.com) # 특정 도메인만
mcp__shadcn              # 특정 MCP 서버 전체
mcp__shadcn__search_items_in_registries  # 특정 MCP 함수
```

→ **경로 / 명령 / 도메인 / MCP 함수 단위까지 좁힐 수 있다.**

---

## 2. 본문 표준 골격 (짐코딩 5개 공통)

```markdown
# /명령어

(한 줄 설명)

## 사용법
`/명령어 [옵션]`

## 주요 기능 / 프로세스 / 규칙 / 사용 예시 / 문제 해결 / 통합 기능
```

---

## 3. 권한 좁히기 — 5가지 패턴

### ① 단일 파일 경로
```yaml
allowed-tools: ['Read(docs/ROADMAP.md:*)', 'Edit(docs/ROADMAP.md:*)']
```
→ `update-roadmap` 커맨드: ROADMAP.md 만.

### ② Bash 서브커맨드 단위
```yaml
allowed-tools:
  - 'Bash(git add:*)'
  - 'Bash(git commit:*)'
  - 'Bash(git diff:*)'
```
→ `commit` 커맨드: git add/commit/diff 만. rm, npm, 다른 git 서브커맨드는 차단.

### ③ 도메인 패밀리
```yaml
allowed-tools:
  - 'Bash(git branch:*)'
  - 'Bash(git checkout:*)'
  - 'Bash(git switch:*)'
  - 'Bash(git status:*)'
  - 'Bash(git stash:*)'
  - 'Bash(git log:*)'
  - 'Bash(git fetch:*)'
```
→ 브랜치 관련 git 7개만.

### ④ MCP 함수 단위
```json
"allow": [
  "mcp__shadcn__search_items_in_registries",
  "mcp__context7__resolve-library-id",
  "mcp__context7__get-library-docs"
]
```
→ 서버 전체가 아니라 **특정 함수**만.

### ⑤ 글로벌과 결합

settings.json 에서는 Read·Bash 만 글로벌 allow, **개별 커맨드에서 추가로 Edit 권한 부여**. "기본은 안전, 의도된 작업에만 권한" 구조.

### ❌ 이렇게 하지 말 것

```yaml
allowed-tools: ['*']                       # 전체 권한
allowed-tools: ['Bash', 'Edit', 'Write']   # 너무 광범위
```

→ 커맨드를 따로 만드는 의미가 없어진다.

---

## 4. 짐코딩 5개 커맨드 — 인사이트 + 우리 우선순위

| # | 커맨드 | 권한 범위 | 핵심 |
| --- | --- | --- | --- |
| 1 | `/docs:update-roadmap` | docs/ROADMAP.md 만 Read/Edit | **대화형** 으로 완료 Task 받아 자동 체크 |
| 2 | `/git:branch` | git branch/checkout/switch/status/stash/log/fetch | 브랜치 관리 전반 |
| 3 | `/git:commit` | git add/status/commit/diff/log | 이모지+컨벤셔널, **Claude 서명 절대 금지** |
| 4 | `/git:merge` | (위 추정) | FF/No-FF/Squash 3전략 + 충돌 가이드 |
| 5 | `/git:pr` | (위 추정) | 브랜치명 → PR 제목 자동 변환 |

### 인사이트

- **`/docs:update-roadmap`** 은 *대화형 워크플로우*. 슬래시 커맨드 = 단순 실행만이 아님. → `/content:add-mbti-type` 도 "어떤 타입? 어떤 톤?" 묻고 한 번에 여러 파일 작성 가능.
- **`/git:commit`** — 이모지 매핑 50개를 본문에 박아두면 AI 가 그대로 매칭. **"커밋에 Claude 서명 절대 추가하지 않음"** 명시 (Claude Code 기본 `🤖 Generated with Claude Code` 차단).
- **`/git:branch`** — 첫 슬래시 커맨드로 추천. git 사용 빈도 1위.

### 채호 MBTI 만들기 우선순위

| 우선 | 커맨드 | 비고 |
| --- | --- | --- |
| 🔥 즉시 | `/git:commit` | 짐코딩 본문 거의 그대로 카피 |
| 🔥 즉시 | `/git:branch` | 짐코딩 본문 거의 그대로 |
| 🟡 곧 | `/docs:update-roadmap` | ROADMAP.md 생긴 뒤 |
| 🟡 곧 | `/content:new-mbti-type` | MBTI 콘텐츠 자동화 |
| 🟢 나중 | `/git:pr`, `/git:merge` | 협업 늘면 |

---

## 5. 만들 때 체크리스트

- [ ] 이 커맨드가 *진짜로* 건드릴 파일·명령만 적었는가
- [ ] Bash 는 서브커맨드 단위로 좁혔는가 (`Bash(*)` 금지)
- [ ] Write 가 *진짜* 필요한가, Read 만으로 충분한가
- [ ] WebFetch 의 도메인을 좁혔는가
- [ ] 커맨드를 잘못 쳤을 때 *최악의 시나리오* 가 무엇인가 — 감당 가능한가

---

## 6. 한 줄 정리

> **권한은 "이 커맨드가 정말로 손댈 곳"까지만 열어둔다. 글로벌은 보수적으로, 확장은 커맨드 단위로.**

---

## 7. 출처

- 짐코딩 commands/ raw 링크는 [99_references.md](./99_references.md)
