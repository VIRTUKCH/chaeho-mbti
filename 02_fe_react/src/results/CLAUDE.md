# 02_fe_react/src/results

**책임:** MBTI 16유형 결과 페이지. **이 프로젝트의 공감 품질 = 바이럴 엔진**이 결정되는 자리.

## 진입점

- [types.ts](types.ts) — `ResultData` 타입. 16개 카피 데이터의 계약. `tagline` 한 줄은 그리드 셀용 짧은 카피.
- [TypeGrid.tsx](TypeGrid.tsx) — 16유형 4x4 인덱스. 셀 누르면 결과 카드로 진입.
- [ResultCard.tsx](ResultCard.tsx) — 공통 카드 렌더러. 12블록 골격 + 공유 액션 + 이전/다음 + "← 전체 유형" 백 버튼.
- [result-card.module.css](result-card.module.css) — 16유형 공유 CSS 모듈. 그리드 셀 스타일도 같이 둠. 색 팔레트·타이포 전부 여기.
- [INFP.tsx](INFP.tsx) ~ [ESTJ.tsx](ESTJ.tsx) — 16개 유형 카피 데이터. 각 파일은 `ResultData` 객체 하나만 export.

## 비자명 제약

- **구조 = 공통 골격 + 16개 카피**. 페어 구조(.tsx + .module.css per 유형)는 폐기했다. 시각 일관성이 viral 인식에 더 결정적이고, 32개 파일의 같은 CSS 복붙이 유지보수 악몽이라.
- **카피 편집은 각 `XXXX.tsx`의 객체 안에서 직접**. 외부 JSON으로 분리 금지 — `ResultData` 타입이 보장되는 한 .tsx 안 객체 리터럴이 가장 빠르게 다듬어진다 (콘텐츠 = 코드).
- **12블록 골격은 [@/.claude/ai-context/front_end/pages/results.md](../../../../.claude/ai-context/front_end/pages/results.md) 명세 그대로**. 새 유형 만들 때는 그 문서 5절(16개 유형 컨셉) + 3절(톤 가드레일) 참조.
- 카피 톤: "당신은 ~한 사람입니다" 류 일반론 금지. **구체적 일상 장면**(카톡 답장·새벽 1시·회식 끝나고 등) + **자기조롱 가능한 라벨**. 진지·교훈적 톤이 들어가면 즉시 망함.
- 공유 동작은 [ResultCard.tsx](ResultCard.tsx)의 `handleShare` 단일 구현. `navigator.share` 우선 → `clipboard` 폴백. 유형별로 다르게 만들지 말 것.
- `채호 MBTI` / `한국식 공감 성격 테스트` 정체성 문구는 footer에 고정 — 캡처 이미지에 워터마크로 박힌다.
- 라우팅: [App.tsx](../App.tsx)에서 `?type=INFP` 쿼리 파라미터로 분기. 16유형 순환(다음/이전 버튼). 라우터 라이브러리 도입 금지.

## 새 유형 추가 / 카피 다듬기 절차

1. [@/.claude/ai-context/front_end/pages/results.md](../../../../.claude/ai-context/front_end/pages/results.md) 5절(컨셉) + 3-3절(길이 가이드) 읽기.
2. 기존 `XXXX.tsx` 객체 리터럴 복사 → 새 코드명으로 저장 (또는 기존 유형 카피 갈아끼우기).
3. [App.tsx](../App.tsx)의 `TYPES` 배열에 추가 (신규일 때만).
4. 베타 사용자 N=20~30에 "내 얘기 같다 + 친구한테 보내고 싶다" 두 평균 4점 이상 받을 때까지 카피 재작성.

## 연관 가이드

- 결과 페이지 전략 명세: [@/.claude/ai-context/front_end/pages/results.md](../../../../.claude/ai-context/front_end/pages/results.md)
- 공감 가설 반박 (새 카피 쓰기 전 필수): [@/.claude/docs/04_viral/02_devils_advocate.md](../../../../.claude/docs/04_viral/02_devils_advocate.md)
- 5단 카피 공식 + 한국 viral 패턴: [@/.claude/docs/04_viral/01_findings.md](../../../../.claude/docs/04_viral/01_findings.md)
