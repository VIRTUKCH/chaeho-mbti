# 11. `docs/guides/` — 어떻게 쪼갤지

> **내가 할 일:** 루트 `docs/guides/` 에 가이드 파일 5개 안팎을 만들고, CLAUDE.md 에서 `@/docs/guides/foo.md` 로 참조한다.

---

## 1. 짐코딩이 만든 5개 가이드 (`claude-nextjs-starters`)

| 파일 | 크기 | 주제 |
| --- | --- | --- |
| `project-structure.md` | 9.2KB / ~350줄 | 전체 트리, 파일명 규칙, 경로 별칭, "300줄 이하" 제한 |
| `styling-guide.md` | 11.4KB / ~470줄 | Tailwind 클래스 순서, 시맨틱 색상 변수, `cn()` 헬퍼 |
| `component-patterns.md` | 16.5KB / ~530줄 | 단일 책임, 컴포지션, Server/Client 경계, Polymorphic, CVA |
| `nextjs-15.md` | 11.8KB / ~350줄 | App Router 강제, async params, Server Actions, Route Groups |
| `forms-react-hook-form.md` | 41.7KB / 1500줄+ | 스키마 분리, RHF + Zod + useActionState 통합 |

→ 합계 약 90KB. **본문은 길어도 되고, CLAUDE.md 가 짧으면 된다.**

---

## 2. 가이드 5개의 공통 패턴

짐코딩의 가이드들이 모두 따르는 형식:

### 패턴 ①: "✅ 올바른 / ❌ 잘못된" 쌍으로 코드 제시

```markdown
### 클래스 이름 짓기

✅ 올바른:
<Button variant="primary" />

❌ 잘못된:
<Button class="bg-blue-500 text-white" />
```

→ AI에게 *피해야 할 것*을 명시적으로 알려준다. 안티 패턴을 사전에 차단.

### 패턴 ②: 마지막에 체크리스트 섹션

```markdown
## ✅ 작업 완료 체크리스트
- [ ] 모든 파일이 300줄 이하인가
- [ ] kebab-case 파일명, PascalCase 컴포넌트인가
- [ ] 경로 별칭 (@/components 등)을 사용했는가
```

→ AI가 *자기 작업이 끝났는지 자체 검증*할 수 있는 기준 제공.

### 패턴 ③: 한국어 설명 + 영어 코드 + 한국어 주석

```typescript
// 모바일 우선 반응형 클래스
const buttonClass = "w-full md:w-auto px-4 py-2";
```

---

## 3. 채호 MBTI 프로젝트용 가이드 후보 (제안)

> 우리 프로젝트의 *반복 결정 사항* 을 가이드로 빼낸다.

| 가이드 후보 | 무엇을 적나 |
| --- | --- |
| `docs/guides/content-style.md` | MBTI 콘텐츠 톤·앤·매너, 결과 페이지 구조, 문장 길이 |
| `docs/guides/seo-and-ads.md` | 메타 태그 규칙, 광고 지면 배치 원칙, Lighthouse 목표 |
| `docs/guides/project-structure.md` | 폴더 트리, 파일명 규칙 (짐코딩 그대로 차용 가능) |
| `docs/guides/styling-guide.md` | (Tailwind 쓴다면) 클래스 순서, 색상 변수 |
| `docs/guides/mbti-data-schema.md` | MBTI 16타입 데이터 스키마, 질문/결과 JSON 구조 |

---

## 4. 가이드 만들 때 체크리스트

- [ ] 가이드 1개 = 주제 1개 (혼합 금지)
- [ ] "✅ 올바른 / ❌ 잘못된" 쌍을 최소 3개 이상 포함
- [ ] 마지막에 체크리스트 섹션
- [ ] CLAUDE.md 에서 `@/docs/guides/이파일.md` 로 참조 등록
- [ ] 한국어 설명 / 영어 코드 / 한국어 주석 원칙 유지

---

## 5. ⚠️ 주의: 가이드는 *동기화*가 어렵다

코드는 바뀌는데 가이드는 안 바뀌면 거짓말이 된다. 다음 중 한 가지로 신선도를 관리:

- 가이드 맨 위에 "**최종 갱신: YYYY-MM-DD**" 박기
- 큰 리팩토링 시 가이드도 같이 손보는 걸 PR 체크리스트에 추가
- 6개월 된 가이드는 무조건 한 번 검토

---

## 6. 출처

- [claude-nextjs-starters docs/guides/](https://github.com/gymcoding/claude-nextjs-starters/tree/main/docs/guides)
