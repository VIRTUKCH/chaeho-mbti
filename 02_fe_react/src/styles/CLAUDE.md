# 02_fe_react/src/styles

**책임:** 전역 스타일. `:root` 토큰, reset, body 폰트.

## 진입점

- [global.css](global.css) — 앱 전역에 영향을 주는 유일한 스타일 파일.

## 비자명 제약

- **컴포넌트 스타일은 여기에 두지 않는다.** 페이지·컴포넌트별 스타일은 같은 폴더에 `.module.css`로 (예: `../results/INFP.module.css`).
- 다크 테마 전제. 결과지 배경(`#0e0a1f`)이 `index.html`의 `<meta name="theme-color">`와 동기화되어 있다 — 한 쪽 바꿀 거면 두 쪽 다.
