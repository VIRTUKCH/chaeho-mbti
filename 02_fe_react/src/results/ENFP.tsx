import type { ResultData } from './types'

export const ENFP: ResultData = {
  code: 'ENFP',
  codeSpaced: 'E N F P',
  tagline: '초면에 인생사 다 듣는',
  title: '초면에 인생 얘기 다 듣고 오는 사람',
  killer: '처음 본 사람한테 인생사 다 듣고, 본인 일은 마감 30분 전에 시작한다.',
  summary:
    '호기심이 폭발이라 처음 본 사람한테도 "근데 어쩌다 그 일 시작하셨어요?" 묻고 진짜로 답을 듣는다. 시작은 100점인데 디테일·마무리가 50점. 새벽에 갑자기 친구한테 "보고 싶다" 보내는 사람.',
  scenarios: [
    {
      icon: '☕',
      label: '카페 옆자리',
      text: '처음 본 사람과 30분 만에 친구 됨.',
    },
    {
      icon: '📋',
      label: '마감',
      text: '일주일 시간 줘도 마감 30분 전에 시작.',
    },
    {
      icon: '💡',
      label: '새 아이디어',
      text: '일주일에 7개 떠오르고 6개는 다음 주에 잊어버린다.',
    },
    {
      icon: '📞',
      label: '새벽 1시',
      text: '갑자기 떠오른 친구한테 "보고 싶어" 보내고 친구 깨운다.',
    },
    {
      icon: '😭',
      label: '헤어진 사람',
      text: 'SNS 차단했다가 풀었다가 또 차단.',
    },
  ],
  misheard: [
    '"넌 산만해" (관심이 많은 거)',
    '"왜 마무리를 못 해?" (시작이 더 재밌음)',
    '"쟤는 가벼워" (속은 깊음)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '모임에 너 한 명만 있으면 분위기가 산다. 너는 사람을 살리는 능력이 있어. 그 에너지를 너 자신한테도 좀 쓰면, 너의 시작들이 진짜로 결과가 된다.',
  matches: [
    {
      emoji: '🧠',
      type: 'INTJ',
      body: '너의 100개 아이디어 중 1개를 진짜로 만들어주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '💞',
      type: 'INFJ',
      body: '너의 깊이를 가장 정확히 알아보는 사람.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'ISTJ',
      body: '너의 즉흥성을 도덕적으로 못마땅해하는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 처음 본 사람한테 인생사 다 듣고 오는 사람이래 ㅋㅋㅋ',
}

export default ENFP
