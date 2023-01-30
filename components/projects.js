import { useState } from 'react';

import Section from './section'
import Header from './section/header'
import Project from './project'

export default function Projects({ projects }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Section id="recent-projects">
        <Header>
          Recent Projects
        </Header>
        <ul className="flex flex-col w-full">
          {projects.map((project, i) => {
            // 3 projek pertama masuk sini
            if (i > 2) return '';
            return <Project key={i} project={project} isEven={(i + 1) % 2 == 0} />
          })}
        </ul>
        <div class="my-4 w-full flex flex-row justify-center" data-aos="fade-up">
          <button
          className="text-secondary border-solid border-secondary rounded-lg border-2 py-4 px-6 transition hover:bg-secondary-dim"
          onClick={() => setShowAll(true)}>
            Show All
          </button>
        </div>
      </Section>
      { showAll &&
      <Section id="all-projects">
          <Header dataAos="fade-up">
            All Projects
          </Header>
      </Section>
      }
    </>
  )
}