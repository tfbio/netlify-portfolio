import styles from './Intro.module.scss'

export default function IntroductionCard() {

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
      <span className={styles.secondLine}>Frontend</span>
      <span className={styles.secondLine}>and</span>
      <span className={styles.secondLine}>Backend</span>
      <span className={styles.secondLine}>developer</span>
    </p>
  )
}