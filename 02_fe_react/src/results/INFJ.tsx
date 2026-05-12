import type { ResultData } from './types'

export const INFJ: ResultData = {
  code: 'INFJ',
  codeSpaced: 'I N F J',
  tagline: '표정 안 바꾸고 다 알아채는',
  title: '표정 하나 안 바꾸고 다 알아채는 사람',
  killer: '분위기는 1초 만에 읽었고, 본인 감정은 일주일 뒤에 안다.',
  summary:
    '모임에 들어간 순간 누가 누구한테 삐졌는지 다 보이는데, 정작 본인 기분은 가장 늦게 안다. "말 안 해도 아는 사람"과 "말해도 모르는 사람"으로 분류하고 후자한테는 마음 안 준다. 깊게 안 친하면 차라리 안 친하다는 주의.',
  scenarios: [
    {
      icon: '👀',
      label: '친구 표정 한 번',
      text: '"너 무슨 일 있지?" 물어보면 친구가 본인보다 먼저 놀란다.',
    },
    {
      icon: '🤝',
      label: '첫 만남 30초',
      text: '"이 사람 나랑 결이 맞다 / 안 맞다" 이미 결론 남.',
    },
    {
      icon: '📱',
      label: '단톡방',
      text: '100명한테 다정한 척 답하고, 진짜 친한 3명한테만 본심.',
    },
    {
      icon: '🎁',
      label: '친구 생일',
      text: '1년 전 흘리듯 한 말까지 기억해서 선물 골랐다.',
    },
    {
      icon: '🌙',
      label: '새벽 2시',
      text: '"나 오늘 왜 우울했지?"를 일주일 내내 분석한다.',
    },
  ],
  misheard: [
    '"넌 진짜 신비로워" (계산이 끝났을 뿐)',
    '"넌 차분해서 좋아" (속은 폭풍)',
    '"원래 사람 잘 안 만나지?" (가려서 만남)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '사람 마음을 한 번에 읽는 사람은 진짜 드물다. 너의 그 직감이 친구 한 명을 평생 살린다. 본인 감정만 좀 빨리 알아채면 너는 거의 무적이야.',
  matches: [
    {
      emoji: '💞',
      type: 'ENFP',
      body: '너의 깊은 분석을 가벼운 한마디로 풀어주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '🛡️',
      type: 'ENTP',
      body: '너의 직감을 논리로 검증해주는 토론 파트너.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'ESTP',
      body: '"왜 그렇게 생각이 많아?"로 너의 세계를 평면화하는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 표정 하나 안 바꾸고 다 알아채는 사람이래;; 1번 진짜 나임',
}

export default INFJ
