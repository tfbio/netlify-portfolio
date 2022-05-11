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
          <p className={styles.intro}>Projetims</p>
          <ul>
            <li key="Project A"><ShowcaseCard title="Project A" /></li>
            <li key="Project B"><ShowcaseCard title="Project B" /></li>
            <li key="Project C"><ShowcaseCard title="Project C" /></li>    
          </ul>
        </section>
      </main>
    </>
  )
}