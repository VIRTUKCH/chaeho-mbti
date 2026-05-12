# 52. 환각 방지 태깅 시스템

> **내가 할 일:** 검증·판단 에이전트의 본문에 6종 태그를 박는다. AI 가 *확정 vs 추측* 을 구분해 답하게 만든다.

---

## 1. 6종 태그

```
[FACT]        — 공식 문서/원본에 명시된 사실
[INFERENCE]   — 사실에 근거한 합리적 추론
[UNCERTAIN]   — 확실치 않음
[ASSUMPTION]  — 명시되지 않아 가정한 부분
[ALTERNATIVE] — 다른 가능한 해석/구현
[LIMITATION]  — 현재 기술/도구의 한계
```

→ 짐코딩의 `prd-validator.md` (opus 모델) 본문에 박혀 있는 태깅 시스템.

---

## 2. 왜 태그가 효과적인가

AI는 자기 추측을 *말투로만* 살짝 약하게 표현하는 경향이 있다 ("아마도", "보통은").
→ 사용자는 그 차이를 잘 못 느끼고 *사실로 받아들임* → 비싼 실수.

태그를 **출력 형식으로 강제** 하면 다르다:

```
[FACT] React 19 에서 `useFormStatus` 는 폼 컴포넌트 내부에서만 동작한다 [출처: react.dev]
[INFERENCE] 따라서 우리 폼에서 외부 컴포넌트가 status 를 알려면 props 로 전달해야 한다
[ASSUMPTION] 현재 React 19.1 이 설치되어 있다 (확인 필요)
```

→ 사용자가 각 진술의 *신뢰도* 를 한눈에 본다.

---

## 3. 어디에 박나

### 적합한 에이전트
- ✅ 검증 (PRD validator, code reviewer)
- ✅ 분석 (성능 분석, SEO 분석)
- ✅ 의사결정 (라이브러리 비교, 아키텍처 선택)
- ✅ 리서치 (외부 정보 조사)

### 부적합한 에이전트
- ❌ 단순 작성 (PRD generator, page builder) — 출력이 산문이 아니라 코드/문서라 태그 박을 데가 없음
- ❌ 자동화 (commit, branch) — 사실 진술이 거의 없음

---

## 4. 짐코딩 prd-validator 의 강제 절차

태깅만 박는 게 아니라 *절차*도 강제한다:

### Step 0 — 공식 문서 의무 fetch
> **"API 기능을 추측하지 마라. context7 MCP 로 공식 문서를 fetch 한 후에만 검증하라."**

→ [FACT] 태그를 붙일 권리는 *문서를 본 다음*에만 생긴다.

### Step 2.5 — 대안 의무 탐색
> **"'구현 불가능' 판단을 내리기 전에 3개 이상의 대안을 검토하라."**

→ [ALTERNATIVE] 태그로 그 대안들을 명시.

### 5단계 판정 결과
1. 검증 완료 (다 [FACT] 로 뒷받침)
2. 조건부 통과 ([ASSUMPTION] 일부)
3. 대규모 수정 필요
4. 부분 구현 가능 ([LIMITATION] 명시)
5. 재검토 필요

---

## 5. 채호 MBTI 적용 예시

### `mbti-content-validator` 에이전트 본문 일부

```markdown
## 검증 절차

### Step 0: 공식 자료 fetch
- 16personalities.com 또는 학술 자료를 WebFetch 로 확인
- 확인 안 한 정보는 [UNCERTAIN] 태그 필수

### Step 1: 진술별 태깅
모든 진술에 다음 태그 중 하나:
- [FACT] — 출처와 함께
- [INFERENCE] — 어떤 사실에서 추론했는지 명시
- [UNCERTAIN] — 왜 불확실한지 명시
- [ASSUMPTION] — 무엇을 가정했는지 명시

### Step 2: 대안 검토
- 같은 MBTI 타입을 다르게 설명하는 자료가 있나? → [ALTERNATIVE] 로 병기

### Step 3: 판정
- 검증 완료 / 조건부 통과 / 수정 필요 / 재검토 필요
```

---

## 6. 한 줄 정리

> **태그는 "AI 가 자기 추측을 사실로 위장하는 것" 을 차단하는 가장 싼 도구.**

---

## 7. 출처

- [.claude/agents/docs/prd-validator.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/agents/docs/prd-validator.md)
