import type { ResultData } from './types'

export const ESFJ: ResultData = {
  code: 'ESFJ',
  codeSpaced: 'E S F J',
  tagline: '단톡방 ㅎㅇ 첫 빠따인',
  title: '단톡방 안부 인사 매일 첫 빠따인 사람',
  killer: '단톡방 ㅎㅇ는 내가, 친구 생일은 내가 더 챙긴다.',
  summary:
    '친구·가족·동료 생일 다 외워두고 본인이 더 챙긴다. 본인 생일엔 "괜찮아"라고 하면서 누가 안 챙기면 일주일 서운해한다. 다정함이 무기인데 그 다정함이 인정 못 받으면 무너진다.',
  scenarios: [
    {
      icon: '📅',
      label: '단톡방',
      text: '매일 아침 첫 인사 본인이 박는다.',
    },
    {
      icon: '🎂',
      label: '친구 생일',
      text: '한 달 전부터 선물 고민, 당일 영상 편지.',
    },
    {
      icon: '🍱',
      label: '회사',
      text: '옆자리 동료 점심 안 먹은 거 본인이 알아채고 챙겨준다.',
    },
    {
      icon: '😢',
      label: '본인 생일',
      text: '친구가 잊으면 일주일 서운, 그래도 입 밖엔 안 낸다.',
    },
    {
      icon: '📞',
      label: '가족',
      text: '부모님 안부를 일주일에 3번 본인이 먼저 한다.',
    },
  ],
  misheard: [
    '"넌 진짜 다정해" (지친다)',
    '"넌 사람 좋아하지?" (사람 좋아함이지 다는 아님)',
    '"쟤는 늘 한결같아" (가끔 무너짐)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '너의 안부 한 줄이 누군가의 하루를 살린다. 너 같은 사람이 모임을 굴리고 가족을 굴린다. 너도 가끔은 챙김 받아도 되는 사람이라는 거, 그것만 본인이 알아주면 된다.',
  matches: [
    {
      emoji: '🤍',
      type: 'ISFP',
      body: '너의 다정함을 조용히 받아주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '🌟',
      type: 'ENFJ',
      body: '너랑 같은 결로 사람을 챙기는 동지.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'INTP',
      body: '"왜 매번 안부 인사를 보내?"로 너를 무너뜨리는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 단톡방 ㅎㅇ 매일 첫 빠따인 사람이래 ㅋㅋㅠ',
}

export default ESFJ
