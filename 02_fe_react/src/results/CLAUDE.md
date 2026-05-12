# 02_fe_react/src/results

**책임:** MBTI 16유형(또는 64유형) 결과 페이지. **이 프로젝트의 공감 품질 = 바이럴 엔진**이 결정되는 자리.

## 진입점

- [INFP.tsx](INFP.tsx) — 현재 유일하게 작성된 결과지. 다른 유형은 이 톤·구조·섹션 구성을 그대로 따라간다.

## 비자명 제약

- **카피 톤은 무조건 INFP.tsx와 동일 결**. "당신은 ~한 사람입니다" 류 일반론 금지. 대신 *카톡 답장, 회식 끝나고, 새벽 1시* 같은 **구체적 장면** 5개 + *주변에서 자주 듣지만 사실은 다른 말* 섹션이 반드시 들어간다 — 캡처·공유의 트리거.
- 한 유형 = `XXXX.tsx` + `XXXX.module.css` **페어**. 결과 데이터를 JSON으로 분리하지 말 것 — JSX 안에서 직접 편집하는 게 카피 다듬는 데 압도적으로 빠르다 (콘텐츠 = 코드).
- 공유 동작은 `navigator.share` 우선 → 없으면 `clipboard` 폴백. 이 패턴 그대로 복사.
- `채호 MBTI` / `한국식 공감 성격 테스트` 같은 정체성 문구는 결과지 footer에 반드시 — 캡처 이미지에 자연스럽게 워터마크로 박힌다.

## 연관 가이드

- 공감 가설을 부수려 시도한 [@/.claude/docs/04_viral/02_devils_advocate.md](../../../.claude/docs/04_viral/02_devils_advocate.md) — 새 유형 쓰기 전에 다시 읽기.
- 공유 동선 디자인 패턴 [@/.claude/docs/03_toss_design/02_share_engine.md](../../../.claude/docs/03_toss_design/02_share_engine.md).
