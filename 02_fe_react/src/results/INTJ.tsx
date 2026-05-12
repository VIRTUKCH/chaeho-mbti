import type { ResultData } from './types'

export const INTJ: ResultData = {
  code: 'INTJ',
  codeSpaced: 'I N T J',
  tagline: '이미 다음 분기 짜고 있는',
  title: '회의 중에 이미 다음 분기 짜고 있는 사람',
  killer: '너희가 이번 주 얘기할 때, 나는 6개월 뒤를 시뮬레이션 중이야.',
  summary:
    '결론 안 나오는 회의는 인생 낭비. 친구 약속 잡을 때도 동선·예상 소요 시간·플랜 B까지 머릿속에 짜놓고 그냥 "어디서 만날까?" 한다. 친절해 보이려는 노력 자체가 비효율이라 잘 안 한다.',
  scenarios: [
    {
      icon: '📊',
      label: '회의 중',
      text: '5분이면 끝낼 의제를 1시간 토론하면 영혼이 빠져나간다.',
    },
    {
      icon: '🗓️',
      label: '친구 만남',
      text: '메뉴·동선·시간 다 짜놨는데 친구가 "어디 가지?" 하면 한숨.',
    },
    {
      icon: '🎯',
      label: '새해 목표',
      text: '1월 1일에 12개월치 캘린더 다 채워놓고 1월 3일에 1차 수정.',
    },
    {
      icon: '🔇',
      label: '단톡방',
      text: '의미 없는 ㅋㅋ 100개 쌓이면 그날로 알림 끈다.',
    },
    {
      icon: '🧠',
      label: '잠들기 전',
      text: '5년 뒤 인생 시나리오 세 개를 비교 분석하다 잠든다.',
    },
  ],
  misheard: [
    '"넌 차가워 보여" (효율적인 거임)',
    '"무슨 생각해?" (말하면 너 다친다)',
    '"좀 가볍게 살아" (이게 가벼운 거)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '다들 6개월 뒤를 못 본다. 너는 본다. 그게 너랑 사는 사람한테는 든든한 거야. 가끔 "왜 그렇게 생각해?"를 좀 더 부드럽게 설명해주면 사람들이 너를 덜 무서워한다.',
  matches: [
    {
      emoji: '🧩',
      type: 'ENFP',
      body: '너의 큰 그림에 색을 입혀주는 유일한 사람.',
      vibe: 'good',
    },
    {
      emoji: '🤝',
      type: 'INFJ',
      body: '말 안 해도 너의 시뮬레이션을 이해하는 사람.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'ESFP',
      body: '"일단 가보자"로 너의 6개월 계획을 30분 만에 무너뜨리는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 회의 중에 다음 분기 짜고 있는 사람이래 ㅋㅋ 인정',
}

export default INTJ
