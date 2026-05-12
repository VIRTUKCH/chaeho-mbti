# 20. 서브에이전트 — YAML frontmatter 표준

> **내가 할 일:** `.claude/agents/{도메인}/이름.md` 파일을 만들 때 맨 위에 YAML frontmatter 를 박는다. 짐코딩이 7개 에이전트 전부에 같은 형식을 쓴다.

---

## 1. 표준 frontmatter

```yaml
---
name: <kebab-case-name>
description: |
  Use this agent when you need to <영문 한 줄>.
  
  <example>
    Context: <상황 묘사>
    user: "<사용자 요청>"
    assistant: "<응답 또는 에이전트 호출>"
    <commentary>왜 이 에이전트를 부르는지</commentary>
  </example>
  
  <example>
    (두 번째 예시)
  </example>
model: sonnet  # 또는 opus
color: red     # 또는 blue, yellow ...
---
```

---

## 2. 짐코딩 실제 예시 (압축)

### `code-reviewer.md`

```yaml
---
name: code-reviewer
description: |
  Use this agent when you need to perform a professional code review of recently
  written or modified code.
  
  <example>
    Context: 사용자가 새 함수를 짜고 리뷰를 요청
    user: "이 인증 함수 좀 봐줘"
    assistant: "code-reviewer 에이전트로 검토하겠습니다."
    <commentary>방금 작성된 코드 검토 요청이므로 code-reviewer 호출</commentary>
  </example>
model: sonnet
color: yellow
---
```

### `prd-validator.md`

```yaml
---
name: prd-validator
description: Use this agent when you need to validate Product Requirements Documents (PRDs) from a technical perspective.
model: opus
color: red
---
```

---

## 3. 각 필드 의미

| 필드 | 값 | 의미 |
| --- | --- | --- |
| `name` | kebab-case | 에이전트 호출 시 사용. 파일명과 동일해야 안전. |
| `description` | 영문 한 줄 (+ 한국어 example) | **언제 이 에이전트를 부르나** 의 핵심. 라우팅 판단 근거. |
| `model` | `sonnet` / `opus` | 모델 선택. → [22](./22_subagent_model_picking.md) |
| `color` | `red`/`blue`/`yellow`/... | UI 표시 색. 시각적 구분. |

---

## 4. description 잘 쓰는 법

description 은 메인 클로드가 "이 에이전트를 부를까 말까" 판단할 때 보는 부분.

✅ **잘 쓴 예 (짐코딩 실제)**

```
Use this agent when you need to create, update, or maintain a ROADMAP.md file in Korean.
```

→ *언제*, *무엇을* 명시. 라우팅 명확.

❌ **잘못된 예 (이렇게 쓰지 말 것)**

```
이 에이전트는 다양한 작업을 수행하는 만능 에이전트입니다.
```

→ "다양한", "만능" 같은 단어는 라우팅을 어렵게 만듦. 결국 안 불려짐.

### example 블록의 용도

`<example>` 블록은 *AI 에이전트* 가 아니라 *메인 클로드의 라우터* 가 보고 학습. 시나리오를 2~3개 박으면 정확도 ↑.

---

## 5. 한 줄 정리

> **frontmatter 의 description 은 "라우팅 메시지", 본문은 "에이전트의 시스템 프롬프트".**
> 둘을 절대 섞지 말 것.

---

## 6. 출처

- [claude-nextjs-starters .claude/agents/dev/code-reviewer.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/agents/dev/code-reviewer.md)
- [.claude/agents/docs/prd-validator.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/.claude/agents/docs/prd-validator.md)
