import { useEffect, useState } from 'react'
import ResultCard from './results/ResultCard'
import TypeGrid from './results/TypeGrid'
import type { ResultData } from './results/types'
import { INFP } from './results/INFP'
import { INFJ } from './results/INFJ'
import { INTJ } from './results/INTJ'
import { INTP } from './results/INTP'
import { ISFP } from './results/ISFP'
import { ISFJ } from './results/ISFJ'
import { ISTP } from './results/ISTP'
import { ISTJ } from './results/ISTJ'
import { ENFP } from './results/ENFP'
import { ENFJ } from './results/ENFJ'
import { ENTP } from './results/ENTP'
import { ENTJ } from './results/ENTJ'
import { ESFP } from './results/ESFP'
import { ESFJ } from './results/ESFJ'
import { ESTP } from './results/ESTP'
import { ESTJ } from './results/ESTJ'

const TYPES: ResultData[] = [
  INFP, INFJ, INTJ, INTP,
  ISFP, ISFJ, ISTP, ISTJ,
  ENFP, ENFJ, ENTP, ENTJ,
  ESFP, ESFJ, ESTP, ESTJ,
]

function initialIndex(): number | null {
  if (typeof window === 'undefined') return null
  const params = new URLSearchParams(window.location.search)
  const code = (params.get('type') || '').toUpperCase()
  if (!code) return null
  const idx = TYPES.findIndex((t) => t.code === code)
  return idx >= 0 ? idx : null
}

export default function App() {
  const [index, setIndex] = useState<number | null>(initialIndex)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    if (index === null) {
      url.searchParams.delete('type')
    } else {
      url.searchParams.set('type', TYPES[index].code)
    }
    window.history.replaceState({}, '', url.toString())
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [index])

  const onSelect = (code: string) => {
    const idx = TYPES.findIndex((t) => t.code === code)
    if (idx >= 0) setIndex(idx)
  }
  const onHome = () => setIndex(null)
  const onNext = () =>
    setIndex((i) => (i === null ? 0 : (i + 1) % TYPES.length))
  const onPrev = () =>
    setIndex((i) =>
      i === null ? TYPES.length - 1 : (i - 1 + TYPES.length) % TYPES.length
    )

  if (index === null) {
    return <TypeGrid types={TYPES} onSelect={onSelect} />
  }

  return (
    <ResultCard
      data={TYPES[index]}
      index={index + 1}
      total={TYPES.length}
      onPrev={onPrev}
      onNext={onNext}
      onHome={onHome}
    />
  )
}
