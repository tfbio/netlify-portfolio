import Head from 'next/head'
import Navigation from '@components/Navigation'
import ShowcaseCard from '@components/ShowcaseCard'
import discord from 'assets/discordLogo.jpg'
import gbLogo from 'assets/gbLogo.jpg'
import netlify from 'assets/netlify.jpg'

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
          <p className={styles.intro}>Recent projects I developed for learning purposes or personal use</p>
          <ul>
            <li key="1">
              <ShowcaseCard 
                link="https://github.com/tfbio/sample-discord-bot"
                title="Discord Music Player"
                image={discord}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm"
              />
            </li>
            <li key="2">
              <ShowcaseCard 
                link="https://github.com/tfbio/gobarber-frontend"
                title="GoBarber"
                image={gbLogo}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm"
              />
            </li>
            <li key="3">
              <ShowcaseCard 
                link="#"
                title="Tfbio-me on Netlify" 
                image={netlify}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm"
              />
            </li>    
          </ul>
        </section>
      </main>
    </>
  )
}