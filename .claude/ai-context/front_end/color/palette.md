# 색 팔레트 — chaeho-mbti

> chaeho-mbti의 색은 이 파일에 정의된 토큰만 사용한다. CSS·JSX·svg 어디에도 hex 직박 금지.

---

## 한 줄 결론

**따뜻한 크림 베이스 + 모카 브라운 단일 액센트.** 라이트 모드 우선, 차가운 톤(인디고·토스 블루) 회피. "공감되는 한국식 MBTI"의 친밀한 정서를 시각으로 옮긴 결과.

---

## 결정 근거

### 1. 라이트 모드는 따뜻한 톤이 시각 피로가 적음

2025 UI 디자인 컨센서스: **"Warm colors are gentle on the eyes and evoke positive feelings... enhancing accessibility by providing adequate contrast without harsh brightness."** [1]

→ 베이스를 순백(`#FFFFFF`) 대신 따뜻한 크림(`#FBF9F5`)으로. 눈이 덜 피곤하다.

### 2. 2025-2026 컬러 트렌드 = 따뜻함·부드러움·정서적 안정

Pantone 2025 Color of the Year = **Mocha Mousse (`#A47864`)** — *"a warming brown, imbued with richness, nurturing us with its suggestion of the delectable qualities of chocolate and coffee, and answering our desire for comfort"* [2].

한국 디자인 트렌드(2026): **"수많은 정보로 인해 지친 현대인들의 심신을 달래줄, 편하고 부드러운 컬러가 강세"** [3].

→ 액센트를 모카 계열 갈색(`#8B5A2B`, Mocha Mousse 변주)으로.

### 3. 컬러 심리학: 따뜻한 톤 = 친근감·공감 / 차가운 톤 = 테크·신뢰

> "Warm colors encourage engagement and action, while cool colors foster a calming and trustworthy atmosphere... Warmer tones work well for friendly, lifestyle-oriented apps, while cooler and deeper tones suit professional, luxury, or tech-focused apps." [1]

우리 프로젝트는 "공감되는 한국식 MBTI" — **친근·정서·라이프스타일** 카테고리. 따뜻한 톤이 메시지와 일치.

### 4. 16Personalities(세계 최대 MBTI 사이트) 컬러도 따뜻한 어스 톤

16Personalities 메인 팔레트 = 마우브(`#95637e`), 세이지(`#9ac262`), 피치(`#eed3c2`), 골든(`#e5c727`) [4]. **차가운 파랑·인디고 회피**가 업계 패턴. 따라야 할 이유가 있다 — 사용자가 MBTI 결과 페이지에서 기대하는 시각적 모드가 이미 있음.

### 5. 결과지 캡처가 핵심 자산 → 인스타·카톡 톤 친화

따뜻한 갈색·크림 톤은 인스타그램 피드의 흔한 따뜻한 필터(Clarendon, Valencia, Lo-Fi)와 충돌하지 않고 오히려 강화됨. 차가운 파랑은 따뜻한 피드에 박혔을 때 "튄다."

### 6. 인디고·토스 블루 회피 → 시장 차별화

테크 프로덕트(Linear, Stripe, Vercel)는 인디고, 핀테크(토스)는 파랑이 디폴트. 그 톤에서 멀어질수록 "테크 도구가 아니라 정서 콘텐츠"로 인식됨. 모카·크림은 그 거리를 확실히 만든다.

### 7. AA 콘트라스트 통과

WCAG AA: 본문 4.5:1, 대형 텍스트·UI 컴포넌트 3:1 [5]. 아래 모든 토큰은 이 기준 통과.

---

## 토큰

### 표면 (Surface) — 따뜻한 크림 베이스

| 토큰 | hex | 용도 |
|---|---|---|
| `--bg` | `#fbf9f5` | 페이지 배경 (따뜻한 오프화이트) |
| `--bg-surface` | `#f4efe6` | 카드, 시트 (오트밀크 톤) |
| `--bg-muted` | `#e8dfd0` | 비활성 영역, subtle hint |

