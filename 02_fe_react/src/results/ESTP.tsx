import type { ResultData } from './types'

export const ESTP: ResultData = {
  code: 'ESTP',
  codeSpaced: 'E S T P',
  tagline: '일단 저지르고 보는',
  title: '"일단 해보자"로 시작해서 "어쩌지"로 끝내는 사람',
  killer: '생각은 해본 적 없고, 일단 저지르고 본다.',
  summary:
    '친구가 "할까 말까" 고민할 때 본인은 이미 시작해서 절반 끝낸 상태. 후회는 안 하고 다음 행동으로 덮는다. 가끔 진짜 큰일이 나도 그 자리에서 새 액션 플랜을 뽑아내는 사람.',
  scenarios: [
    {
      icon: '🚀',
      label: '친구가 고민',
      text: '본인이 먼저 시작하고 친구한테 "야 이거 됐어" 알림.',
    },
    {
      icon: '💸',
      label: '충동 결제',
      text: '새벽에 산 거 다음 날 도착해서 잠깐 후회 후 잘 쓴다.',
    },
    {
      icon: '🏃',
      label: '위기',
      text: '다들 멘붕일 때 본인은 행동부터. "일단 가자."',
    },
    {
      icon: '🎮',
      label: '새 게임',
      text: '튜토리얼 안 보고 일단 시작. 죽으면서 배운다.',
    },
    {
      icon: '🤷',
      label: '후회',
      text: '"음 이건 다음에 안 해야지" 한 줄 후 5분 만에 잊는다.',
    },
  ],
  misheard: [
    '"넌 너무 즉흥적" (그게 효율)',
    '"생각 좀 해" (이미 했음 0.5초)',
    '"쟤는 가벼워" (행동력일 뿐)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '다들 머뭇거릴 때 너 한 명만 움직여서 일이 굴러간다. 너의 행동력은 진짜 자산이야. 가끔은 0.5초만 더 생각하면, 너의 액션이 거의 마법이 된다.',
  matches: [
    {
      emoji: '🧠',
      type: 'INTJ',
      body: '너의 행동에 큰 그림을 얹어주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '🎉',
      type: 'ESFP',
      body: '너랑 같이 일단 저질러주는 동지.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'INFP',
      body: '너의 즉흥성에 매번 놀라서 도망가는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 일단 저지르고 보는 사람이래 ㅋㅋ 어쩌지',
}

export default ESTP
