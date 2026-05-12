# 30. 슬래시 커맨드 — YAML frontmatter 표준

> **내가 할 일:** `.claude/commands/{도메인}/이름.md` 파일을 만들 때 맨 위에 YAML frontmatter 를 박는다.

---

## 1. 표준 frontmatter

```yaml
---
description: '<한국어 한 문장 설명>'
allowed-tools: ['<권한 토큰 1>', '<권한 토큰 2>', ...]
---
```

---

## 2. 짐코딩 실제 예시

### `commands/docs/update-roadmap.md`

```yaml
---
description: 'ROADMAP.md에서 완료된 작업을 체크하고 진행 상황을 업데이트합니다'
allowed-tools: ['Read(docs/ROADMAP.md:*)', 'Edit(docs/ROADMAP.md:*)']
---
```

### `commands/git/commit.md`

```yaml
---
description: '이모지와 컨벤셔널 커밋 메시지로 잘 포맷된 커밋을 생성합니다'
allowed-tools:
  - 'Bash(git add:*)'
  - 'Bash(git status:*)'
  - 'Bash(git commit:*)'
  - 'Bash(git diff:*)'
  - 'Bash(git log:*)'
---
```

### `commands/git/branch.md`

```yaml
---
description: '브랜치 생성, 전환, 삭제 등 브랜치 관리 작업을 수행합니다'
allowed-tools:
  - 'Bash(git branch:*)'
  - 'Bash(git checkout:*)'
  - 'Bash(git switch:*)'
  - 'Bash(git status:*)'
  - 'Bash(git stash:*)'
  - 'Bash(git log:*)'
  - 'Bash(git fetch:*)'
---
```

---

## 3. 두 필드의 의미

| 필드 | 역할 |
| --- | --- |
| `description` | 사용자가 `/명령어` 쳤을 때 자동완성에 표시. 한국어 한 문장. |
| `allowed-tools` | **이 커맨드가 쓸 수 있는 도구·권한 화이트리스트**. 글로벌 settings.json 보다 강력하다. |

---

## 4. allowed-tools 토큰 문법

```
Read(path:*)            # path 경로 아래만 Read 가능
Edit(path:*)            # path 경로 아래만 Edit 가능
Write(path:*)           # path 경로 아래만 Write 가능
Bash(git add:*)         # 'git add' 로 시작하는 명령만 Bash 가능
Bash(npm:*)             # 'npm' 으로 시작하는 명령만
WebFetch(domain:foo.com) # 특정 도메인만 WebFetch
mcp__shadcn             # 특정 MCP 서버 전체
mcp__shadcn__search_items_in_registries  # 특정 MCP 함수
```

→ **경로 / 명령 / 도메인 / MCP 함수 단위까지 좁힐 수 있다.**

---

## 5. 본문 표준 골격 (짐코딩 5개 커맨드 공통)

```markdown
# /명령어

(한 줄 설명)

## 사용법
`/명령어 [옵션]`

## 주요 기능
1. ...
2. ...

## 프로세스
1. 단계 1: ...
2. 단계 2: ...

## 규칙
- ...

## 사용 예시
- `/명령어 foo` → ...
- `/명령어 bar` → ...

## 문제 해결
- 오류 1: ...

## 통합 기능
- /다른-명령어 와 함께 쓰기
```

---

## 6. 한 줄 정리

> **슬래시 커맨드는 "frontmatter 로 권한 좁히기 + 본문으로 행동 정의" 2층 구조.**
> 글로벌 settings.json 의 권한 대신 *커맨드 단위로 권한을 박는다*.

---

## 7. 출처

- [.claude/commands/docs/update-roadmap.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/commands/docs/update-roadmap.md)
- [.claude/commands/git/commit.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/commands/git/commit.md)
