import Head from 'next/head'
import Card from '@components/Card'

export default function Home() {
  return (
    <div className="container">
      <main>
        <nav>navegação aqui fi</nav>
        <div className='content'>
          <section className='welcome'>
            <h1>Welcome to my app!</h1>
            <p className="subtitle">Get started by editing</p>
          </section>
          <section className='repositories'>
            <Card title='Repo name'/>
          </section>    
        </div>  
      </main>
    </div>
  )
}
