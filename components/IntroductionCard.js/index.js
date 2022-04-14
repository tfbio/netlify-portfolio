import useDimension from 'hooks/useDimensions'
import styles from './Intro.module.scss'

export default function IntroductionCard() {
  const { width } = useDimension()

  if(width < 480) {
    return (
      <p>hola que tal</p>
    )
  } else {
    return (
      <>
        <h1 className={styles.introduction}>
          <span>Hello</span>
          <span>World,</span>
          <span>I'm</span>
          <span>Fabio,</span>
          <span>Oliveira</span>
        </h1>
        <h2 className={styles.introduction}>
          <span></span>
          <span></span>
          <span></span>        
        </h2>
      </>
    )
  }
  
}