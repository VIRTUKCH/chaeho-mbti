# 10. `.claude/` 디렉터리 — 전체 레이아웃

> **내가 할 일:** 채호 MBTI 프로젝트 루트에 짐코딩 스타일의 `.claude/` 를 깔고, 같은 자리에 `docs/guides/` 도 깐다.

---

## 1. 짐코딩 `claude-nextjs-starters` 실제 트리

```
claude-nextjs-starters/
├── .claude/
│   ├── agents/
│   │   ├── dev/                       # 개발 담당 에이전트
│   │   │   ├── code-reviewer.md
│   │   │   ├── development-planner.md
│   │   │   ├── nextjs-app-developer.md
│   │   │   ├── starter-cleaner.md
│   │   │   └── ui-markup-specialist.md
│   │   └── docs/                      # 문서 담당 에이전트
│   │       ├── prd-generator.md
│   │       └── prd-validator.md
│   ├── commands/
│   │   ├── docs/                      # 문서 관련 슬래시 커맨드
│   │   │   └── update-roadmap.md
│   │   └── git/                       # Git 관련 슬래시 커맨드
│   │       ├── branch.md
│   │       ├── commit.md
│   │       ├── merge.md
│   │       └── pr.md
│   ├── hooks/
│   │   ├── notification-hook.sh
│   │   └── stop-hook.sh
│   └── settings.local.json
├── .mcp.json
├── CLAUDE.md
└── docs/
    └── guides/
        ├── project-structure.md
        ├── styling-guide.md
        ├── component-patterns.md
        ├── nextjs-15.md
        └── forms-react-hook-form.md
```

---

## 2. 핵심 관찰 3개

### 관찰 ①: 에이전트는 `agents/{도메인}/` 구조

`agents/dev/`, `agents/docs/` 처럼 **목적 단위로 그룹**.
→ 채호 MBTI 에 적용한다면: `agents/dev/`, `agents/content/`, `agents/seo/` 등.

### 관찰 ②: 슬래시 커맨드도 `commands/{도메인}/` 구조

`commands/docs/`, `commands/git/` 으로 그룹.
→ 슬래시 커맨드는 `/docs:update-roadmap` 처럼 **네임스페이스가 자동으로 도메인이 됨**.

### 관찰 ③: 가이드는 `.claude/` 가 아니라 **루트의 `docs/guides/`** 에

`.claude/` 는 AI 에이전트 *실행 구성* 이고, 사람도 보는 가이드는 별도. **이게 깔끔한 분리.**

---

## 3. 채호 MBTI 프로젝트용 디렉터리 (제안)

```
chaeho-mbti/
├── .claude/
│   ├── agents/
│   │   ├── dev/                       # 코드 작업 에이전트
│   │   │   ├── (예: page-builder.md, seo-reviewer.md)
│   │   ├── content/                   # MBTI 콘텐츠 생성 에이전트
│   │   │   ├── (예: mbti-question-writer.md, result-page-writer.md)
│   │   └── docs/                      # 문서 에이전트
│   │       └── (예: prd-generator.md)
│   ├── commands/
│   │   ├── content/                   # 콘텐츠 관련 슬래시 커맨드
│   │   │   └── (예: new-mbti-type.md)
│   │   └── git/
│   │       ├── commit.md
│   │       └── pr.md
│   ├── hooks/
│   │   └── (Slack 알림 도입 여부에 따라)
│   ├── ai-context/                    # ← 우리만의 추가, AI가 선택 로드할 컨텍스트
│   │   └── (작업 종류별 압축본)
│   ├── docs/                          # ← 우리만의 추가, 사람용 노트 (지금 이 디렉터리)
│   │   └── 01_context_engineering/
│   └── settings.json
├── .mcp.json
├── CLAUDE.md
└── docs/
    └── guides/
        ├── seo-and-ads.md             # 채호 MBTI 특화
        ├── content-style.md
        └── (필요한 만큼)
```

### 짐코딩과의 차이점

- 우리는 `.claude/ai-context/` 와 `.claude/docs/` 를 **추가**로 둔다 (AI용 vs 사람용 분리).
- 짐코딩은 `docs/guides/` 만 두지만, 우리는 ai-context 와 docs 를 분리해서 **AI에게 던질 압축본**을 따로 관리.

---

## 4. 만들 때 순서 (체크리스트)

- [ ] `.claude/agents/dev/` 폴더만 먼저 만든다 (콘텐츠/문서는 나중에)
- [ ] `.claude/commands/git/commit.md`, `.claude/commands/git/pr.md` 우선 도입
- [ ] `.claude/settings.json` 안전 기본값 (→ [42](./42_settings_safe_defaults.md))
- [ ] `.mcp.json` 기본 4개 (→ [41](./41_mcp_default.md))
- [ ] 루트 `CLAUDE.md` 인덱스형 (→ [02](./02_claude_md_index_pattern.md))
- [ ] 루트 `docs/guides/` 첫 가이드 1개 (→ [11](./11_docs_guides_split.md))
- [ ] 훅은 진짜 필요해질 때만 추가 (→ [40](./40_hooks_slack.md))

---

## 5. 출처

- [claude-nextjs-starters tree (GitHub)](https://github.com/gymcoding/claude-nextjs-starters)
