import { useEffect, useState } from 'react'
import Landing from './pages/Landing'
import Mosaic from './pages/Mosaic'
import CardDetail from './pages/CardDetail'
import { CARD_ORDER, CARD_META } from './cards/meta'
import { DEFAULT_TYPE_BY_CARD, getTypeIds } from './cards'
import type { CardId } from './cards/types'

// 라우팅: 라이브러리 없이 쿼리 파라미터 + history.replaceState
// (없음)           → Landing
// ?view=mosaic     → Mosaic (3카드)
// ?card=<id>       → CardDetail (해당 카드)
// ?card=<id>&type=<typeId> → CardDetail 특정 유형 (공유 링크용)

type Route =
  | { kind: 'landing' }
  | { kind: 'mosaic' }
  | { kind: 'card'; cardId: CardId; typeId: string | null }

const VALID_CARDS = new Set<string>(CARD_ORDER)

function parseRoute(): Route {
  if (typeof window === 'undefined') return { kind: 'landing' }
  const params = new URLSearchParams(window.location.search)
  const cardParam = params.get('card')
  if (cardParam && VALID_CARDS.has(cardParam)) {
    return {
      kind: 'card',
      cardId: cardParam as CardId,
      typeId: params.get('type'),
    }
  }
  if (params.get('view') === 'mosaic') return { kind: 'mosaic' }
  return { kind: 'landing' }
}

function routeToQuery(route: Route): string {
  const params = new URLSearchParams()
  if (route.kind === 'mosaic') params.set('view', 'mosaic')
  if (route.kind === 'card') {
    params.set('card', route.cardId)
    if (route.typeId) params.set('type', route.typeId)
  }
  const q = params.toString()
  return q ? `?${q}` : window.location.pathname
}

// 데모/테스트 결과 저장소.
// 진짜 테스트가 붙기 전엔 카드별 기본 typeId를 쓴다.
// localStorage에 sticky 저장 — 사용자가 새로고침 해도 같은 결과 유지.
const STORAGE_KEY = 'chaeho-results-v1'

function loadResults(): Record<CardId, string> {
  if (typeof window === 'undefined') return { ...DEFAULT_TYPE_BY_CARD }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_TYPE_BY_CARD }
    const parsed = JSON.parse(raw) as Partial<Record<CardId, string>>
    const out: Record<CardId, string> = { ...DEFAULT_TYPE_BY_CARD }
    for (const id of CARD_ORDER) {
      const v = parsed[id]
      if (v && getTypeIds(id).includes(v)) out[id] = v
    }
    return out
  } catch {
    return { ...DEFAULT_TYPE_BY_CARD }
  }
}

function saveResults(results: Record<CardId, string>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(results))
  } catch {
    // 무시 (사파리 시크릿 모드 등)
  }
}

// 데모용: 카드별로 정의된 유형 중 하나를 무작위로 픽한다.
// 진짜 테스트가 붙으면 이 함수는 score → typeId 매핑으로 대체.
function rollDemoResults(): Record<CardId, string> {
  const out: Partial<Record<CardId, string>> = {}
  for (const id of CARD_ORDER) {
    const ids = getTypeIds(id)
    out[id] = ids[Math.floor(Math.random() * ids.length)]
  }
  return out as Record<CardId, string>
}

export default function App() {
  const [route, setRoute] = useState<Route>(parseRoute)
  const [results, setResults] = useState<Record<CardId, string>>(loadResults)
  const [opened, setOpened] = useState<Set<CardId>>(new Set())

  // 브라우저 뒤로/앞으로 처리
  useEffect(() => {
    if (typeof window === 'undefined') return
    const onPop = () => setRoute(parseRoute())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // 라우트 변경 시 URL 동기화 + 스크롤 위로
  useEffect(() => {
    if (typeof window === 'undefined') return
    const next = routeToQuery(route)
    if (
      window.location.search !== next &&
      window.location.pathname + window.location.search !== next
    ) {
      window.history.pushState({}, '', next)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // 페이지 타이틀: 현재 카드에 맞춰 갱신 (캡처/공유 friendly)
    if (route.kind === 'card') {
      document.title = `채호 MBTI · ${CARD_META[route.cardId].label} 카드`
    } else if (route.kind === 'mosaic') {
      document.title = '채호 MBTI · 결과 모자이크'
    } else {
      document.title = '채호 MBTI · 한국식 공감 성격 테스트'
    }
  }, [route])

  const persist = (next: Record<CardId, string>) => {
    setResults(next)
    saveResults(next)
  }

  // 임시: 테스트 페이지가 없으니 "시작 = 결과 새로 뽑기" 로 둠.
  // 실제 테스트가 붙으면 이 함수는 테스트 진입 라우트로 바뀜.
  const onStart = () => {
    persist(rollDemoResults())
    setOpened(new Set())
    setRoute({ kind: 'mosaic' })
  }

  const onDemo = () => {
    // 기존 sticky 결과 그대로 모자이크 진입 (없으면 default)
    setRoute({ kind: 'mosaic' })
  }

  const onOpenCard = (cardId: CardId) => {
    setOpened((prev) => {
      const next = new Set(prev)
      next.add(cardId)
      return next
    })
    setRoute({ kind: 'card', cardId, typeId: results[cardId] })
  }

  const onBackToMosaic = () => setRoute({ kind: 'mosaic' })
  const onHome = () => setRoute({ kind: 'landing' })

  if (route.kind === 'landing') {
    return <Landing onStart={onStart} onDemo={onDemo} />
  }
  if (route.kind === 'mosaic') {
    return (
      <Mosaic
        results={results}
        opened={opened}
        onOpenCard={onOpenCard}
        onHome={onHome}
      />
    )
  }
  return (
    <CardDetail
      cardId={route.cardId}
      typeId={route.typeId ?? results[route.cardId]}
      onBack={onBackToMosaic}
      onSeeOthers={onBackToMosaic}
    />
  )
}
