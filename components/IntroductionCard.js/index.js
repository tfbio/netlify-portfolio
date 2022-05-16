import useDimension from 'hooks/useDimensions'
import styles from './Intro.module.scss'

export default function IntroductionCard() {
  const currentWidth = useDimension()

  return (
    <p className={styles.introduction}>
      <span className={styles.firstLine}>Looking</span>
      <span className={styles.firstLine}>for</span>
      <span className={styles.firstLine}>a</span>
      <span className={styles.firstLine}>web</span>
      <span className={styles.firstLine}>developer?</span>
      <span className={styles.firstLine}>I'm</span>
      <span className={styles.firstLine}>Fabio</span>
      <span className={styles.firstLine}>Oliveira</span>
      <span className={styles.secondLine}>React.js</span>
      <span className={styles.secondLine}>and</span>
      <span className={styles.secondLine}>Node.js</span>
      <span className={styles.secondLine}>developer</span>
    </p>
  )
}