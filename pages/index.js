import { getIntroData } from '../lib/getIntro'
import { getAboutData } from '../lib/getAbout'
import { getAllProjects } from '../lib/getProjects'
import { getContactInfo } from '../lib/getContactInfo'

import Head from 'next/head'
import Intro from '../components/intro'
import About from '../components/about'
import Sidebar from '../components/sidebar'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function Home({ intro, about, projects, contact }) {
  return (
    <>
      <Head>
        <title>{ intro.name }</title>
        <meta name="description" content={ intro.tagline } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-primary min-h-screen w-screen max-w-full text-gray font-sans">
        <Sidebar contact={contact} />
        <Intro name={intro.name} tagline={intro.tagline} description={intro.description} />
        <About content={about.content} skills={about.skills} />
        <Projects projects={projects} />
        <Contact contact={contact} />
        <Footer />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const intro = getIntroData();
  const about = getAboutData();
  const projects = getAllProjects();
  const contact = getContactInfo();

  return {
    props: {
      intro,
      about,
      projects,
      contact
    }
  }
}