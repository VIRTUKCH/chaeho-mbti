import styles from './INFP.module.css'

type Scenario = {
  icon: string
  label: string
  text: string
}

const scenarios: Scenario[] = [
  {
    icon: '💬',
    label: '카톡 답장',
    text: '30분 동안 다섯 번 고쳐 쓰다가 결국 "ㅇㅇ" 한 글자로 보낸다.',
  },
  {
    icon: '🍻',
    label: '회식 끝나고',
    text: '분위기 맞추려 웃었는데, 집 와서 "내가 왜 그 말 했지" 30분 자책.',
  },
  {
    icon: '🎬',
    label: '친구가 추천한 영화',
    text: '별로였어도 "음... 좋더라". 진짜 감상은 메모장이나 일기장에만.',
  },
  {
    icon: '💼',
    label: '팀장이 "잠깐 와볼래"',
    text: '걸어가는 30초 동안 머릿속에서 사과 시나리오 다섯 개를 동시 가동.',
  },
  {
    icon: '🌙',
    label: '새벽 1시',
    text: '5년 전 흑역사가 갑자기 떠올라 이불을 발로 찬다. 본인도 왜 떠올랐는지 모름.',
  },
]

const misheard = [
  '"너 진짜 무던하다" (안 무던함)',
  '"넌 별생각 없어 보여서 좋아" (생각이 너무 많음)',
  '"화 한 번도 안 내네" (속으로 100번 냄)',
]

export default function ResultINFP() {
  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const text = '나 머릿속이 너무 시끄러운 사람이래. 이거 너도 해봐 👇'
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: 'INFP — 머릿속이 너무 시끄러운 사람', text, url })
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
        <header className={styles.header}>
          <span className={styles.tag}>채호 MBTI · 결과</span>
          <h2 className={styles.code}>I N F P</h2>
        </header>

        <h1 className={styles.title}>
          머릿속이 너무 시끄러운 사람
        </h1>

        <p className={styles.killer}>
          남이 한 한마디로 일주일을 살고,
          본인이 한 한마디로 한 달을 자책한다.
        </p>

        <p className={styles.summary}>
          겉으로는 차분해 보이지만 머릿속에서는 24시간 회의가 열리는 사람.
          누가 해준 칭찬은 자기 전에 다시 꺼내보고, 5년 전 그 말은 새벽 1시에
          다시 후회한다. 표현은 아끼지만 감정은 깊고, 정작 본인이 제일 시끄러운데
          남들 눈엔 가장 조용해 보이는 게 슬픈 점.
        </p>

        <h3 className={styles.scenarioTitle}>아마 이런 적 있을 거야</h3>
        <div className={styles.scenarios}>
          {scenarios.map((s) => (
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
          <p className={styles.misheardTitle}>주변에서 자주 듣는데, 사실은 다른 말</p>
          <ul className={styles.misheardList}>
            {misheard.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        <div className={styles.locked}>
          <p className={styles.lockedTitle}>잠긴 결과 · 64유형 상세</p>
          <p className={styles.lockedBody}>
            연애·회사·돈 쓰는 패턴까지 64유형 상세 결과는 곧 공개돼.
            지금은 핵심만 보고 가.
          </p>
        </div>

        <div className={styles.cta}>
          <button className={styles.primary} onClick={handleShare}>
            친구한테 보내기 · "이거 너잖아"
          </button>
          <button
            className={styles.secondary}
            onClick={() => window.location.reload()}
          >
            다시 테스트하기
          </button>
        </div>

        <p className={styles.footer}>
          chaeho-mbti · 한국식 공감 성격 테스트 (개발 중)
        </p>
      </section>
    </main>
  )
}
