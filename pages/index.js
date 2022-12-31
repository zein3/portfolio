import { getIntroData } from '../lib/getIntro'
import { getAboutData } from '../lib/getAbout'
import { getAllProjects } from '../lib/getProjects'

import Head from 'next/head'
import Intro from '../components/intro'
import About from '../components/about'
import Sidebar from '../components/sidebar'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

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
        <Sidebar />
        <Intro name={intro.name} heading={intro.heading} description={intro.description} />
        <About content={about.content} skills={about.skills} />
        <Projects projects={projects} />
        <Contact />
        <Footer />
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
      projects
    }
  }
}