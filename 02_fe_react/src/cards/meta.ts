import type { CardId, CardMeta } from './types'

// 카드 순서 = 우선순위(연애 > 가족 > 공감). 모자이크 노출 순서이기도 함.
export const CARD_ORDER: CardId[] = ['love', 'family', 'empathy']

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
  empathy: {
    id: 'empathy',
    emoji: '🫶',
    label: '공감',
    teaser: '친구가 울 때 너는 어떤 사람?',
    openedTeaser: '공감 모드에서 너는 이런 사람이야',
  },
}
