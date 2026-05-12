import type { ResultData } from './types'

export const ISTJ: ResultData = {
  code: 'ISTJ',
  codeSpaced: 'I S T J',
  tagline: '약속 10분 전 도착하는',
  title: '약속 10분 전 도착, 5분 전부터 화나는 사람',
  killer: '약속은 신성하고, 약속 어긴 너는 인성 파산이야.',
  summary:
    '9시 약속이면 8시 50분 도착해서 8시 55분부터 한숨 쉰다. 시스템·규칙·약속을 어기는 사람을 보면 도덕적으로 분노한다. 본인이 한 말은 무조건 지키고, 안 지키는 사람한테는 신뢰 즉시 차단.',
  scenarios: [
    {
      icon: '⏰',
      label: '약속',
      text: '10분 일찍 도착 → 친구가 5분 늦으면 그날 친구 평가 -3점.',
    },
    {
      icon: '📅',
      label: '일정',
      text: '캘린더 색깔별로 분류, 빨간 칸 못 지키면 잠을 못 잔다.',
    },
    {
      icon: '🧾',
      label: '영수증',
      text: '5년 전 카드 명세서까지 폴더별로 정리되어 있다.',
    },
    {
      icon: '🚫',
      label: '새치기 본 순간',
      text: '머릿속 "저런 사람은 평생 저럴 거야" 자동 분류.',
    },
    {
      icon: '📝',
      label: '회의 노트',
      text: '모두 잊은 한 달 전 결정사항을 너만 정확히 기억.',
    },
  ],
  misheard: [
    '"넌 너무 빡빡해" (그게 신뢰)',
    '"좀 융통성 있게" (없으면 다 무너짐)',
    '"꼰대 같아" (룰을 지키는 거)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '너 같은 사람이 없으면 회사도 약속도 다 무너진다. 너의 빡빡함이 누군가의 안전망이야. 가끔 사람한테는 룰보다 사정이 먼저인 순간이 있다는 것만 기억해주면 너는 거의 어른 그 자체다.',
  matches: [
    {
      emoji: '🔒',
      type: 'ESFJ',
      body: '너의 룰을 인간미로 해석해주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '🛡️',
      type: 'ISFJ',
      body: '너랑 같은 결의 신뢰를 쌓을 수 있는 사람.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'ENFP',
      body: '약속 시간을 "대충 그쯤"으로 받아들이는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 약속 10분 전 도착해서 화나는 사람이래;; 5분 전부터 진짜임',
}

export default ISTJ
