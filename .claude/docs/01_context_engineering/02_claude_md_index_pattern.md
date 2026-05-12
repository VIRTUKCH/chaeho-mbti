# 02. CLAUDE.md — 인덱스형으로 만들기

> **내가 할 일:** 채호 MBTI 프로젝트 루트의 `CLAUDE.md` 를 **40줄 / 1.5KB 이내** 인덱스로 만들고, 진짜 규칙은 `docs/guides/*.md` 로 빼둔다.

---

## 1. 왜 인덱스형인가

- AI는 매 세션마다 CLAUDE.md 를 전부 짊어진다.
- 본문이 길면 → 자주 안 보는 규칙이 매번 토큰을 차지하고, 중요한 지시가 묻힌다.
- 인덱스로 두면 → AI가 *필요할 때만* `@/docs/guides/foo.md` 를 추가 로드.

---

## 2. 짐코딩의 표준 6섹션 (claude-nextjs-starters)

```
1. 프로젝트 한 줄 소개
2. 핵심 기술 스택 (불릿 6–7개)
3. 개발 가이드 링크 (@/docs/...)
4. 자주 사용하는 명령어 (bash 블록)
5. 작업 완료 체크리스트
6. "상세 규칙은 위 가이드 참조" 안내문
```

---

## 3. 짐코딩 원본 전문 (1차 출처)

저장소: `gymcoding/claude-nextjs-starters` · 경로: `/CLAUDE.md`

```markdown
# 🤖 Claude Code 개발 지침

**claude-nextjs-starters**는 Next.js 15.5.3 + React 19 기반 모던 웹 애플리케이션 스타터 템플릿입니다.

## 🛠️ 핵심 기술 스택

- **Framework**: Next.js 15.5.3 (App Router + Turbopack)
- **Runtime**: React 19.1.0 + TypeScript 5
- **Styling**: TailwindCSS v4 + shadcn/ui (new-york style)
- **Forms**: React Hook Form + Zod + Server Actions
- **UI Components**: Radix UI + Lucide Icons
- **Development**: ESLint + Prettier + Husky + lint-staged

## 📚 개발 가이드

- **🗺️ 개발 로드맵**: `@/docs/ROADMAP.md`
- **📋 프로젝트 요구사항**: `@/docs/PRD.md`
- **📁 프로젝트 구조**: `@/docs/guides/project-structure.md`
- **🎨 스타일링 가이드**: `@/docs/guides/styling-guide.md`
- **🧩 컴포넌트 패턴**: `@/docs/guides/component-patterns.md`
- **⚡ Next.js 15.5.3 전문 가이드**: `@/docs/guides/nextjs-15.md`
- **📝 폼 처리 완전 가이드**: `@/docs/guides/forms-react-hook-form.md`

## ⚡ 자주 사용하는 명령어

​```bash
npm run dev         # 개발 서버 실행 (Turbopack)
npm run build       # 프로덕션 빌드
npm run check-all   # 모든 검사 통합 실행 (권장)
npx shadcn@latest add button    # 새 컴포넌트 추가
​```

## ✅ 작업 완료 체크리스트

​```bash
npm run check-all   # 모든 검사 통과 확인
npm run build       # 빌드 성공 확인
​```

💡 **상세 규칙은 위 개발 가이드 문서들을 참조하세요**
```

---

## 4. 채호 MBTI 프로젝트용 어댑테이션 (초안)

> 그대로 베끼지 말고, 우리 프로젝트의 *기술 스택*과 *가이드 파일*에 맞춰 변형.

```markdown
# 🤖 Claude Code 개발 지침

**chaeho-mbti** 는 MBTI 테스트 콘텐츠를 통해 트래픽을 확보하고 광고 수익을 노리는 사이드 프로젝트입니다.

## 🎯 핵심 목표
- 빠른 콘텐츠 생산 · SEO · 광고 지면 최적화
- 모바일 우선

## 🛠️ 핵심 기술 스택
- (여기에 결정된 스택 채우기 — Next.js? Astro? 정적?)

## 📚 개발 가이드
- **🗺️ 로드맵**: `@/docs/ROADMAP.md`
- **📋 PRD**: `@/docs/PRD.md`
- **🎨 SEO/광고 가이드**: `@/docs/guides/seo-and-ads.md`
- **📝 콘텐츠 작성 가이드**: `@/docs/guides/content-style.md`
- **(필요한 만큼 추가)**

## ⚡ 자주 사용하는 명령어
​```bash
# (실제 명령어로 채우기)
​```

## ✅ 작업 완료 체크리스트
​```bash
# (테스트/빌드 명령으로 채우기)
​```

💡 **상세 규칙은 위 개발 가이드 문서들을 참조하세요**
```

---

## 5. 체크리스트 (만들기 전 점검)

- [ ] 첫 줄은 프로젝트 한 줄 정의인가
- [ ] 기술 스택은 6~7개 이내인가
- [ ] 가이드 링크는 `@/` 로 시작하는 절대 경로인가
- [ ] 본문에 들어간 규칙이 *모든 세션에서* 필요한 것들만인가 (자주 안 쓰면 docs/로 빼라)
- [ ] 전체 분량이 1.5KB / 40줄 안쪽인가
- [ ] 한국어 응답 규칙은 박혔는가 ([03 본문형](./03_claude_md_body_pattern.md) 참고)

---

## 6. 출처

- [claude-nextjs-starters CLAUDE.md (raw)](https://raw.githubusercontent.com/gymcoding/claude-nextjs-starters/main/CLAUDE.md)
