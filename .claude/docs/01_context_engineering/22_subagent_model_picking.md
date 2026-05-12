# 22. 서브에이전트 — `model: opus` vs `model: sonnet`

> **내가 할 일:** 에이전트 frontmatter 의 `model` 필드를 결정할 때, **검증·분석·계획 = opus, 실행·구현 = sonnet** 패턴을 따른다.

---

## 1. 짐코딩의 실제 매핑

| 에이전트 | model | 역할 |
| --- | --- | --- |
| `code-reviewer` | sonnet | 코드 리뷰 (실행에 가까움) |
| `development-planner` | **opus** | 로드맵 계획 (분석·전략) |
| `nextjs-app-developer` | sonnet | App Router 구현 (실행) |
| `starter-cleaner` | sonnet | 스타터 정리 (실행) |
| `ui-markup-specialist` | sonnet | 정적 마크업 (실행) |
| `prd-generator` | sonnet | PRD 작성 (정해진 포맷 채움) |
| `prd-validator` | **opus** | PRD 기술 검증 (판단·반박) |

→ 7개 중 **2개가 opus, 5개가 sonnet**.

---

## 2. 패턴화

| 작업 성격 | 추천 모델 | 이유 |
| --- | --- | --- |
| 코드/문서 *작성* (정해진 포맷 채움) | sonnet | 빠르고 충분히 정확. 비용 낮음. |
| 코드/문서 *리뷰·검증* | sonnet 또는 opus | 단순 리뷰는 sonnet, 환각·논리적 누락 잡아야 하면 opus |
| 로드맵·아키텍처 *설계* | **opus** | 큰 그림. 여러 대안 비교. |
| 추측·확정 *분리* (태깅 시스템) | **opus** | 메타인지 필요. sonnet 은 종종 자기 추측을 사실로 단정. |
| 환각 검증·대안 탐색 | **opus** | "3개 이상 대안 검토" 같은 절차에 강함. |

---

## 3. opus 가 빛나는 시점

짐코딩의 `prd-validator` 가 opus 인 이유를 보면 명확하다:

- 본문에 **태깅 시스템** 강제: `[FACT]` / `[INFERENCE]` / `[UNCERTAIN]` / `[ASSUMPTION]` / `[ALTERNATIVE]` / `[LIMITATION]`
- **Step 0** 강제: 공식 문서 WebFetch 의무화 (API 기능 추측 금지)
- **Step 2.5** 강제: "구현 불가능" 판단 전 3개 이상 대안 검토
- **5단계 판정**: 검증 완료 / 조건부 통과 / 대규모 수정 / 부분 구현 / 재검토

→ 이런 *메타인지* 작업은 sonnet 이 종종 흉내만 내고 실제로는 안 한다. opus 는 진짜로 한다.

---

## 4. 비용 고려

opus 가 sonnet 보다 비싸다 (대략 5배). 그래서:

- **자주 호출되는 에이전트 = sonnet**
- **드물게 호출되지만 결정적인 에이전트 = opus**

짐코딩의 비율(opus 2 : sonnet 5)도 이 휴리스틱을 따른 것으로 보임.

---

## 5. 채호 MBTI 적용 (제안)

| 에이전트 후보 | model |
| --- | --- |
| `mbti-question-writer` (질문 생성) | sonnet |
| `mbti-result-page-writer` (결과 페이지 작성) | sonnet |
| `seo-reviewer` (SEO 검증) | sonnet |
| `traffic-strategy-planner` (트래픽 전략 설계) | **opus** |
| `ad-placement-validator` (광고 배치 적정성 판단) | **opus** |
| `commit-message-generator` | sonnet |

→ 대략 2:4~5 비율.

---

## 6. 한 줄 정리

> **만들 거면 sonnet, 판단할 거면 opus.**

---

## 7. 출처

- [짐코딩 .claude/agents/ 전체 (GitHub)](https://github.com/gymcoding/claude-nextjs-starters/tree/main/.claude/agents)
