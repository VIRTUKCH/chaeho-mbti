import styles from './mosaic.module.css'
import { CARD_META, CARD_ORDER } from '../cards/meta'
import { getResult } from '../cards'
import type { CardId } from '../cards/types'

type Props = {
  // 카드별 결과 typeId. 검증된 사용자라면 테스트 응답에서 산출되지만,
  // 현재는 데모 모드라서 외부 prop으로 주입.
  results: Record<CardId, string>
  // 이미 펼친(클릭한) 카드 집합. 펼치지 않은 건 호기심 카피, 펼친 건 결과 미리보기.
  opened: Set<CardId>
  onOpenCard: (cardId: CardId) => void
  onHome: () => void
}

const VARIANT_CLASS: Record<CardId, string> = {
  love: styles.cardLove,
  family: styles.cardFamily,
  friend: styles.cardFriend,
  work: styles.cardWork,
}

export default function Mosaic({ results, opened, onOpenCard, onHome }: Props) {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <button className={styles.backHome} onClick={onHome}>
          ← 처음으로
        </button>
        <div className={styles.header}>
          <span className={styles.tag}>채호 MBTI · 결과 모자이크</span>
          <h1 className={styles.title}>
            카드 네 장이 너를 기다리고 있어
          </h1>
          <p className={styles.sub}>
            연애 → 가족 → 친구 → 직장(학교) 순으로 하나씩 눌러서 펼쳐봐.
          </p>
        </div>

        <div className={styles.cards}>
          {CARD_ORDER.map((id) => {
            const meta = CARD_META[id]
            const isOpened = opened.has(id)
            const result = isOpened ? getResult(id, results[id]) : null
            return (
              <button
                key={id}
                type="button"
                className={`${styles.card} ${VARIANT_CLASS[id]} ${
                  isOpened ? styles.cardOpened : ''
                }`}
                onClick={() => onOpenCard(id)}
                aria-label={`${meta.label} 카드 ${isOpened ? '결과 보기' : '펼치기'}`}
              >
                <div className={styles.cardHead}>
                  <span className={styles.cardEmoji}>{meta.emoji}</span>
                  <div className={styles.cardLabelWrap}>
                    <span className={styles.cardLabel}>{meta.label}</span>
                    <span
                      className={`${styles.cardStatus} ${
                        isOpened ? styles.cardStatusOpened : ''
                      }`}
                    >
                      {isOpened ? '펼침' : '아직 안 봄'}
                    </span>
                  </div>
                </div>
                {result && (
                  <span className={styles.cardBadge}>{result.badge}</span>
                )}
                <p className={styles.cardBody}>
                  {isOpened && result
                    ? result.title
                    : meta.teaser}
                </p>
                <p className={styles.cardHint}>
                  {isOpened ? '전체 결과 보기 →' : '눌러서 펼치기 →'}
                </p>
              </button>
            )
          })}
        </div>

        <p className={styles.footer}>
          chaeho-mbti · 한국식 공감 성격 테스트 (개발 중)
        </p>
      </div>
    </main>
  )
}
