import type { ResultData } from './types'

export const ISFJ: ResultData = {
  code: 'ISFJ',
  codeSpaced: 'I S F J',
  tagline: '다 챙기고 본인은 못 챙기는',
  title: '다 챙겨주고 본인 거는 못 챙기는 사람',
  killer: '친구 우산은 챙기고, 본인 우산은 어제도 잃어버렸다.',
  summary:
    '부탁 거절을 못 해서 새벽까지 일하고, 친구 생일은 본인이 더 챙긴다. 정작 본인 생일엔 "괜찮아" 하면서 속으론 누가 챙겨주길 기다린다. 다정한 게 천직인데 그 다정함이 본인을 갉아먹는 게 슬픈 점.',
  scenarios: [
    {
      icon: '📋',
      label: '회사',
      text: '다른 사람 부탁 다 받다가 본인 일은 11시에 시작.',
    },
    {
      icon: '🎂',
      label: '친구 생일',
      text: '한 달 전부터 준비. 정작 본인 생일은 "별일 아니야"로 끝.',
    },
    {
      icon: '💊',
      label: '가방 속',
      text: '본인은 안 쓰는 두통약·반창고를 친구 위해 갖고 다닌다.',
    },
    {
      icon: '🍱',
      label: '점심',
      text: '메뉴 고민하는 사람한테 본인 메뉴 양보하고 또 김밥 먹는다.',
    },
    {
      icon: '😴',
      label: '잠들기 전',
      text: '오늘 한 말 중 누구 기분 상하게 한 거 없는지 복기한다.',
    },
  ],
  misheard: [
    '"넌 진짜 천사야" (지친다고요)',
    '"넌 뭐든 괜찮지?" (안 괜찮음)',
    '"쟤는 다 해줘" (그러다 죽음)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '너 같은 사람이 한 명만 있어도 모임이 굴러간다. 너의 다정함은 진짜 재능이야. 다만 너부터 좀 챙겨도 친구들 안 떠난다. 오히려 더 좋아한다.',
  matches: [
    {
      emoji: '🤲',
      type: 'ESTP',
      body: '너 대신 결정해주고 너를 챙기는 가벼운 다정함.',
      vibe: 'good',
    },
    {
      emoji: '🌼',
      type: 'ENFJ',
      body: '너의 챙김을 알아채고 똑같이 돌려주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'ENTP',
      body: '너의 다정함을 당연하게 받기만 하는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 친구 우산만 챙기고 내 우산은 또 잃어버린 사람이래 ㅋㅋㅠ',
}

export default ISFJ
