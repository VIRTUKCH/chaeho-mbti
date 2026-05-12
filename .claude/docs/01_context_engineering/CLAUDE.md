# .claude/docs/01_context_engineering

**책임:** Claude Code 운영 원칙 모음 (짐코딩 5원칙 + 확장).

## 진입점

- [00_principles.md](00_principles.md) — 5원칙 + 11 안티패턴 + 짐코딩 한 줄 (먼저 보고 가는 곳).
- [01_claude_md.md](01_claude_md.md) — CLAUDE.md 작성법 (인덱스/본문/가이드 분리).
- [02_directory_layout.md](02_directory_layout.md) — `.claude/` 디렉터리 레이아웃.
- [03_subagents.md](03_subagents.md) — 서브에이전트 (YAML + 6골격 + 모델 선택 + 짐코딩 7개).
- [04_slash_commands.md](04_slash_commands.md) — 슬래시 커맨드 (YAML + 권한 좁히기 + 짐코딩 5개).
- [05_settings_mcp_hooks.md](05_settings_mcp_hooks.md) — settings.json + .mcp.json + 훅.
- [06_workflows.md](06_workflows.md) — 세션 4단계 + 프로젝트 4-Phase + 태깅 + Task 분리.
- [99_references.md](99_references.md) — 출처 URL.

## 비자명 제약

- 번호는 **주제 순서**. 같은 자리수 안에서 새 파일 추가하지 말 것 — 24개로 흩어졌던 걸 8개로 통합한 결과다. 더 쪼개고 싶으면 통합 파일 안의 섹션으로.
- 우리 스택은 React + Vite + CSS Modules. 짐코딩의 Next.js/shadcn 디테일은 *원칙만* 차용, 그대로 베끼지 말 것.
