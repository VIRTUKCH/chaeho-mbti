import styles from './landing.module.css'
import { CARD_META, CARD_ORDER } from '../cards/meta'

type Props = {
  onStart: () => void
  onDemo: () => void
}

export default function Landing({ onStart, onDemo }: Props) {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <span className={styles.tag}>채호 MBTI · 한국식 공감 성격 테스트</span>
        <h1 className={styles.title}>
          연애·가족·친구·직장(학교),
          <br />
          네 장으로 너를 보여줄게
        </h1>
        <p className={styles.sub}>
          기존 MBTI가 안 짚어준 자리들. 한 번에 한 장씩 펴서 확인해.
        </p>

        <div className={styles.preview}>
          {CARD_ORDER.map((id) => {
            const meta = CARD_META[id]
            return (
              <div key={id} className={styles.previewCell}>
                <span className={styles.previewEmoji}>{meta.emoji}</span>
                <span className={styles.previewLabel}>{meta.label}</span>
              </div>
            )
          })}
        </div>

        <div className={styles.cta}>
          <button className={styles.primary} onClick={onStart}>
            테스트 시작하기
          </button>
          <button className={styles.secondary} onClick={onDemo}>
            데모 결과 미리보기
          </button>
        </div>
        <p className={styles.notice}>
          문항·점수 산출은 작업 중. 지금은 데모 카피로 미리 볼 수 있어.
        </p>
        <p className={styles.footer}>chaeho-mbti · 개발 중</p>
      </div>
    </main>
  )
}
