# 02_fe_react/src/styles

**책임:** 전역 스타일. reset, body 폰트, 팔레트 토큰 CSS 변수 정의.

## 진입점

- [global.css](global.css) — 앱 전역에 영향을 주는 유일한 스타일 파일.

## 비자명 제약

- **컴포넌트 스타일은 여기에 두지 않는다.** 페이지·컴포넌트별 스타일은 같은 폴더에 `.module.css`로 (예: `../pages/card-detail.module.css`, `../components/share-bar.module.css`).
- **색은 [@/.claude/ai-context/front_end/color/palette.md](../../../.claude/ai-context/front_end/color/palette.md) 토큰만 쓴다.** `:root` 블록에 CSS 변수로 박고, 컴포넌트는 모두 `var(--token)`으로 참조. hex 직박 금지.
- **모바일 우선 토큰.** `--touch-min: 44px`, body `font-size: 16px` 가 기준선. 줄이려는 경우 README의 "디자인 원칙 — 모바일 우선" 절을 다시 읽기.
- **카드 식별 색** (`--card-love` / `--card-family` / `--card-empathy`)은 모카 톤 안에서만 미세 변주. 새 색 직박 금지 — 팔레트 토큰에 추가하고 var로 참조.
