import type { ResultData } from './types'

export const ESTJ: ResultData = {
  code: 'ESTJ',
  codeSpaced: 'E S T J',
  tagline: '"결론 뭔데?"로 회의 끊는',
  title: '"결론이 뭔데?"로 회의 5분 단축시키는 사람',
  killer: '사설 길어지면 본인 입에서, "그래서 결론이 뭐예요?" 자동 발사.',
  summary:
    '회의에서 사설 5분 들으면 본인 입에서 "결론이 뭔데요?" 자동 발사. 본인은 시간 아껴주는 거라 생각하는데 동료는 차갑다고 한다. 약속·계획·시스템이 무너지면 도덕적으로 분노하는 어른.',
  scenarios: [
    {
      icon: '🎤',
      label: '회의',
      text: '사설 5분 후 본인 입에서 "그래서 결론이 뭔가요?" 자동.',
    },
    {
      icon: '📋',
      label: '친구 모임',
      text: '누가 안 짜면 본인이 짠다. 짜는 거 좋아함.',
    },
    {
      icon: '⏰',
      label: '약속',
      text: '항상 5분 일찍, 늦는 사람한테 마음의 평가 -2점.',
    },
    {
      icon: '🔧',
      label: '망가진 시스템',
      text: '"왜 이걸 아무도 안 고쳐?" 하고 본인이 새벽까지 고친다.',
    },
    {
      icon: '🚫',
      label: '비효율 본 순간',
      text: '도덕적 분노 활성화.',
    },
  ],
  misheard: [
    '"넌 너무 직설적" (그게 효율)',
    '"차갑게 말한다" (시간 아껴줌)',
    '"꼰대" (룰을 지키는 거)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '회사도 모임도 너 같은 사람 한 명이 있어야 굴러간다. 너의 직설 덕분에 시간이 산다. 가끔은 결론 전에 "오늘 어땠어?" 한마디만 보태면, 너의 효율이 사람들한테도 사랑받는다.',
  matches: [
    {
      emoji: '🌷',
      type: 'ISFJ',
      body: '너의 효율을 따뜻함으로 감싸주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '🛠️',
      type: 'ENTJ',
      body: '너랑 같은 결로 일을 추진하는 동지.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'INFP',
      body: '"왜 그렇게 빨리 결론을 내?"로 너를 답답해하는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 "그래서 결론이 뭔데"가 입버릇인 사람이래 ㅋㅋ 진짜임',
}

export default ESTJ
