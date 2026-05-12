export type Scenario = {
  icon: string
  label: string
  text: string
}

export type Match = {
  emoji: string
  type: string
  body: string
  vibe: 'good' | 'danger'
}

export type ResultData = {
  code: string
  codeSpaced: string
  tagline: string
  title: string
  killer: string
  summary: string
  scenarios: Scenario[]
  misheard: string[]
  reframeTitle: string
  reframeBody: string
  matches: Match[]
  shareCaption: string
}
