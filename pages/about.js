import Head from 'next/head'
import Image from 'next/image'
import Navigation from '@components/Navigation'
import hero from 'assets/hero.jpeg'

import styles from '../styles/About.module.scss'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Tfbio-me</title>
      </Head>
      <Navigation />
      <main>
        <section className={styles.content}>
          <div  className={styles.aboutSection}>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut etiam sit amet nisl purus in mollis nunc. Gravida arcu ac tortor dignissim convallis aenean et. Adipiscing enim eu turpis egestas pretium aenean. Gravida quis blandit turpis cursus in hac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. In eu mi bibendum neque.</p>
              <p>Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Velit egestas dui id ornare. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Purus ut faucibus pulvinar elementum integer enim. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Felis eget velit aliquet sagittis id consectetur. Tristique risus nec feugiat in fermentum posuere.</p>
              <p className={styles.lastMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>            
            </div>
            <div>
              <Image 
                src={hero}
                className={styles.hero}
                width={260}  
                height={260}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}