import Head from 'next/head'
import Navigation from '@components/Navigation'
import ShowcaseCard from '@components/ShowcaseCard'

import styles from '../styles/Project.module.scss'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Tfbio-me</title>
      </Head>
      <Navigation />
      <main>
        <section className={styles.projectsSection}>
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