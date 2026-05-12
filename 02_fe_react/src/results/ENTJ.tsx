import type { ResultData } from './types'

export const ENTJ: ResultData = {
  code: 'ENTJ',
  codeSpaced: 'E N T J',
  tagline: '모임 짤 때 엑셀 켜는',
  title: '친구 모임 짤 때 엑셀 켜는 사람',
  killer: '즐거움도 효율적으로 짠다, 그게 너희한테도 좋은 거잖아.',
  summary:
    '친구 여행 짤 때 동선·예산·식당 옵션 다 엑셀로 정리해서 공유한다. 본인은 그게 다정함인데 친구들은 살짝 무서워한다. 비효율을 못 봐주는 게 죄지만, 그 덕에 모임이 굴러가는 것도 사실.',
  scenarios: [
    {
      icon: '📊',
      label: '친구 여행',
      text: '누가 부탁 안 했는데 엑셀 시트 만들어 공유한다.',
    },
    {
      icon: '⏱️',
      label: '회의',
      text: '30분 의제를 10분에 끝내고 나머지 20분은 본인 일.',
    },
    {
      icon: '🚗',
      label: '친구 운전',
      text: '옆자리에서 길 안내 자동 발사. 친구가 빡친 다음에 알아챈다.',
    },
    {
      icon: '🎯',
      label: '새해',
      text: '1월 1일 12개월 OKR 다 짜놓고 1월 15일에 1차 리뷰.',
    },
    {
      icon: '🍽️',
      label: '약속',
      text: '메뉴 추천을 부탁받기도 전에 3개 옵션 비교표를 보낸다.',
    },
  ],
  misheard: [
    '"넌 너무 차가워" (효율 모드)',
    '"왜 친구한테까지 빡빡해" (친구라서 더)',
    '"리더십 무서워" (그게 챙김)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '모임이 굴러가게 만드는 건 너 같은 사람이다. 다들 "어디 가지?" 할 때 너 한 명이 결정 내려서 다들 편하게 따라간다. 가끔 "괜찮아 그냥 가자" 한 번만 해주면 사람들이 너를 더 좋아한다.',
  matches: [
    {
      emoji: '⚡',
      type: 'INTP',
      body: '너의 큰 그림에 디테일 검증을 더해주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '🌊',
      type: 'INFJ',
      body: '너의 추진력에 인간미를 입혀주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'ISFP',
      body: '너의 결정 속도에 매번 얼어붙는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 친구 모임 짤 때 엑셀 켜는 사람이래 ㅋㅋ 미안',
}

export default ENTJ
