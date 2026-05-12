import { useState } from 'react'
import styles from './share-bar.module.css'

type Props = {
  shareCaption: string
  // 단일 카드 결과 페이지든, 모자이크 전체 페이지든 공통.
  // url이 비면 현재 location.href를 쓴다.
  url?: string
}

// 모바일 우선: 친구한테 보내기를 primary로 두고, 인스타/URL/비교는 보조.
// 카카오 SDK는 아직 안 붙임. Web Share API → clipboard 폴백으로 처리.
// 인스타 스토리: 실제 이미지 다운로드는 다음 단계에서 html2canvas로 구현 예정 — 지금은 안내만.
export default function ShareBar({ shareCaption, url }: Props) {
  const [toast, setToast] = useState<string | null>(null)

  const flash = (msg: string) => {
    setToast(msg)
    window.setTimeout(() => setToast(null), 2200)
  }

  const link = url ?? (typeof window !== 'undefined' ? window.location.href : '')
  const shareText = `${shareCaption} 너도 해봐 👇`

  const onWebShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: '채호 MBTI',
          text: shareText,
          url: link,
        })
        return
      } catch {
        // 사용자가 닫았거나 미지원 — 폴백
      }
    }
    await copyLink(`${shareText} ${link}`, '공유 시트가 안 열려서 링크를 복사했어. 친구한테 붙여넣기!')
  }

  const onCopy = async () => {
    await copyLink(link, '링크 복사 완료. 카톡/메시지에 붙여넣기!')
  }

  const onInstagram = () => {
    flash('인스타 스토리용 캡처 이미지는 다음 업데이트에서 자동 저장 돼.')
  }

  const onCompare = async () => {
    const compareText = `[채호 MBTI] 너 카드 세 장 어떻게 나왔는지 알려줘. 내 카드는 이거. ${link}`
    await copyLink(compareText, '친구 비교용 멘트를 복사했어. 친구한테 붙여넣기!')
  }

  const copyLink = async (text: string, msg: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text)
        flash(msg)
        return
      } catch {
        // fallthrough
      }
    }
    flash('복사가 안 됐어. 주소창에서 직접 복사해줘.')
  }

  return (
    <div className={styles.wrap}>
      <p className={styles.hint}>친구한테 보내기</p>
      <div className={styles.row}>
        <button
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={onWebShare}
        >
          <span className={styles.btnIcon}>💬</span>
          카톡·메시지로 보내기
        </button>
        <button className={styles.btn} onClick={onInstagram}>
          <span className={styles.btnIcon}>📸</span>
          인스타 스토리
        </button>
        <button className={styles.btn} onClick={onCopy}>
          <span className={styles.btnIcon}>🔗</span>
          링크 복사
        </button>
        <button className={styles.btn} onClick={onCompare} style={{ gridColumn: '1 / -1' }}>
          <span className={styles.btnIcon}>👯</span>
          친구 결과랑 비교하기
        </button>
      </div>
      {toast && <p className={styles.toast}>{toast}</p>}
    </div>
  )
}
