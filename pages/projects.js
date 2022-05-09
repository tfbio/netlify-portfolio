import Head from 'next/head'
import Navigation from '@components/Navigation'
import IntroductionCard from '@components/IntroductionCard.js'
import ShowcaseCard from '@components/ShowcaseCard'

import styles from '../styles/Home.module.scss'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Tfbio-me</title>
      </Head>
      <Navigation />
      <main>
        <section className={styles.projectsSection}>
          <h1 className={styles.sectionHeader}>Projects</h1>
            <ul>
              <ShowcaseCard title="Project A" />
              <ShowcaseCard title="Project B" />
              <ShowcaseCard title="Project C" />
            </ul>
        </section>
      </main>
    </>
  )
}