### 텍스트 — 워밍 그레이 (espresso)

| 토큰 | hex | 콘트라스트 (vs `--bg`) | 용도 |
|---|---|---|---|
| `--text` | `#2a2520` | 14.8:1 | 본문 본체, 헤드라인 |
| `--text-secondary` | `#5b5043` | 7.0:1 | 보조 텍스트, 캡션 |
| `--text-muted` | `#9b8d7a` | 3.1:1 | placeholder, 비활성 (대형 텍스트·아이콘에만) |
| `--text-on-accent` | `#ffffff` | — | 액센트 면 위 텍스트 |

### 구분선

| 토큰 | hex | 용도 |
|---|---|---|
| `--border` | `#e0d5c2` | 카드·입력 외곽선 기본 |
| `--border-strong` | `#c9bca5` | hover·focus 강조 |

### 액센트 — 모카 브라운 (Mocha Mousse 계열, 단일 메인)

| 토큰 | hex | 콘트라스트 (vs `--bg`) | 용도 |
|---|---|---|---|
| `--accent` | `#8b5a2b` | 5.4:1 | 주요 액션 버튼 면, 강조 아이콘 |
| `--accent-hover` | `#6f4925` | 7.4:1 | hover·active, 본문 안 텍스트 링크 |
| `--accent-pressed` | `#553820` | 9.5:1 | 눌림 상태 |
| `--accent-bg` | `#f4efe6` | — | 선택 상태 배경, soft hint |

### 피드백 (필요할 때만)

| 토큰 | hex | 용도 |
|---|---|---|
| `--success` | `#15803d` | 성공 메시지, 체크 (warm 베이스에 어울리도록 살짝 채도 다운) |
| `--danger` | `#b91c1c` | 에러, 파괴적 작업 경고 (warm 베이스 톤 매칭) |

---

## CSS 변수 (복붙용)

```css
:root {
  /* 표면 — 따뜻한 크림 */
  --bg: #fbf9f5;
  --bg-surface: #f4efe6;
  --bg-muted: #e8dfd0;

  /* 텍스트 — 워밍 그레이 */
  --text: #2a2520;
  --text-secondary: #5b5043;
  --text-muted: #9b8d7a;
  --text-on-accent: #ffffff;

  /* 구분선 */
  --border: #e0d5c2;
  --border-strong: #c9bca5;

  /* 액센트 — 모카 브라운 */
  --accent: #8b5a2b;
  --accent-hover: #6f4925;
  --accent-pressed: #553820;
  --accent-bg: #f4efe6;

  /* 피드백 */
  --success: #15803d;
  --danger: #b91c1c;
}
```

`02_fe_react/src/styles/global.css`의 `:root` 블록에 이걸 그대로 박아 두고, 컴포넌트는 `var(--token)`으로만 참조한다.

---

## 사용 규칙

- 모든 색은 **`var(--token)` 형태**로만 사용한다. hex 직박 금지.
- **버튼 면 = `--accent`, 본문 텍스트 링크 = `--accent-hover`, 눌림 = `--accent-pressed`**. 텍스트 위에 `--accent` 색을 쓰면 AA 통과는 하지만 본문에는 `--accent-hover`가 더 안전.
- 그라데이션이 정말 필요하면 토큰 두 개의 보간으로:
  ```css
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  ```
- 반투명이 필요하면 토큰 hex를 풀어쓰지 말고 동일 토큰의 alpha 버전을 *이 파일에 새 토큰으로 추가*해서 쓴다. 임시 `rgba(...)` 금지.
- 새 시맨틱 컬러(warning, info 등)가 필요해지면 **이 파일에 먼저 추가**한 뒤 사용.
- 토큰 추가/변경은 항상 이 파일이 단일 출처 (Single Source of Truth).

