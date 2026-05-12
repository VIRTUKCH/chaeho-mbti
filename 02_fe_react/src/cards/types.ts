// 3카드 모자이크: 연애 / 가족 / 공감
// 각 카드는 백엔드 학술 척도(Sternberg/Adler/K-EQ)로 정답을 산출하지만
// 사용자 노출 카피는 학술 어휘를 쓰지 않는다 (학술 백엔드 / 밈 프론트엔드 분리).

export type CardId = 'love' | 'family' | 'empathy'

export type CardMeta = {
  id: CardId
  emoji: string
  label: string // 연애 / 가족 / 공감
  teaser: string // 모자이크 카드에서 "아직 안 본" 상태 카피 (호기심 자극)
  openedTeaser: string // 펼친 후 모자이크 카드에서 보일 한 줄 (typeId 결정 후)
}

export type Scenario = {
  icon: string
  label: string
  text: string
}

export type CardResult = {
  cardId: CardId
  typeId: string // 'consummate' / 'oldest' / 'high' 등
  badge: string // 짧은 라벨 ("완성된 사랑형", "맏이형", "공감 만렙형")
  title: string // 한 줄 헤드라인 (정곡 찌르는 문장)
  killer: string // 카드 펼치자마자 박히는 한 문장
  summary: string // 2~3문장
  scenarios: Scenario[] // 구체적 일상 장면 3~4개
  misheard: string[] // "주변에서 자주 듣지만 사실은 다른 말"
  reframeTitle: string // 위로/리프레임 헤더
  reframeBody: string
  shareCaption: string // 공유 시 박힐 짧은 문구
}
