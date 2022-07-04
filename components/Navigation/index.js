import { BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs'
import Link from 'next/link'
import styles from './Nav.module.scss'

export default function Navigation() {
  return (
    <div className={styles.nav} >
      <div className={styles.navMain}>
        <Link href="/">
          <a className={styles.navPag}>Home</a>
        </Link>
        <Link href="/projects">
          <a className={styles.navPag}>Projects</a>
        </Link>
        <Link href="/studies">
          <a className={styles.navPag}>Studies</a>
        </Link>
      </div>  
      <a className={styles.externals} href="http://www.linkedin.com/in/ftavares-oliveira">
        <BsLinkedin />
      </a>
      <a className={styles.externals} href="https://github.com/tfbio">
        <BsGithub />
      </a>
      <a className={styles.externals} href="https://medium.com/@tfbio.oliveira/review-on-bug-tracking-5149544bd2d2">
        <BsMedium />
      </a>
    </div>
  )
}
