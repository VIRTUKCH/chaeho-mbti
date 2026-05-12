# 21. 서브에이전트 — 본문 6골격

> **내가 할 일:** 에이전트 본문은 frontmatter 아래에 **6개 섹션**을 갖춘다. 짐코딩 7개 에이전트가 모두 이 골격을 따른다.

---

## 1. 6골격

```markdown
---
(frontmatter)
---

## 1. 핵심 미션 / 역할
(이 에이전트는 무엇을 하는가, 한 문단)

## 2. 작업 프로세스 (Phase 또는 Step)
Phase 1: ...
Phase 2: ...
Phase 3: ...

## 3. 출력 형식 / 포맷
(마크다운 템플릿 직접 제공)

## 4. 품질 체크리스트
- [ ] ...
- [ ] ...

## 5. 금지 사항 / 안티 패턴
- 절대 ...하지 말 것
- 절대 ...

## 6. 예시
(가능한 시나리오 1~2개)
```

---

## 2. 골격별 자세히

### 골격 1: 핵심 미션 / 역할

한 문단으로 "이 에이전트가 무엇을 하는지" 명확히. 이 에이전트가 *하지 않는 일* 도 함께 정의하면 더 좋다.

**짐코딩 `ui-markup-specialist.md` 예시** — "담당하지 않는 업무" 섹션을 따로 만들어 다음을 **금지**:
- 상태 관리 / 이벤트 핸들러 로직 / API 호출 / 폼 검증 / 애니메이션 / 비즈니스 로직 / 서버 액션

→ 책임 범위를 좁히면 다른 에이전트와 충돌이 없어진다.

---

### 골격 2: 작업 프로세스 (Phase / Step)

**짐코딩 `nextjs-app-developer.md` 의 6 Phase** (1402줄짜리 가장 큰 에이전트):

```
Phase 1: 설계 및 계획 (Sequential Thinking MCP)
Phase 2: 문서 확인 (Context7 MCP)
Phase 3: 구조 생성 (파일/폴더)
Phase 4: UI 컴포넌트 준비 (Shadcn MCP)
Phase 5: 코드 작성
Phase 6: 검토 및 최적화 (Sequential Thinking MCP)
```

→ **각 Phase 에 어떤 MCP 를 쓸지 미리 못박는다.** 이게 핵심.

---

### 골격 3: 출력 형식 / 포맷

**짐코딩 `code-reviewer.md` 의 출력 템플릿**:

```markdown
## 📋 코드 리뷰 요약
## ✅ 잘한 점
## 🔍 개선 필요 사항
### 🚨 심각도: 높음
- **문제**: ...
- **영향**: ...
- **해결방안**: ...
### ⚠️ 심각도: 중간
### 💡 심각도: 낮음
## 📚 추가 권장사항
```

→ AI 출력 형식을 본문에 **마크다운 그대로** 박는다. AI는 이걸 그대로 흉내냄.

---

### 골격 4: 품질 체크리스트

작업 끝났는지 *AI가 스스로 검증* 할 기준.

**짐코딩 `nextjs-app-developer.md`** 에는 약 50개 항목짜리 체크리스트가 들어있음. 분량 신경 쓰지 말고 박는다.

---

### 골격 5: 금지 사항 / 안티 패턴

이게 가장 중요할 수 있다. AI가 *하지 말아야 할 일* 을 명시.

**짐코딩 `prd-generator.md`** — "절대 생성하지 말 것":
- 개발 우선순위
- 성능 지표
- API 라우트
- 인프라
- 마일스톤
- 개발 단계
- 워크플로우
- 보안 요구사항
- 페르소나

→ PRD 는 **MVP 기능 명세만** 담는다. 우선순위는 ROADMAP(다른 에이전트) 담당.
→ **에이전트 간 책임 충돌**을 사전 차단.

---

### 골격 6: 예시

`<example>` 블록을 본문에도 한두 개 박는다. frontmatter 의 example 은 라우팅용, 본문의 example 은 *작업 흐름 시연용*.

---

## 3. 추가 (고급 에이전트만)

복잡한 에이전트는 위 6개에 추가로:

- **MCP 도구 매핑** (Phase 별 어떤 MCP 호출할지)
- **Chain-of-Thought 단계** 명시 (분석 → 이유 → 계획 → 실행 → 검증 → 문서화)
- **태깅 시스템** ([FACT]/[INFERENCE]/[UNCERTAIN] 등) → [52](./52_anti_hallucination_tags.md)
- **5단계 판정 시스템** (검증 완료 / 조건부 통과 / 대규모 수정 / 부분 구현 / 재검토)

---

## 4. 한 줄 정리

> **에이전트 본문은 "역할 + 프로세스 + 출력 포맷 + 체크리스트 + 금지사항 + 예시" 6골격.**
> 그 중 "금지 사항" 이 종종 가장 가치 있다.

---

## 5. 출처

- [.claude/agents/dev/nextjs-app-developer.md (raw, 1402줄)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/agents/dev/nextjs-app-developer.md)
- [.claude/agents/dev/ui-markup-specialist.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/agents/dev/ui-markup-specialist.md)
- [.claude/agents/docs/prd-generator.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/agents/docs/prd-generator.md)
