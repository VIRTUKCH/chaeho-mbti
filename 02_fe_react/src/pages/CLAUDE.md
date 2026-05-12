# 02_fe_react/src/pages

**책임:** 페이지 단위 컴포넌트. App.tsx의 라우트 분기 대상.

## 진입점

- [Landing.tsx](Landing.tsx) — `(없음)` 라우트. 3카드 미리보기 + "테스트 시작" / "데모 결과 미리보기".
- [Mosaic.tsx](Mosaic.tsx) — `?view=mosaic`. 3장의 카드를 세로로 쌓아 보여줌. 클릭하면 카드별 상세로.
- [CardDetail.tsx](CardDetail.tsx) — `?card=<id>`. 단일 카드의 12블록 결과 + 공유 액션.
- 각 컴포넌트별 `*.module.css`가 같은 폴더에 동봉.

## 비자명 제약

- 각 페이지는 props로만 라우팅 콜백을 받는다 (`onStart`, `onOpenCard`, `onBack` 등). 컴포넌트 안에서 직접 `window.location`을 만지지 말 것 — 라우팅은 [../App.tsx](../App.tsx) 단일 책임.
- 페이지별 CSS 모듈은 페이지마다 다르지만 색·간격 토큰은 전부 [../styles/global.css](../styles/global.css) `var(--…)`만 사용. hex 직박 금지.
- **모바일 우선.** 본문 16px+, 터치 타깃 44px+, 9:16 한 스크롤로 다 들어가는 구성. 카드 상세는 인스타 스토리에 그대로 박힐 수 있어야 한다.
