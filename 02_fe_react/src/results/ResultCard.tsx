import styles from './result-card.module.css'
import type { ResultData } from './types'

type Props = {
  data: ResultData
  index: number
  total: number
  onPrev: () => void
  onNext: () => void
  onHome: () => void
}

export default function ResultCard({
  data,
  index,
  total,
  onPrev,
  onNext,
  onHome,
}: Props) {
  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const text = `${data.shareCaption} 너도 해봐 👇`
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `${data.code} — ${data.title}`,
          text,
          url,
        })
        return
      } catch {
        // fall through
      }
    }
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(`${text} ${url}`)
      alert('링크를 복사했어. 친구한테 붙여넣기!')
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <button className={styles.backHome} onClick={onHome}>
          ← 전체 유형
        </button>
        <header className={styles.header}>
          <span className={styles.tag}>채호 MBTI · 결과</span>
          <h2 className={styles.code}>{data.codeSpaced}</h2>
        </header>

        <h1 className={styles.title}>{data.title}</h1>

        <p className={styles.killer}>{data.killer}</p>

        <p className={styles.summary}>{data.summary}</p>

        <h3 className={styles.scenarioTitle}>아마 이런 적 있을 거야</h3>
        <div className={styles.scenarios}>
          {data.scenarios.map((s) => (
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
            {data.misheard.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        <div className={styles.reframe}>
          <p className={styles.reframeTitle}>{data.reframeTitle}</p>
          <p className={styles.reframeBody}>{data.reframeBody}</p>
        </div>

        <div className={styles.matchSection}>
          <h3 className={styles.matchTitle}>너랑 합이 잘 맞는 사람</h3>
          <div className={styles.matches}>
            {data.matches.map((m) => (
              <div
                key={m.type}
                className={`${styles.match} ${
                  m.vibe === 'danger' ? styles.matchDanger : ''
                }`}
              >
                <div className={styles.matchEmoji}>{m.emoji}</div>
                <div className={styles.matchBody}>
                  <span className={styles.matchType}>{m.type}</span>
                  <span className={styles.matchText}>{m.body}</span>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.matchHint}>
            너랑 합 맞는 친구 데려와서 같이 해봐 →
          </p>
        </div>

        <div className={styles.locked}>
          <p className={styles.lockedTitle}>잠긴 결과 · 64유형 상세</p>
          <p className={styles.lockedBody}>
            연애·회사·돈 쓰는 패턴까지 64유형 상세 결과는 곧 공개돼.
            지금은 핵심만 보고 가.
          </p>
        </div>

        <div className={styles.shareQuote}>
          <p className={styles.shareQuoteHint}>친구한테 이렇게 보내봐</p>
          <p className={styles.shareQuoteBody}>"{data.shareCaption}"</p>
        </div>

        <div className={styles.cta}>
          <button className={styles.primary} onClick={handleShare}>
            친구한테 보내기 · "이거 너잖아"
          </button>
          <button className={styles.secondary} onClick={onNext}>
            다음 유형 보기 →
          </button>
        </div>

        <div className={styles.pager}>
          <button className={styles.pagerButton} onClick={onPrev}>
            ← 이전
          </button>
          <span className={styles.pagerIndex}>
            {index} / {total}
          </span>
          <button className={styles.pagerButton} onClick={onNext}>
            다음 →
          </button>
        </div>

        <p className={styles.footer}>
          chaeho-mbti · 한국식 공감 성격 테스트 (개발 중)
        </p>
      </section>
    </main>
  )
}
