import useDimension from 'hooks/useDimensions'
import { useEffect, useState } from 'react'
import styles from './Nav.module.scss'

export default function Navigation() {
  const currentWidth = useDimension()

  if(currentWidth < 480) {
    return (
      <nav className={styles.header}>
        <p>hola que tal</p>
      </nav>
    )
  } else {
    return (
      <div className={styles.nav} >
        <div className={styles.navMain}>
          <a className={styles.navPag} href="#projects">Projects</a>
          <a className={styles.navPag} href="#studies">Studies</a>
          <a className={styles.navPag} href="#about">About</a>
        </div>  
        <a className={styles.externals} href="#">link</a>
        <a className={styles.externals} href="#">git</a>
        <a className={styles.externals} href="#">medium</a>
      </div>
    )
  }
}
