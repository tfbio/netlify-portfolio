import Head from 'next/head'
import Image from 'next/image'
import Navigation from '@components/Navigation'
import hero from 'assets/hero.jpeg'
import { firstParagraph, secondParagraph, footerParagraph } from 'content/about'

import styles from '../styles/About.module.scss'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Tfbio-me</title>
      </Head>
      <Navigation />
      <main>
        <section className={styles.content}>
          <div className={styles.aboutSectionWrapper}>
            <div className={styles.aboutSection}>
              <div>
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
                <p className={styles.lastMessage}>{footerParagraph}</p>            
              </div>
              <div className={styles.heroWrapper}>
                <Image 
                  src={hero}
                  className={styles.hero}
                  width={260}  
                  height={260}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}