# 01. CLAUDE.md 작성법 — 인덱스형 + 본문형 + docs/guides

> **내가 할 일:** 루트 CLAUDE.md 는 **40줄 / 1.5KB 이내 인덱스**, 진짜 규칙은 `docs/guides/*.md` 또는 디렉터리별 `CLAUDE.md` 로 분리.

---

## 1. 인덱스형이 기본

### 왜

- AI는 매 세션 CLAUDE.md 를 전부 짊어진다.
- 본문이 길면 → 자주 안 보는 규칙이 매번 토큰을 차지하고 중요한 지시가 묻힘.
- 인덱스로 두면 → AI가 *필요할 때만* `@/docs/guides/foo.md` 추가 로드.

### 짐코딩 표준 6섹션 (`claude-nextjs-starters` 의 CLAUDE.md)

```
1. 프로젝트 한 줄 소개
2. 핵심 기술 스택 (불릿 6–7개)
3. 개발 가이드 링크 (@/docs/...)
4. 자주 사용하는 명령어 (bash 블록)
5. 작업 완료 체크리스트
6. "상세 규칙은 위 가이드 참조" 안내문
```

→ 우리 루트 [CLAUDE.md](../../../CLAUDE.md) 가 이미 이 구조를 따르고 있음. 참고만.

---

## 2. 본문형 (초기/단순 프로젝트용)

### 언제 쓰나

- 프로젝트가 단일 페이지 / 정적 HTML 등 작을 때
- 가이드 분리할 만큼 규칙이 많지 않을 때
- 나중에 인덱스형으로 진화시킬 의도가 있을 때

→ 짐코딩의 `claude-code-mastery` 저장소가 이 패턴.

### 핵심: 맨 위 "언어 및 커뮤니케이션 규칙"

```markdown
## 언어 및 커뮤니케이션 규칙
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)
```

→ 이 한 블록이 가장 강력. 채호 MBTI CLAUDE.md 에도 반드시 박을 것.

### ⚠️ 본문형의 함정

`claude-code-mastery` CLAUDE.md 맨 아래에 React/Jest 규칙이 그대로 붙어 있음 — 하지만 그 프로젝트는 HTML/CSS/JS 포트폴리오. `/init` 자동 생성 흔적으로 추정.
**교훈:** 본문형은 손쉽게 쓰레기 규칙이 쌓인다. 정기적으로 *이 규칙이 진짜 의미 있나* 점검.

### 본문형 → 인덱스형 진화 신호

- CLAUDE.md 가 100줄 / 3KB 를 넘었다
- 같은 규칙이 두 번 이상 등장한다
- 한 세션에서 실제로 본 적 없는 규칙이 절반 이상이다
- "이 규칙은 콘텐츠 작성할 때만 필요한데..." 같은 if 분기가 생겼다

---

## 3. `docs/guides/*.md` — 어떻게 쪼갤지

### 짐코딩 5개 가이드 (`claude-nextjs-starters`)

| 파일 | 크기 | 주제 |
| --- | --- | --- |
| `project-structure.md` | ~350줄 | 트리, 파일명 규칙, 경로 별칭, "300줄 이하" 제한 |
| `styling-guide.md` | ~470줄 | Tailwind 클래스 순서, 색상 변수, `cn()` |
| `component-patterns.md` | ~530줄 | 단일 책임, 컴포지션, Server/Client, CVA |
| `nextjs-15.md` | ~350줄 | App Router, async params, Server Actions |
| `forms-react-hook-form.md` | 1500줄+ | 스키마 분리, RHF + Zod + useActionState |

→ 합계 약 90KB. **본문은 길어도 되고, CLAUDE.md 가 짧으면 된다.**

### 가이드 5개의 공통 패턴

1. **"✅ 올바른 / ❌ 잘못된" 쌍으로 코드 제시** — 안티 패턴을 사전 차단
2. **마지막에 체크리스트 섹션** — AI 가 자기 작업이 끝났는지 자체 검증
3. **한국어 설명 + 영어 코드 + 한국어 주석**

### 우리 프로젝트의 대안 — *디렉터리별 CLAUDE.md*

우리는 짐코딩의 `docs/guides/*.md` 대신 **각 디렉터리에 `CLAUDE.md`** 를 두는 방식을 채택. 코드 가까이에 규칙이 있어야 동기화가 쉽다.

채호 MBTI 가이드 후보:
- 폴더 트리·파일명 규칙 → 각 디렉터리 `CLAUDE.md` 에 분산
- SEO/광고 가이드 → 별도 가이드 (필요 시점에)
- MBTI 데이터 스키마 → 데이터 폴더 `CLAUDE.md`

---

## 4. 가이드 만들 때 체크리스트

- [ ] 가이드 1개 = 주제 1개 (혼합 금지)
- [ ] "✅ / ❌" 쌍을 최소 3개 이상 포함
- [ ] 마지막에 체크리스트 섹션
- [ ] CLAUDE.md 에서 `@/docs/guides/이파일.md` 또는 디렉터리 트리에서 참조 등록
- [ ] 한국어 설명 / 영어 코드 / 한국어 주석 원칙

---

## 5. ⚠️ 가이드는 *동기화*가 어렵다

코드는 바뀌는데 가이드는 안 바뀌면 거짓말. 다음 중 한 가지로 신선도 관리:

- 가이드 맨 위에 "**최종 갱신: YYYY-MM-DD**" 박기
- 큰 리팩토링 시 가이드도 같이 손보는 걸 PR 체크리스트에 추가
- 6개월 된 가이드는 무조건 한 번 검토

---

## 6. 출처

- [claude-nextjs-starters CLAUDE.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/CLAUDE.md)
- [claude-code-mastery CLAUDE.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-code-mastery/main/CLAUDE.md)
- [claude-nextjs-starters docs/guides/](https://github.com/gymcoding/claude-nextjs-starters/tree/main/docs/guides)
