import Head from 'next/head'
import Intro from '../components/intro'
import About from '../components/about'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zein Haddad</title>
        <meta name="description" content="Freelance Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-primary min-h-screen w-screen text-white">
        <Intro />
        <About />
      </main>
    </>
  )
}
