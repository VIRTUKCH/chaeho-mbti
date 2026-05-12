# 02. `.claude/` 디렉터리 — 전체 레이아웃

> **내가 할 일:** 짐코딩 스타일 `.claude/` 를 깔되, 우리만의 추가로 `ai-context/` 와 `docs/` 를 분리해 둔다.

---

## 1. 짐코딩 `claude-nextjs-starters` 트리 (압축)

```
.claude/
├── agents/
│   ├── dev/                   # 개발 담당 에이전트
│   │   ├── code-reviewer.md
│   │   ├── development-planner.md
│   │   ├── nextjs-app-developer.md
│   │   ├── starter-cleaner.md
│   │   └── ui-markup-specialist.md
│   └── docs/                  # 문서 담당 에이전트
│       ├── prd-generator.md
│       └── prd-validator.md
├── commands/
│   ├── docs/                  # /docs:update-roadmap
│   └── git/                   # /git:branch /git:commit /git:merge /git:pr
├── hooks/
│   ├── notification-hook.sh
│   └── stop-hook.sh
└── settings.local.json
.mcp.json
CLAUDE.md
docs/
└── guides/                    # 가이드 5개
```

---

## 2. 핵심 관찰 3개

### ① 에이전트는 `agents/{도메인}/` 구조

`agents/dev/`, `agents/docs/` 처럼 **목적 단위로 그룹**. 채호 MBTI 에 적용: `agents/dev/`, `agents/content/`, `agents/seo/` 등.

### ② 슬래시 커맨드도 `commands/{도메인}/` 구조

`commands/docs/`, `commands/git/`. **네임스페이스가 자동으로 도메인이 됨** (`/docs:update-roadmap`).

### ③ 가이드는 `.claude/` 가 아니라 **루트의 `docs/guides/`**

`.claude/` 는 AI 에이전트 *실행 구성*. 사람도 보는 가이드는 별도. **이게 깔끔한 분리.**

---

## 3. 채호 MBTI 디렉터리 (실제 구조)

```
chaeho-mbti/
├── .claude/
│   ├── agents/                # 아직 비어 있음
│   ├── commands/              # 아직 비어 있음
│   ├── hooks/                 # Slack 알림 도입 시점에
│   ├── ai-context/            # ← 우리만의 추가, AI 가 선택 로드할 압축본
│   ├── docs/                  # ← 우리만의 추가, 영구 가이드 (지금 이 디렉터리)
│   │   ├── 01_context_engineering/  # Claude Code 운영 원칙
│   │   ├── 02_psy/                  # 심리학 이론
│   │   ├── 03_toss_design/          # 토스 디자인
│   │   └── 04_viral/                # 바이럴 체크리스트
│   └── settings.json (예정)
├── .mcp.json (예정)
├── CLAUDE.md
└── docs/                       # 짐코딩의 docs/guides/ 자리. 우리는 디렉터리별 CLAUDE.md 로 분산.
```

### 짐코딩과의 차이

- 우리는 `.claude/ai-context/` 와 `.claude/docs/` 를 **추가**로 둠 (소모성 vs 영구).
- 짐코딩의 `docs/guides/*.md` 대신 우리는 **각 디렉터리에 `CLAUDE.md`** — 코드 가까이.

---

## 4. 만들 때 순서 (체크리스트)

- [ ] `.claude/agents/dev/` 폴더만 먼저 만든다 (콘텐츠/문서는 나중에)
- [ ] `.claude/commands/git/commit.md`, `.claude/commands/git/pr.md` 우선 도입
- [ ] `.claude/settings.json` 안전 기본값 (→ [05_settings_mcp_hooks.md](./05_settings_mcp_hooks.md))
- [ ] `.mcp.json` 기본 (→ [05](./05_settings_mcp_hooks.md))
- [ ] 루트 `CLAUDE.md` 인덱스형 (→ [01_claude_md.md](./01_claude_md.md))
- [ ] 훅은 진짜 필요해질 때만

---

## 5. 출처

- [claude-nextjs-starters tree (GitHub)](https://github.com/gymcoding/claude-nextjs-starters)
