import type { ResultData } from './types'

export const ESFP: ResultData = {
  code: 'ESFP',
  codeSpaced: 'E S F P',
  tagline: '슬프면 일단 노래방 가는',
  title: '슬픈 일 있어도 일단 노래방부터 가는 사람',
  killer: '우울할 시간에, 일단 사람 많은 데 가자.',
  summary:
    '본인 감정이 무거워지면 "혼자 있어야지"가 아니라 "노래방 가자"가 먼저 나간다. 사람들과 같이 있을 때 살아나고 혼자 있으면 침대에서 폰만 본다. 분위기 메이커지만 새벽 3시엔 가장 외로운 사람.',
  scenarios: [
    {
      icon: '🎤',
      label: '우울할 때',
      text: '일단 노래방, 일단 친구, 일단 술. 분석은 내일 한다.',
    },
    {
      icon: '💃',
      label: '모임',
      text: '분위기 안 좋으면 본인이 일어나서 살려놓는다.',
    },
    {
      icon: '📱',
      label: '혼자 있을 때',
      text: '인스타·틱톡·카톡 무한 새로고침.',
    },
    {
      icon: '🎁',
      label: '친구 생일',
      text: '큰 거 사주고 본인 카드값 다음 달에 운다.',
    },
    {
      icon: '🌃',
      label: '새벽 3시',
      text: '다 끝나고 혼자 침대 누웠을 때 갑자기 우울 폭격.',
    },
  ],
  misheard: [
    '"쟤는 늘 행복해" (켜놓는 거)',
    '"고민 없어 보여" (있는데 안 봄)',
    '"철없어" (지금이 중요)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '무거운 분위기를 한 방에 살리는 사람은 진짜 드물다. 너의 그 에너지가 누군가의 우울한 하루를 살린다. 가끔은 혼자 있는 새벽의 너도 좀 챙겨봐. 친구들도 너를 챙기고 싶어 한다.',
  matches: [
    {
      emoji: '🌙',
      type: 'ISFJ',
      body: '너의 텅 빈 새벽을 알아채주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '🔥',
      type: 'ESTP',
      body: '너랑 같이 일단 저질러주는 동지.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'INTJ',
      body: '"왜 그렇게 즉흥적이야"로 너를 답답해하는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 슬프면 일단 노래방부터 가는 사람이래 ㅋㅋㅋ 인정',
}

export default ESFP
