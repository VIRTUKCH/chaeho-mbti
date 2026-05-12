import type { CardId, CardResult } from './types'
import { LOVE_RESULTS, LOVE_DEFAULT_TYPE } from './love'
import { FAMILY_RESULTS, FAMILY_DEFAULT_TYPE } from './family'
import { EMPATHY_RESULTS, EMPATHY_DEFAULT_TYPE } from './empathy'

export const RESULTS_BY_CARD: Record<CardId, Record<string, CardResult>> = {
  love: LOVE_RESULTS,
  family: FAMILY_RESULTS,
  empathy: EMPATHY_RESULTS,
}

export const DEFAULT_TYPE_BY_CARD: Record<CardId, string> = {
  love: LOVE_DEFAULT_TYPE,
  family: FAMILY_DEFAULT_TYPE,
  empathy: EMPATHY_DEFAULT_TYPE,
}

export function getResult(cardId: CardId, typeId?: string | null): CardResult {
  const pool = RESULTS_BY_CARD[cardId]
  const id = typeId && pool[typeId] ? typeId : DEFAULT_TYPE_BY_CARD[cardId]
  return pool[id]
}

export function getTypeIds(cardId: CardId): string[] {
  return Object.keys(RESULTS_BY_CARD[cardId])
}
