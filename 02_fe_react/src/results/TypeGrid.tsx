import styles from './result-card.module.css'
import type { ResultData } from './types'

type Props = {
  types: ResultData[]
  onSelect: (code: string) => void
}

export default function TypeGrid({ types, onSelect }: Props) {
  return (
    <main className={styles.page}>
      <section className={styles.gridCard}>
        <header className={styles.header}>
          <span className={styles.tag}>채호 MBTI</span>
          <h1 className={styles.gridTitle}>너는 16명 중 누구야?</h1>
          <p className={styles.gridSubtitle}>
            한국식 공감 성격 테스트 · 골라서 너인지 봐봐
          </p>
        </header>

        <div className={styles.grid}>
          {types.map((t) => (
            <button
              key={t.code}
              className={styles.gridCell}
              onClick={() => onSelect(t.code)}
            >
              <span className={styles.gridCode}>{t.code}</span>
              <span className={styles.gridTagline}>{t.tagline}</span>
            </button>
          ))}
        </div>

        <p className={styles.footer}>
          chaeho-mbti · 한국식 공감 성격 테스트 (개발 중)
        </p>
      </section>
    </main>
  )
}
