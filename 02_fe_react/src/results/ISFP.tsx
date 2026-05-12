import type { ResultData } from './types'

export const ISFP: ResultData = {
  code: 'ISFP',
  codeSpaced: 'I S F P',
  tagline: '분위기 맞추다 혼자 지치는',
  title: '말없이 분위기 맞춰주다 혼자 지치는 사람',
  killer: '모임에선 가장 부드럽고, 집 오면 가장 빨리 방전된다.',
  summary:
    '본인 취향은 누구보다 강한데 입 밖에 잘 안 낸다. 분위기 깨기 싫어서 "아무거나" 하고 결국 본인이 별로 안 좋아하는 메뉴 먹는다. 그래놓고 집 와서 "다음엔 말해야지" 하고 또 안 한다.',
  scenarios: [
    {
      icon: '🍽️',
      label: '메뉴 고를 때',
      text: '머릿속엔 답 있는데 입에선 "다 좋아" 나간다.',
    },
    {
      icon: '🛍️',
      label: '쇼핑',
      text: '친구 옷은 30분 골라주는데 본인 옷은 5분 만에 대충 산다.',
    },
    {
      icon: '🎧',
      label: '혼자 시간',
      text: '이어폰 끼고 누워있는 시간이 인생의 80%, 거기가 진짜 자아.',
    },
    {
      icon: '📞',
      label: '갑자기 전화',
      text: '"여보세요" 한마디 하기까지 3번 망설이다가 결국 안 받는다.',
    },
    {
      icon: '🌃',
      label: '모임 끝',
      text: '한마디 안 했는데 집 가는 길에 가장 피곤한 사람.',
    },
  ],
  misheard: [
    '"넌 욕심이 없어" (강한데 안 보임)',
    '"넌 정말 둥글둥글" (각져 있음)',
    '"쟤는 다 좋대" (싫은 거 많음)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '너는 분위기를 망치지 않는 사람이고, 그 자체가 모임에서 가장 비싼 능력이다. 다만 가끔 너 좋아하는 메뉴 한 번만 말해봐. 친구들이 너를 더 정확히 사랑하게 된다.',
  matches: [
    {
      emoji: '🌷',
      type: 'ESFJ',
      body: '너 대신 너 취향을 캐치해서 말해주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '🎨',
      type: 'INFP',
      body: '말 안 해도 같은 결의 침묵을 공유하는 사람.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'ENTJ',
      body: '"결정해" 한마디로 너를 얼게 만드는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 말없이 분위기 맞추다 혼자 방전되는 사람이래 ㅠㅠ',
}

export default ISFP
