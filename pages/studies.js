import Head from 'next/head'
import Navigation from '@components/Navigation'
import StudyCard from '@components/StudyCard'
import TechCard from '@components/TechCard'
import { languages, frameworks, other } from 'content/techs'
import { frontend, backend } from 'content/studies'

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
            <div className={styles.techRow}>{languages.map(lang => <TechCard key={lang.id} title={lang.name} />)}</div>
            <div className={styles.techRow}>{frameworks.map(framework => <TechCard key={framework.id} title={framework.name} />)}</div>
            <div className={styles.techRow}> {other.map(other => <TechCard key={other.id} title={other.name} />)}</div>
          </div>
          <div className={styles.studyContainer}>
            <div className={styles.studyContent}>
              <h2>Backend</h2>
              {backend.map(repo => (
                <StudyCard 
                  key={repo.id}
                  title={repo.title}
                  description={repo.description}
                  link={repo.link}  
                />
              ))}
            </div>
            <div className={styles.studyContent}> 
              <h2>Frontend</h2>
              {frontend.map(repo => (
                <StudyCard 
                  key={repo.id}
                  title={repo.title}
                  description={repo.description}
                  link={repo.link}  
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}