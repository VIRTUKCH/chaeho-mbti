# 03. CLAUDE.md — 본문형 (초기/단순 프로젝트용)

> **내가 할 일:** 프로젝트가 단순하거나 막 시작이라 docs 분리가 과한 경우, 본문형 CLAUDE.md 로 시작한다.
> 단, 본문 맨 위에 **언어 규칙** 만큼은 반드시 박는다.

---

## 1. 언제 본문형을 쓰나

- 프로젝트가 단일 페이지 / 정적 HTML 등 작을 때
- 가이드 분리할 만큼 규칙이 많지 않을 때
- *나중에* 인덱스형으로 진화시킬 의도가 있을 때

→ 짐코딩의 `claude-code-mastery` 저장소(강의 1단계용 포트폴리오 사이트)가 이 패턴.

---

## 2. 짐코딩 본문형 원본 (핵심 발췌)

저장소: `gymcoding/claude-code-mastery` · 경로: `/CLAUDE.md` (전체 4.3KB / ~120줄)

```markdown
# CLAUDE.md
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 프로젝트 개요
개발자 웹 이력서(포트폴리오) 웹사이트 개발 프로젝트입니다.

## 기술 스택
- HTML5, CSS3, JavaScript (ES6+), TailwindCSS

## 프로젝트 구조
[ASCII 트리 직접 삽입]

## 개발 명령어
- npm 명령어들

## 주요 섹션 구성
1. Header  2. Hero  3. About  ...

## 코딩 규칙
### HTML — 시맨틱 태그, BEM, ARIA
### CSS/TailwindCSS — 모바일 우선, 유틸리티 클래스 우선
### JavaScript — ES6+, 모듈 패턴, 이벤트 위임, 디바운싱

## 성능 목표
- Lighthouse 90+ / 첫 로딩 3초 이내

## Git 워크플로우
git checkout -b feature/기능명 / fix/버그명 / 한국어 커밋 메시지
```

---

## 3. 핵심: 맨 위 "언어 및 커뮤니케이션 규칙"

이 한 블록이 가장 강력하다. 모든 응답·주석·커밋·문서를 **한국어**로 묶고, 변수/함수만 영어로.

```markdown
## 언어 및 커뮤니케이션 규칙
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)
```

→ 채호 MBTI 프로젝트의 CLAUDE.md 에도 **반드시 맨 위에 이 블록을 넣을 것**.

---

## 4. ⚠️ 본문형의 함정 (짐코딩 파일에서 관찰된 실제 사례)

`claude-code-mastery` CLAUDE.md 맨 아래에는 다음과 같은 단편이 그대로 붙어 있다:

```markdown
2칸 들여쓰기, React 컴포넌트는 PascalCase, API 호출은 async/await,
에러는 try-catch, 테스트는 Jest 사용

# React 규칙
- 컴포넌트명: PascalCase (예: UserProfile)
- Props명: camelCase (예: userName)
```

**문제**: 이 프로젝트는 HTML/CSS/JS 포트폴리오 사이트인데 React·Jest 규칙이 들어가 있음.
**원인 추정**: `/init` 자동 생성 흔적 또는 강의에서 "잘못된 CLAUDE.md 예시"로 의도적으로 남긴 것.
**교훈**: **본문형은 손쉽게 쓰레기 규칙이 쌓인다.** 그래서 짐코딩도 점차 인덱스형으로 진화시켰음.

→ 처음 만들고 끝이 아니다. 정기적으로 *이 규칙이 우리 프로젝트에서 진짜 의미 있나* 점검해야 한다.

---

## 5. 본문형 → 인덱스형 진화 신호

다음 신호가 보이면 인덱스형([02](./02_claude_md_index_pattern.md))으로 갈아탄다:

- CLAUDE.md 가 100줄 / 3KB 를 넘었다
- 같은 규칙이 두 번 이상 등장한다
- 한 세션에서 *실제로 본 적 없는* 규칙이 절반 이상이다
- "이 규칙은 콘텐츠 작성할 때만 필요한데..." 같은 if 분기가 생겼다

---

## 6. 출처

- [claude-code-mastery CLAUDE.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-code-mastery/main/CLAUDE.md)
