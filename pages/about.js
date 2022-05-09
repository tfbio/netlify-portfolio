import Head from 'next/head'
import Navigation from '@components/Navigation'
import IntroductionCard from '@components/IntroductionCard.js'
import ShowcaseCard from '@components/ShowcaseCard'

import styles from '../styles/Home.module.scss'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Tfbio-me</title>
      </Head>
      <Navigation />
      <main>
        <section className={styles.firstSection}>
          <IntroductionCard />
        </section>
      </main>
    </>
  )
}