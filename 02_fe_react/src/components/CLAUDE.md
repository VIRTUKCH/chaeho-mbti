# 02_fe_react/src/components

**책임:** 페이지 간 공유 컴포넌트. 페이지별로 다르게 만들지 않는 공통 UI.

## 진입점

- [ShareBar.tsx](ShareBar.tsx) — 친구 공유 단일 진입점 (카톡·메시지 / 인스타 스토리 / 링크 복사 / 친구 결과 비교).

## 비자명 제약

- **공유 동작은 [ShareBar.tsx](ShareBar.tsx) 한 곳.** 카드별·페이지별로 다르게 만들지 말 것. 공유 카피만 prop으로 받는다.
- Web Share API → clipboard 폴백. 카카오 SDK는 아직 안 붙음 (트래픽 검증 전 의도적 보류).
- 인스타 스토리 캡처 자동 다운로드는 다음 단계 (html2canvas). 지금은 안내 토스트만.
