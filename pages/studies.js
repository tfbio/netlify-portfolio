import Head from 'next/head'
import Navigation from '@components/Navigation'
import IntroductionCard from '@components/IntroductionCard.js'
import ShowcaseCard from '@components/ShowcaseCard'
import StudyCard from '@components/StudyCard'
import TechCard from '@components/TechCard'

import styles from '../styles/Home.module.scss'

export default function Studies() {
  return (
    <>
      <Head>
        <title>Studies | Tfbio-me</title>
      </Head>
      <Navigation />
      <main>
        <section>
          <StudyCard title="Projetim"/>
        </section>
        <section>
          <TechCard title="Javascript" />
        </section>
      </main>
    </>
  )
}