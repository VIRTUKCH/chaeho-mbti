# 02_fe_react/src

**책임:** React 앱 소스. 현재는 결과지 16유형 프로토타입 단계 — 검증 가설은 *"16개 결과지 중 4점 이상의 공감을 받는 카피가 몇 개인가"*.

## 진입점

- [main.tsx](main.tsx) — React 18 루트 마운트 (`StrictMode`).
- [App.tsx](App.tsx) — `?type=XXXX` 쿼리 파라미터로 분기. 값 없으면 16유형 4x4 그리드(TypeGrid), 있으면 결과 카드(ResultCard) + 이전/다음 순환. 라우터 라이브러리 없음 (의도적).
- [results/](results/) — 결과 페이지 본체 + 그리드 셀렉터. 12블록 골격 + 16개 카피 데이터.

## 비자명 제약

- 전역 스타일은 [styles/global.css](styles/global.css) **한 곳에만** 둔다. 결과 카드 시각은 [results/result-card.module.css](results/result-card.module.css) 단일 모듈에서 16유형 공유.
- **라우터 라이브러리 도입 금지** (react-router 등). 결과지 카피 검증이 1순위라 의도적으로 쿼리 파라미터 + `history.replaceState`만 사용. 테스트 입력 페이지를 붙이는 시점이 본격 라우터 도입 시점.
- 컴포넌트 / 디렉터리 구조 결정은 *결과지 카피 검증이 끝난 뒤* — 그 전에 추가 추상화 들어가지 말 것. (`ResultCard` + `ResultData` 분리는 16유형 viral 일관성 확보용으로 의도적 도입.)
