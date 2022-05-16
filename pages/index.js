import Head from 'next/head'
import Navigation from '@components/Navigation'
import IntroductionCard from '@components/IntroductionCard.js'

import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Tfbio-me</title>
      </Head>
      <Navigation />
      <main>
        <section className={styles.homeSection}>
          <IntroductionCard />
        </section>
      </main>
    </>
  )
}
