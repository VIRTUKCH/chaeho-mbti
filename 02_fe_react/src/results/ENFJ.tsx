import type { ResultData } from './types'

export const ENFJ: ResultData = {
  code: 'ENFJ',
  codeSpaced: 'E N F J',
  tagline: '분위기 가라앉으면 내 탓인',
  title: '분위기 안 좋으면 본인 책임인 줄 아는 사람',
  killer: '모임 분위기가 가라앉으면, 그게 다 내 탓 같다.',
  summary:
    '누구 표정 안 좋으면 본인이 뭘 잘못했나 자동 검토 시작. 모임 끝나고 집 가는 길에 오늘 한 말 한마디씩 다 복기한다. 다 챙기다가 정작 본인은 누가 못 챙겨서 가끔 갑자기 무너진다.',
  scenarios: [
    {
      icon: '🎭',
      label: '모임',
      text: '분위기 가라앉으면 본인이 농담 던져서 살린다.',
    },
    {
      icon: '🚶',
      label: '집 가는 길',
      text: '오늘 한 말 다 복기. "그 말 좀 그랬나" 30분.',
    },
    {
      icon: '🤝',
      label: '친구 갈등',
      text: '양쪽 다 위로하다가 본인이 제일 지친다.',
    },
    {
      icon: '📨',
      label: '단톡방',
      text: '답 안 오면 "내가 뭐 잘못 말했나?" 자동 자책 모드.',
    },
    {
      icon: '🌧️',
      label: '갑자기 우울',
      text: '다 챙기다 본인 비어버림. 이유 본인도 모름.',
    },
  ],
  misheard: [
    '"넌 늘 밝아 보여" (켜놓는 거)',
    '"넌 다 잘 들어줘" (본인은 누구한테)',
    '"리더십 있어" (책임감 폭발)',
  ],
  reframeTitle: '그래도 다행인 건',
  reframeBody:
    '사람들 사이의 공기를 읽고 살려내는 건 진짜 재능이야. 너 한 명 덕분에 안 깨진 모임이 한둘이 아니다. 가끔은 너도 누구한테 기대도 돼. 사람들 너 좋아한다.',
  matches: [
    {
      emoji: '🤲',
      type: 'INFP',
      body: '너의 챙김을 깊이 받아주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '💎',
      type: 'INTP',
      body: '너의 감정을 차가운 분석으로 정리해주는 사람.',
      vibe: 'good',
    },
    {
      emoji: '⚠️',
      type: 'ISTP',
      body: '너의 감정 케어를 부담스러워하는 사람.',
      vibe: 'danger',
    },
  ],
  shareCaption: '나 모임 분위기 가라앉으면 내 탓 같은 사람이래 ㅠㅠ',
}

export default ENFJ
