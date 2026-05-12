import type { ResultData } from './types'

export const ISTP: ResultData = {
  code: 'ISTP',
  codeSpaced: 'I S T P',
  tagline: '말없이 그냥 다 고치는',
  title: '5분 전 처음 본 기계도 그냥 고치는 사람',
  killer: '설명은 안 하고, 그냥 해결한다.',
  summary:
    '친구가 컴퓨터 고장 나서 30분째 우는데 옆에서 말없이 5분 만에 고친다. 말이 적어서 무뚝뚝해 보이는데 본인은 그게 가장 효율적인 친절이라 생각한다. 감정 얘기 시작되면 갑자기 폰을 본다.',
  scenarios: [
    {
      icon: '🔧',
      label: '친구가 도움 요청',
      text: '"잠깐만" 하고 말없이 손으로 해결.',
    },
    {
      icon: '📱',
      label: '새 기계',
      text: '매뉴얼 안 보고 5분 동안 누르다가 결국 다 익힌다.',
    },
    {
      icon: '💬',
      label: '카톡',
      text: '답장 "ㅇㅋ" "응" 두 글자가 한국 평균.',
    },
    {
      icon: '🎙️',
      label: '회의',
      text: '30분 침묵하다가 한마디로 결론 내고 회의 끝낸다.',
    },
    {
      icon: '😶',
      label: '친구가 운다',
      text: '어깨 한 번 두드리고 끝. 그게 본인 최선.',
    },
  ],
  misheard: [
    '"넌 무관심해 보여" (보고 있음)',
    '"왜 표현을 안 해?" (행동이 표현)',
    '"쟤는 차가워" (행동은 따뜻)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '말 잘하는 사람은 많고, 진짜 해결하는 사람은 적다. 너는 후자다. 너의 침묵 뒤엔 손이 움직이고 있고, 그걸 알아보는 사람이 너의 사람이다. 가끔 한마디만 보태면 사람들이 너의 친절을 놓치지 않는다.',
  matches: [
    {
      emoji: '🌻',
      type: 'ESFJ',
      body: '너의 행동을 말로 번역해주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '🎢',
      type: 'ESTP',
      body: '너랑 말 안 통해도 같이 일 저지를 수 있는 사람.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'ENFJ',
      body: '너한테 자꾸 "감정 얘기 해"라고 하는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 그냥 말없이 고치는 사람이래 ㅋㅋ 인정',
}

export default ISTP
