import { useState } from 'react';
// import Image from 'next/image'

export default function ProjectCard({ project, index }) {
  const [isHover, setHover] = useState(false);

  return (
    <>
      <div
        class="my-2 lg:my-0"
        data-aos="fade-up"
        data-aos-duration={(index%3) * 200 + 700}
      >
        <div class="w-full h-full flex flex-col justify-between rounded-sm bg-primary-dim transition hover:cursor-pointer hover:-translate-y-2"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div class="p-4">
            <h3 class={"font-medium text-2xl mb-2 transition " + (isHover ? 'text-secondary' : 'text-white')}>
              { project.metadata.title }
            </h3>
            <div dangerouslySetInnerHTML={{ __html: project.content }}></div>
          </div>
          {project.metadata.tech &&
          <ul class="p-4 flex flex-row items-center">
            { project.metadata.tech.map((tech, i) => {
              return <li class="text-gray text-sm font-normal mr-3" key={i}>{ tech }</li>
            }) }
          </ul>
          }
        </div>
      </div>
    </>
  )
}