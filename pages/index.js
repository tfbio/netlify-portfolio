import Head from 'next/head'
import Navigation from '@components/Navigation'
import IntroductionCard from '@components/IntroductionCard.js'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Tfbio-me</title>
      </Head>
      <main>
        <Navigation />
      </main>
    </>
  )
}

/*
   <FaGitAlt  size={50}/>
        <FaCss3Alt  size={50}/>
        <FaHtml5  size={50}/>
        <SiMocha  size={50}/>
        <Sijest  size={50}/>
                <DiPostgresql  size={50}/>
        <SiExpress  size={50}/>
        <SiSass  size={50}/>
        <GrMysql  size={50}/>
        <GrDocker  size={50}/>

        

 



          <FaNodeJs color='#5FA04E' size={95}/>
          <FaReact color='#61DAFB' size={95}/>
          <SiTypescript color='#3178C6' size={85}/>
         <SiJavascript color='#f0db4f' size={75}/>
        <SiJava size={60}/>


*/