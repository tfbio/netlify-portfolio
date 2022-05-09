import useDimension from 'hooks/useDimensions'
import { BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs'
import Link from 'next/link'
import styles from './Nav.module.scss'

export default function Navigation() {
  const currentWidth = useDimension()

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
        <Link href="/about">
          <a className={styles.navPag}>About</a>        
        </Link>
      </div>  
      <a className={styles.externals} href="#">
        <BsLinkedin />
      </a>
      <a className={styles.externals} href="#">
        <BsGithub />
      </a>
      <a className={styles.externals} href="#">
        <BsMedium />
      </a>
    </div>
  )
}
