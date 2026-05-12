import type { CardId, CardMeta } from './types'

// 카드 순서 = 우선순위(연애 > 가족 > 친구 > 직장). 모자이크 노출 순서이기도 함.
// README "카드 4장 모자이크" 단일 소스 진실 원천.
export const CARD_ORDER: CardId[] = ['love', 'family', 'friend', 'work']

export const CARD_META: Record<CardId, CardMeta> = {
  love: {
    id: 'love',
    emoji: '💞',
    label: '연애',
    teaser: '너는 사랑에서 뭘 가장 따지는 사람?',
    openedTeaser: '연애에서 너는 이런 타입이야',
  },
  family: {
    id: 'family',
    emoji: '🏠',
    label: '가족',
    teaser: '집안에서 너는 어떤 자리?',
    openedTeaser: '가족 안에서 너는 이런 자리야',
  },
  friend: {
    id: 'friend',
    emoji: '🫂',
    label: '친구',
    teaser: '친구들 사이에서 너는 어떤 사람?',
    openedTeaser: '친구 사이에서 너는 이런 사람이야',
  },
  work: {
    id: 'work',
    emoji: '💼',
    label: '직장(학교)',
    teaser: '회사·학교에서 너는 어떤 자리?',
    openedTeaser: '직장(학교)에서 너는 이런 사람이야',
  },
}
