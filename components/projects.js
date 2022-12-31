import Section from './section'
import Header from './section/header'
import Project from './project'

export default function Projects({ projects }) {
  return (
    <>
      <Section id="projects">
        <Header>
          Recent Projects
        </Header>
        <ul className="flex flex-col w-full">
          {projects.map((project, i) => {
            return <Project key={i} project={project} isEven={(i + 1) % 2 == 0} />
          })}
        </ul>
      </Section>
    </>
  )
}