# 02_fe_react/src

**책임:** React 앱 소스. **3카드 모자이크 구조** (연애 / 가족 / 공감) — 검사 종료 후 카드 3장이 노출되고, 사용자가 한 장씩 펴서 결과를 본다.

## 진입점

- [main.tsx](main.tsx) — React 18 루트 마운트 (`StrictMode`).
- [App.tsx](App.tsx) — 라우터 라이브러리 없이 쿼리 파라미터로 분기.
  - `(없음)` → [pages/Landing.tsx](pages/Landing.tsx)
  - `?view=mosaic` → [pages/Mosaic.tsx](pages/Mosaic.tsx) (3카드 모자이크)
  - `?card=love|family|empathy[&type=…]` → [pages/CardDetail.tsx](pages/CardDetail.tsx)
- [cards/](cards/) — 카드 데이터(연애·가족·공감)와 메타 + 결과 조회 헬퍼.
- [pages/](pages/) — 페이지 단위 컴포넌트 (Landing / Mosaic / CardDetail).
- [components/](components/) — 페이지 간 공유 컴포넌트 (현재는 ShareBar).
- [styles/](styles/) — 전역 스타일 + 팔레트 토큰.

## 비자명 제약

- **전체 사용자 카피는 학술 어휘를 쓰지 않는다.** 백엔드 매핑(Sternberg / Adler / K-EQ)은 [cards/love.ts](cards/love.ts) 등 파일 주석에만 적고, 화면에는 안 노출.
- **카드 우선순위 = 연애 > 가족 > 공감.** [cards/meta.ts](cards/meta.ts)의 `CARD_ORDER` 가 그 순서. 모자이크 노출·카피 다듬기 순서가 모두 여기서 결정.
- **라우터 라이브러리 도입 금지** (react-router 등). 결과지 카피 검증이 1순위라서 의도적으로 쿼리 파라미터 + `history.pushState`만 사용. 테스트 입력 페이지가 붙는 시점이 본격 라우터 검토 시점.
- **데모 모드.** 진짜 테스트(문항·점수 산출)는 아직 안 붙음. 지금은 `Landing → 테스트 시작하기`가 카드별 무작위 결과를 뽑아 localStorage(`chaeho-results-v1`)에 저장한 뒤 모자이크로 보낸다. 실제 테스트 붙으면 [App.tsx](App.tsx)의 `rollDemoResults`만 교체.
- **모바일 우선** (README 참고). 본문 16px+, 터치 타깃 44px+, 9:16 한 스크롤. 모바일 실기기 확인 안 한 UI 변경은 머지 금지.
- **공유는 [components/ShareBar.tsx](components/ShareBar.tsx) 단일 구현.** 카드별로 따로 만들지 말 것. Web Share API → clipboard 폴백.

## 새 카드 / 유형 추가 절차

1. [cards/](cards/) 의 해당 카드 파일(`love.ts` / `family.ts` / `empathy.ts`)에 `CardResult` 객체 추가.
2. (선택) `DEFAULT_TYPE`을 바꾸고 싶으면 같이 변경.
3. 카드 자체를 새로 추가하려면 [cards/types.ts](cards/types.ts) `CardId` 확장 + [cards/meta.ts](cards/meta.ts) `CARD_ORDER`/`CARD_META` 갱신 + [cards/index.ts](cards/index.ts) 매핑 추가.
4. 카피 톤: "당신은 ~한 사람입니다" 류 일반론 금지. **구체적 일상 장면** + **자기조롱 가능한 라벨**. 진지·교훈 톤이 들어가면 즉시 망함.

## 연관 가이드

- 결과 페이지 전략: [@/.claude/ai-context/front_end/pages/results.md](../../.claude/ai-context/front_end/pages/results.md)
- 5단 카피 공식 + 한국 viral 패턴: [@/.claude/docs/04_viral/01_findings.md](../../.claude/docs/04_viral/01_findings.md)
- 새 카피 쓰기 전 필수: [@/.claude/docs/04_viral/02_devils_advocate.md](../../.claude/docs/04_viral/02_devils_advocate.md)
