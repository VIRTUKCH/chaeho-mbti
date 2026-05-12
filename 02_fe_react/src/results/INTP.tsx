import type { ResultData } from './types'

export const INTP: ResultData = {
  code: 'INTP',
  codeSpaced: 'I N T P',
  tagline: '"근데 왜?"가 입버릇인',
  title: '"근데 그거 왜 그래?"가 입버릇인 사람',
  killer: '결론은 별로 안 궁금하고, 그게 왜 그렇게 됐는지가 진짜 궁금하다.',
  summary:
    '친구가 고민 털어놓으면 위로보다 "근데 왜?"가 먼저 나간다. 본인은 분석이 곧 애정인데 상대는 차가운 줄 안다. 머릿속에 탭 87개 열려 있는데 정작 약속 시간은 까먹는다.',
  scenarios: [
    {
      icon: '🔍',
      label: '친구 고민',
      text: '"위로해줘"라는데 본인 입에서 "근데 그게 왜 그렇게 됐어?" 자동 발사.',
    },
    {
      icon: '📚',
      label: '위키피디아',
      text: '한 단어 검색하다 새벽 4시까지 생물학 위키 5개를 다 읽고 있음.',
    },
    {
      icon: '🥪',
      label: '점심 메뉴',
      text: '"아무거나" 듣고 30분 동안 옵션 매트릭스 짜다가 결정 못 함.',
    },
    {
      icon: '💬',
      label: '단톡방',
      text: '며칠 후 "아 그거 사실은 이런 이유였어" 하고 혼자 답을 단다.',
    },
    {
      icon: '🧦',
      label: '아침',
      text: '양말 두 짝 다 다른 색으로 신고 출근. 알아도 별 감흥 없음.',
    },
  ],
  misheard: [
    '"넌 너무 분석적이야" (그게 칭찬인 줄)',
    '"감정이 없어 보여" (있긴 함)',
    '"왜 매번 따져?" (그게 대화)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '모두가 결론만 외칠 때 너 혼자 "근데 진짜 왜?"를 묻는다. 그 질문이 회사를 살리고 친구를 살린다. 가끔은 "위로 모드 ON" 스위치를 의식적으로 누르면 사람들이 너를 더 가까이 둔다.',
  matches: [
    {
      emoji: '✨',
      type: 'ENFJ',
      body: '너의 분석에 인간미를 더해주는 통역사.',
      vibe: 'good',
    },
    {
      emoji: '🧪',
      type: 'ENTP',
      body: '너랑 새벽 3시까지 토론할 수 있는 유일한 인간.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'ESFJ',
      body: '"왜 그렇게 차갑게 말해?"로 너의 분석 모드를 차단시키는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 "근데 그거 왜 그래?"가 입버릇인 사람이래 ㅋㅋ 정확함',
}

export default INTP
