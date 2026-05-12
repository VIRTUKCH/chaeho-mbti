# 🤖 Claude Code 개발 지침

**chaeho-mbti** — 기존 MBTI의 "공감되지 않는 결과" 문제를 정조준한 한국식 공감 성격 테스트. 트래픽 확보 → 광고 수익이 사업 모델.

## ⚠️ 단일 소스 진실 원천

**프로젝트의 기획·방향성·의사결정 정답은 [README.md](README.md)다.**

- 이 `CLAUDE.md`, `.claude/docs/**`, 코드 주석 등이 README와 충돌하면 **README가 정답**이다.
- 작업 중 충돌을 발견하면 다른 문서를 README에 맞춰 갱신한다. 그 반대 방향은 금지.
- 새로운 기획·전략 결정은 README에 먼저 반영하고, 다른 문서는 따라간다.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 🛠️ 핵심 기술 스택

- **FE**: React 18 + TypeScript 5 + Vite 5
- **Styling**: CSS Modules + 전역 `styles/global.css`
- **Proxy**: nginx 1.27-alpine (리버스 프록시)
- **Orchestration**: Docker Compose · `--profile feature` / `--profile dev`
- **Host**: `*.atchu.co.kr` (Vite `allowedHosts`로 허용)

## 📚 컨텍스트 가이드

- **🧭 컨텍스트 엔지니어링 원칙**: [@/.claude/docs/01_context_engineering/00_principles.md](.claude/docs/01_context_engineering/00_principles.md)
- **🧠 심리학 기반**: [@/.claude/docs/02_심리_이론/](.claude/docs/02_심리_이론/) — 4카드별 잠정 추천 박힘 (Sternberg TLS / FACES-IV / Davis IRI / BFI-2+HEXACO). 카피 박힌 다음 최종 확정.
- **🎨 토스 디자인**: [@/.claude/docs/03_toss_design/00_overview.md](.claude/docs/03_toss_design/00_overview.md)
- **📈 심리 컨텐츠 시장 조사**: [@/.claude/docs/04_심리_컨텐츠_시장_조사/](.claude/docs/04_심리_컨텐츠_시장_조사/) — 현재 비어있음, 재작성 대기

## ⚡ 자주 사용하는 명령어

```bash
# 작업 중 (HMR · http://localhost:4080)
docker compose --profile feature up -d --build

# 빌드 스냅샷 (http://localhost:4090)
docker compose --profile dev up -d --build

# 내림
docker compose --profile feature down
docker compose --profile dev down
```

## ✅ 작업 완료 체크리스트

```bash
cd 02_fe_react && npm run build          # 타입 + 빌드 통과 확인
docker compose --profile feature up -d   # 실제 동작 확인
```

💡 **모든 디렉터리에 자기 책임을 적은 CLAUDE.md가 있다.** 파일 1:1 설명이 아니라 "이 폴더는 뭘 위한 곳인지 / 어디부터 보면 되는지 / 비자명한 제약은 뭔지"만 적힘.
