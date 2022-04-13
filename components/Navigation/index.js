import Clickable from "@components/Buttons/Clickable"
import styles from './Nav.module.scss'

export default function Navigation() {
  return (
    <nav className={styles.nav} >
      <div className={styles.navMain}>
        <a className={styles.navPag} href="#projects">Projects</a>
        <a className={styles.navPag} href="#studies">Studies</a>
        <a className={styles.navPag} href="#about">About</a>
      </div>
      
      
      <a className={styles.externals} href="#">link</a>
      <a className={styles.externals} href="#">git</a>
      <a className={styles.externals} href="#">medium</a>
    </nav>
  )
}
