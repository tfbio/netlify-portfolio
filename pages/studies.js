import Head from 'next/head'
import Navigation from '@components/Navigation'
import StudyCard from '@components/StudyCard'
import TechCard from '@components/TechCard'
import {languages, frameworks, other} from 'techs'

import styles from '../styles/Study.module.scss'

export default function Studies() {
  return (
    <>
      <Head>
        <title>Studies | Tfbio-me</title>
      </Head>
      <Navigation />
      <main>
        <section className={styles.content}>
          <div className={styles.techContainer}>
            <div>{languages.map(lang => <TechCard key={lang.id} title={lang.name} />)}</div>
            <div>{frameworks.map(framework => <TechCard key={framework.id} title={framework.name} />)}</div>
            <div> {other.map(other => <TechCard key={other.id} title={other.name} />)}</div>
          </div>
          <div className={styles.studyContainer}>
            <StudyCard title="Projetim"/>
          </div>
        </section>
      </main>
    </>
  )
}