### 60-30-10 룰 (토스 단일 액센트 + 채도 변주와 합치)

권장 분포 [1]:
- 60% — `--bg`, `--bg-surface` (페이지·카드 표면)
- 30% — `--text`, `--text-secondary`, `--border` (구조 요소)
- 10% — `--accent`, `--accent-hover` (액션·강조)

한 화면 안에 액센트가 10%를 넘기면 메시지가 무너진다.

---

## 대안 액센트 (필요해질 때 하나만 골라서 `--accent` 3개 hex만 교체)

모카 1차 결정. 결과지 1개 만들면서 정서가 더 활기 있어야 하거나 자연스러워야 할 때:

| 대안 | `--accent` | `--accent-hover` | `--accent-pressed` | 정서 |
|---|---|---|---|---|
| 소프트 코랄 | `#c2410c` | `#9a3412` | `#7c2d12` | 활기·에너지·친근 (BuzzFeed식) |
| 딥 세이지 | `#4d7c0f` | `#3f6212` | `#365314` | 차분·자연·평온 |

모카가 흔들리지 않는 한 대안은 사용 보류. 토큰 시스템 덕분에 *언제든 무손실 교체*.

---

## 안 쓰는 것

- **인디고·차가운 파랑** — 라이트 모드 정서와 안 맞음. 사용자가 명시 회피 결정.
- **특정 브랜드 컬러 복제** — 토스 디자인은 *원칙*(단일 액센트·라이트 베이스·채도 변주)만 빌린다. 토스 블루(`#1F4EF5` / `#3182F6`)를 그대로 가져오지 않는다.
- **다중 액센트 컬러** (파랑 + 빨강 + 초록 동시) — 정보 위계 무너짐.
- **페이지 단위 그라데이션 배경** — 캡쳐 시 색이 깨지고, 인쇄·접근성 대응 어려움. 결과지 캡쳐가 핵심 자산이므로 단색 배경이 안전.
- **다크 톤 페이지 배경** (`#0a0816`, `#0e0a1f` 등) — 라이트 1차 결정. 다크 모드 도입 결정 전에는 사용 금지.

---

## 출처

[1] [Color Psychology in UI Design: Trends and Insights for 2025 — Mockflow](https://mockflow.com/blog/color-psychology-in-ui-design) — 따뜻한 톤의 시각 피로 감소, 60-30-10 룰, 라이프스타일 앱은 따뜻한 톤.

[2] [Pantone 2025 Color of the Year: Mocha Mousse — Ambius](https://www.ambius.com/resources/blog/trends/2025-pantone-color-mocha-mousse) — Mocha Mousse 정의·정서.

[3] [2026 트렌드 컬러로 겨울 스타일링하는 방법 — Allure Korea](https://www.allurekorea.com/2025/11/12/2026-%ED%8A%B8%EB%A0%8C%EB%93%9C-%EC%BB%AC%EB%9F%AC%EB%A1%9C-%EA%B2%A8%EC%9A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-4/) — 한국 2026 컬러 트렌드 = 부드럽고 편한 톤.

[4] [16personalities mbti Color Palette — color-hex](https://www.color-hex.com/color-palette/1006687) — 16Personalities 메인 팔레트.

[5] [WCAG 2.2 Color Contrast Standards — Accessibility.build](https://www.accessibility.build/tools/color-palette-generator) — AA 콘트라스트 기준 (4.5:1 / 3:1).

[6] [03_toss_design/01_principles_and_system.md §C.1](../../../docs/03_toss_design/01_principles_and_system.md#c1-색상--단일-메인--채도-변주-s13) — 토스의 "단일 메인 + 채도 변주" 원칙 (우리가 차용한 부분).

---

## 한 줄 정리

> **인디고·차가운 톤 회피, 따뜻한 모카 베이스로 "공감 한국식" 정서를 시각화. 토큰만 박혀 있으면 hue 교체는 3개 hex 작업.**
