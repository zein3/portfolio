import { getIntroData } from '../lib/getIntro'
import { getAboutData } from '../lib/getAbout'
import { getAllProjects } from '../lib/getProjects'

import Head from 'next/head'
import Intro from '../components/intro'
import About from '../components/about'
import Projects from '../components/projects'

export default function Home({ intro, about, projects }) {
  return (
    <>
      <Head>
        <title>{ intro.name }</title>
        <meta name="description" content={ intro.tagline } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-primary min-h-screen w-screen max-w-full text-gray font-sans">
        <Intro name={intro.name} tagline={intro.tagline} description={intro.description} cv={false} />
        <About content={about.content} skills={about.skills} />
        <Projects projects={projects} />
        <div className="w-full h-24"></div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const intro = getIntroData();
  const about = getAboutData();
  const projects = getAllProjects();

  return {
    props: {
      intro,
      about,
      projects,
    }
  }
}