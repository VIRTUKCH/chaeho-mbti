import type { CardId, CardResult } from './types'
import { LOVE_RESULTS, LOVE_DEFAULT_TYPE } from './love'
import { FAMILY_RESULTS, FAMILY_DEFAULT_TYPE } from './family'
import { FRIEND_RESULTS, FRIEND_DEFAULT_TYPE } from './friend'
import { WORK_RESULTS, WORK_DEFAULT_TYPE } from './work'

export const RESULTS_BY_CARD: Record<CardId, Record<string, CardResult>> = {
  love: LOVE_RESULTS,
  family: FAMILY_RESULTS,
  friend: FRIEND_RESULTS,
  work: WORK_RESULTS,
}

export const DEFAULT_TYPE_BY_CARD: Record<CardId, string> = {
  love: LOVE_DEFAULT_TYPE,
  family: FAMILY_DEFAULT_TYPE,
  friend: FRIEND_DEFAULT_TYPE,
  work: WORK_DEFAULT_TYPE,
}

export function getResult(cardId: CardId, typeId?: string | null): CardResult {
  const pool = RESULTS_BY_CARD[cardId]
  const id = typeId && pool[typeId] ? typeId : DEFAULT_TYPE_BY_CARD[cardId]
  return pool[id]
}

export function getTypeIds(cardId: CardId): string[] {
  return Object.keys(RESULTS_BY_CARD[cardId])
}
