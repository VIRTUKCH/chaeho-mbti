# 02_fe_react/src/cards

**책임:** 3카드(연애 / 가족 / 공감)의 데이터 — 메타 + 카드별 결과 카피. 이 프로젝트의 **공감 품질이 결정되는 자리**.

## 진입점

- [types.ts](types.ts) — `CardId` / `CardMeta` / `CardResult` 타입 계약.
- [meta.ts](meta.ts) — `CARD_ORDER` (연애 > 가족 > 공감) + `CARD_META` (이모지·라벨·티저).
- [love.ts](love.ts) — Sternberg TLS-15 기반 7유형. **카피 다듬기 1순위.**
- [family.ts](family.ts) — Adler 출생순위 기반 4유형(맏이/막내/둘째/외동). **카피 다듬기 2순위.**
- [empathy.ts](empathy.ts) — K-EQ 4분위(만렙/균형/단단함/T발놈). **카피 다듬기 3순위.**
- [index.ts](index.ts) — `getResult(cardId, typeId)` / `getTypeIds(cardId)` 헬퍼 + 카드별 기본 typeId.

## 비자명 제약

- **학술 백엔드 / 밈 프론트엔드 분리.** 파일 상단 주석에 백엔드 매핑(Sternberg 등)을 기록하지만 `CardResult` 안의 텍스트에는 학술 어휘가 들어가면 안 됨.
- 카드별 우선순위는 [meta.ts](meta.ts) `CARD_ORDER`가 단일 소스. 다른 곳에서 하드코딩 금지.
- 카피 톤 가드레일은 [@/.claude/ai-context/front_end/pages/results.md](../../../.claude/ai-context/front_end/pages/results.md) 3절 (구체적 일상 장면 + 자기조롱 라벨 + 양극단 캐릭터화).
- 외부 JSON 분리 금지. `CardResult` 타입이 보장되는 한 .ts 안 객체 리터럴이 가장 빠르게 다듬어진다 (콘텐츠 = 코드).

## 새 유형 추가 절차

1. 해당 카드 파일 (`love.ts` 등) 의 `XXX_RESULTS` 레코드에 `CardResult` 객체 추가.
2. typeId 키는 영어 소문자(예: `'consummate'`, `'oldest'`) — URL `?card=love&type=…` 에 그대로 박힌다.
3. 베타 사용자 N=20~30에 "내 얘기 같다 + 친구한테 보내고 싶다" 두 평균 4점 이상 받을 때까지 카피 재작성.
