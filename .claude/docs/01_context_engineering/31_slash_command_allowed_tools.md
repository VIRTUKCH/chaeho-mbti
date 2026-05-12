# 31. 슬래시 커맨드 — `allowed-tools` 로 권한 좁히기

> **내가 할 일:** 슬래시 커맨드 frontmatter 의 `allowed-tools` 에서 *파일 경로 단위* 까지 권한을 좁힌다. 글로벌 settings 대신 커맨드별로 다르게.

---

## 1. 왜 글로벌 settings 보다 커맨드 단위가 좋은가

### 글로벌 settings.json 의 한계

```json
{
  "permissions": {
    "allow": ["Read", "Edit", "Write"]
  }
}
```

→ 모든 파일이 항상 Edit 가능. **실수가 너무 비싸진다.**

### 커맨드별 allowed-tools 의 장점

```yaml
# update-roadmap.md
allowed-tools: ['Read(docs/ROADMAP.md:*)', 'Edit(docs/ROADMAP.md:*)']
```

→ 이 커맨드는 **docs/ROADMAP.md 만** 만질 수 있다. 다른 파일 건드리면 즉시 차단.

---

## 2. 짐코딩이 보여주는 5가지 권한 좁히기 패턴

### 패턴 ①: 단일 파일 경로

```yaml
allowed-tools: ['Read(docs/ROADMAP.md:*)', 'Edit(docs/ROADMAP.md:*)']
```
→ `update-roadmap` 커맨드: ROADMAP.md 만.

### 패턴 ②: Bash 서브커맨드 단위

```yaml
allowed-tools:
  - 'Bash(git add:*)'
  - 'Bash(git commit:*)'
  - 'Bash(git diff:*)'
```
→ `commit` 커맨드: git add/commit/diff 만. `rm`, `npm`, 다른 git 서브커맨드는 차단.

### 패턴 ③: 도메인 패밀리

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
→ `branch` 커맨드: 브랜치 관련 git 7개만.

### 패턴 ④: MCP 함수 단위 (짐코딩 settings.local.json 에서 관찰)

```json
"allow": [
  "mcp__shadcn__search_items_in_registries",
  "mcp__context7__resolve-library-id",
  "mcp__context7__get-library-docs"
]
```
→ MCP 서버 전체가 아니라 **특정 함수**만.

### 패턴 ⑤: 글로벌과 결합

settings.json 에서는 Read·Bash 만 글로벌 allow, **개별 커맨드에서 추가로 Edit 권한 부여**.

→ "기본은 안전, 의도된 작업에만 권한" 구조.

---

## 3. 채호 MBTI 적용 예시

### 콘텐츠 작성 커맨드 (안전하게)

```yaml
---
description: '새 MBTI 타입 결과 페이지를 작성합니다'
allowed-tools:
  - 'Read(docs/mbti-data.json:*)'
  - 'Read(src/types/*)'
  - 'Write(src/app/result/[type]/*)'   # 결과 페이지 디렉터리만
  - 'WebFetch(domain:16personalities.com)'  # 참고용 도메인 제한
---
```

### Git 커밋 커맨드 (짐코딩 그대로)

```yaml
---
description: '이모지 + 컨벤셔널 커밋 메시지로 커밋'
allowed-tools:
  - 'Bash(git add:*)'
  - 'Bash(git status:*)'
  - 'Bash(git commit:*)'
  - 'Bash(git diff:*)'
  - 'Bash(git log:*)'
---
```

### 광고 배치 검토 커맨드

```yaml
---
description: '광고 지면 배치를 SEO·UX 관점에서 검토'
allowed-tools:
  - 'Read(src/**:*)'
  - 'Read(docs/guides/seo-and-ads.md:*)'
  # Edit/Write 없음 → 검토만 하고 변경 금지
---
```

---

## 4. 안 좋은 예 (이렇게 하지 말 것)

```yaml
allowed-tools: ['*']           # ❌ 전체 권한
allowed-tools: ['Bash', 'Edit', 'Write']   # ❌ 너무 광범위
```

→ 이러면 커맨드를 따로 만드는 의미가 없어진다.

---

## 5. 만들 때 체크리스트

- [ ] 이 커맨드가 *진짜로* 건드릴 파일·명령만 적었는가
- [ ] Bash 는 서브커맨드 단위로 좁혔는가 (`Bash(*)` 금지)
- [ ] Write 가 *진짜* 필요한가, Read 만으로 충분한가
- [ ] WebFetch 의 도메인을 좁혔는가
- [ ] 커맨드를 잘못 쳤을 때 *최악의 시나리오* 가 무엇인가 — 감당 가능한가

---

## 6. 한 줄 정리

> **권한은 "이 커맨드가 정말로 손댈 곳"까지만 열어둔다.**

---

## 7. 출처

- [.claude/commands/docs/update-roadmap.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/commands/docs/update-roadmap.md)
- [.claude/settings.local.json (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/settings.local.json)
