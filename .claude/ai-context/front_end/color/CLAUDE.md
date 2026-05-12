# .claude/ai-context/front_end/color

**책임:** chaeho-mbti 색 팔레트의 단일 출처 (Single Source of Truth).

## 진입점

- [palette.md](palette.md) — 토큰 정의 + CSS 변수 블록 + 사용 규칙.

## 비자명 제약

- **이 프로젝트의 모든 색은 [palette.md](palette.md)의 토큰만 쓴다.** CSS·JSX·svg 어디에도 hex 직박 금지.
- 토큰 추가/변경은 반드시 `palette.md`에 먼저 반영한 뒤 사용. 임시 hex 박지 말 것.
- 다크 모드는 미정의. 도입 결정 시 같은 토큰 이름에 다른 hex만 매핑하고 룰은 그대로.
