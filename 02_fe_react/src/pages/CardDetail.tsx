import styles from './card-detail.module.css'
import { CARD_META } from '../cards/meta'
import { getResult } from '../cards'
import type { CardId } from '../cards/types'
import ShareBar from '../components/ShareBar'

type Props = {
  cardId: CardId
  typeId?: string | null
  onBack: () => void
  onSeeOthers: () => void
}

const HEADER_VARIANT: Record<CardId, string> = {
  love: styles.headerCardLove,
  family: styles.headerCardFamily,
  friend: styles.headerCardFriend,
  work: styles.headerCardWork,
}

export default function CardDetail({
  cardId,
  typeId,
  onBack,
  onSeeOthers,
}: Props) {
  const meta = CARD_META[cardId]
  const result = getResult(cardId, typeId)

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.topBar}>
          <button className={styles.back} onClick={onBack}>
            ← 카드 넷 보기
          </button>
          <span className={styles.crumb}>채호 MBTI · {meta.label} 카드</span>
        </div>

        <header className={`${styles.headerCard} ${HEADER_VARIANT[cardId]}`}>
          <span className={styles.headerEmoji}>{meta.emoji}</span>
          <span className={styles.headerLabel}>{meta.label}</span>
          <span className={styles.badge}>{result.badge}</span>
        </header>

        <h1 className={styles.title}>{result.title}</h1>
        <p className={styles.killer}>{result.killer}</p>
        <p className={styles.summary}>{result.summary}</p>

        <h3 className={styles.sectionTitle}>아마 이런 적 있을 거야</h3>
        <div className={styles.scenarios}>
          {result.scenarios.map((s) => (
            <div key={s.label} className={styles.scenario}>
              <div className={styles.icon}>{s.icon}</div>
              <div className={styles.scenarioBody}>
                <span className={styles.scenarioLabel}>{s.label}</span>
                <span className={styles.scenarioText}>{s.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.misheard}>
          <p className={styles.misheardTitle}>
            주변에서 자주 듣는데, 사실은 다른 말
          </p>
          <ul className={styles.misheardList}>
            {result.misheard.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        <div className={styles.reframe}>
          <p className={styles.reframeTitle}>{result.reframeTitle}</p>
          <p className={styles.reframeBody}>{result.reframeBody}</p>
        </div>

        <div className={styles.shareQuote}>
          <p className={styles.shareQuoteHint}>친구한테 이렇게 보내봐</p>
          <p className={styles.shareQuoteBody}>"{result.shareCaption}"</p>
        </div>

        <ShareBar shareCaption={result.shareCaption} />

        <div className={styles.nextStep}>
          <p className={styles.nextStepTitle}>나머지 세 장 마저 펴봐</p>
          <p className={styles.nextStepBody}>
            한 장만 보면 너의 1/4밖에 모름. 카드 네 장 다 합쳐야 너의 인덱스.
          </p>
          <button className={styles.nextStepBtn} onClick={onSeeOthers}>
            카드 모자이크로 돌아가기 →
          </button>
        </div>

        <p className={styles.footer}>
          chaeho-mbti · 한국식 공감 성격 테스트 (개발 중)
        </p>
      </section>
    </main>
  )
}
