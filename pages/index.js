import { getIntroData } from '../lib/getIntro'
import { getAboutData } from '../lib/getAbout'
import { getAllProjects } from '../lib/getProjects'

import Head from 'next/head'
import Intro from '../components/intro'
import About from '../components/about'
import Sidebar from '../components/sidebar'

export default function Home({ intro, about, projects }) {
  return (
    <>
      <Head>
        <title>{ intro.name }</title>
        <meta name="description" content="Freelance Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-primary min-h-screen w-screen text-gray">
        <Intro name={intro.name} heading={intro.heading} description={intro.description} />
        <About paragraph1={about.paragraph1} paragraph2={about.paragraph2} skills={about.skills} />
        <Sidebar />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const intro = getIntroData();
  const about = getAboutData();
  const projects = getAllProjects();
  console.log(projects);

  return {
    props: {
      intro,
      about,
      projects
    }
  }
}