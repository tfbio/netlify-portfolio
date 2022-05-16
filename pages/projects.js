import Head from 'next/head'
import Navigation from '@components/Navigation'
import ShowcaseCard from '@components/ShowcaseCard'
import discord from 'assets/discordLogo.JPG'
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
          <p className={styles.intro}>Projects I developed for learning purposes or personal use</p>
          <ul>
            <li key="1">
              <ShowcaseCard 
                link="https://github.com/tfbio/sample-discord-bot"
                title="Discord Music Player"
                image={discord}
                description="Discord Bot for organizing and running playlists for users inside channels. Stores playlists with Postgres and was deployed in Heroku"
              />
            </li>
            <li key="2">
              <ShowcaseCard 
                link="https://github.com/tfbio/gobarber-frontend"
                title="GoBarber"
                image={gbLogo}
                description="Application for scheduling appointments with many common features as registration, login and password recovery"
              />
            </li>
            <li key="3">
              <ShowcaseCard 
                link="https://github.com/tfbio/netlify-portfolio"
                title="Tfbio-me on Netlify" 
                image={netlify}
                description="Site developed in Next.js and deployed with Netlify"
              />
            </li>    
          </ul>
        </section>
      </main>
    </>
  )
}