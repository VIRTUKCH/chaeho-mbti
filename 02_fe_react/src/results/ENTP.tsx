import type { ResultData } from './types'

export const ENTP: ResultData = {
  code: 'ENTP',
  codeSpaced: 'E N T P',
  tagline: '이기려고 의견 반대로 바꾸는',
  title: '토론 이기려고 본인 의견 반대로 바꾸는 사람',
  killer: '너랑 싸우는 거 아니야, 그냥 논리 게임이 너무 재밌어.',
  summary:
    '토론에서 이기는 게 너무 재밌어서 본인 진짜 의견과 반대 입장 잡고 싸운다. 친구가 진심으로 빡쳐도 본인은 "근데 이거 재밌는 토론이지 않아?" 하다가 친구 잃는다. 머리는 빠른데 마음은 가끔 한 박자 늦는다.',
  scenarios: [
    {
      icon: '🥊',
      label: '토론',
      text: '본인 입장 반대로 잡고 싸운 다음, 친구가 빡칠 때야 알아챈다.',
    },
    {
      icon: '🚀',
      label: '새 아이디어',
      text: '일주일에 10개. 그 중 9개는 본인이 다 까먹는다.',
    },
    {
      icon: '🎤',
      label: '친구 발표',
      text: '응원하다가 결국 "근데 그거 이렇게 하면 더 재밌지 않아?" 자동 발사.',
    },
    {
      icon: '📚',
      label: '책',
      text: '끝까지 읽은 책보다 시작한 책이 5배 많다.',
    },
    {
      icon: '😅',
      label: '친구 화남',
      text: '"어 미안 진심 아니었어" 한 후에 또 새 토론 시작.',
    },
  ],
  misheard: [
    '"넌 너무 따져" (그게 사랑)',
    '"쟤는 진심이 없어" (있는데 못 보임)',
    '"잘난 척한다" (재밌어서)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '너 같은 사람이 회의에 한 명만 있어도 결정이 한 단계 더 단단해진다. 너의 토론은 사실 사랑이야. 가끔 그 사랑을 한국어로 번역해주면, 사람들이 너를 덜 미워한다.',
  matches: [
    {
      emoji: '🎯',
      type: 'INFJ',
      body: '너의 토론을 인간 언어로 번역해주는 통역사.',
      vibe: 'good',
    },
    {
      emoji: '🧩',
      type: 'INTJ',
      body: '너랑 새벽 3시까지 진짜 토론 가능한 사람.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'ISFJ',
      body: '너의 토론을 인격 공격으로 받아들이는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 토론 이기려고 의견 반대로 바꾸는 사람이래 ㅋㅋㅋ',
}

export default ENTP
