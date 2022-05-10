import useDimension from 'hooks/useDimensions'
import styles from './Intro.module.scss'

export default function IntroductionCard() {
  const currentWidth = useDimension()

  return (
    <p className={styles.introduction}>
      <span className={styles.firstLine}>Nice</span>
      <span className={styles.firstLine}>to</span>
      <span className={styles.firstLine}>meet</span>
      <span className={styles.firstLine}>you,</span>
      <span className={styles.firstLine}>I'm</span>
      <span className={styles.firstLine}>Fabio</span>
      <span className={styles.firstLine}>Oliveira</span>
      <span className={styles.secondLine}>Web</span>
      <span className={styles.secondLine}>Developer</span>
    </p>
  )
}