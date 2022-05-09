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
      <span className={styles.secondLine}>subtexto</span>
      <span className={styles.secondLine}>vem</span>
      <span className={styles.secondLine}>aqui</span> 
    </p>
  )
}

/*
 if(currentWidth > 480) {
    return (
      <>
        <h1 className={styles.introduction}>
          <span>Nice</span>
          <span>to </span>
          <span>meet </span>
          <span>you </span>
          <span>I'm </span>
          <span>Fabio, </span>
          <span>Oliveira</span>
        </h1>
        <h2 className={styles.introduction}>
          <span>subtexto </span>
          <span>vem </span>
          <span>aqui. </span>        
        </h2>
      </>
    )
  } else {
    return (
      <p>hola que tal</p>
    )
  }

*/
