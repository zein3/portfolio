import { useState } from 'react';

import Image from 'next/image'
import Modal from './modal';

export default function ProjectCard({ project, index }) {
  const [isHover, setHover] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <>
      <div
        className="my-2 lg:my-0"
        data-aos="fade-up"
        data-aos-duration={(index % 3) * 200 + 700}
      >
        <div className="w-full h-full flex flex-col justify-between rounded-sm bg-primary-dim transition hover:cursor-pointer hover:-translate-y-2"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setOpen(true)}
        >
          <div className="p-4">
            <h3 class={"font-medium text-2xl mb-2 transition " + (isHover ? 'text-secondary' : 'text-white')}>
              { project.metadata.title }
            </h3>
            <p>{ project.metadata.excerpt }</p>
            {/* <div dangerouslySetInnerHTML={{ __html: project.content }}></div> */}
          </div>
          {project.metadata.tech &&
          <ul className="p-4 flex flex-row items-center">
            { project.metadata.tech.map((tech, i) => {
              return <li className="text-gray text-sm font-normal mr-3" key={i}>{ tech }</li>
            }) }
          </ul>
          }
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title={ project.metadata.title }>
          <div className="relative max-w-2xl aspect-video mx-auto w-full">
            <Image
              src={project.metadata.image}
              alt={project.metadata.title}
              fill
              className="rounded-md"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: project.content }} className="my-4"></div>
          <div className="flex flex-row items-center">
            
            {/* Demo/Open Website */}
            {project.metadata.link &&
            <a href={project.metadata.link} className="mr-2 text-secondary border-solid border-secondary rounded-lg border-2 py-2 px-3 transition hover:bg-secondary-dim flex flex-row items-center" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <p className="ml-1">
                Open Website
              </p>
            </a>
            }

            {/* Source Code Button */}
            {project.metadata.source &&
            <a href={project.metadata.source} className="mr-2 text-secondary border-solid border-secondary rounded-lg border-2 py-2 px-3 transition hover:bg-secondary-dim flex flex-row items-center" target="_blank" rel="noreferrer">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
              </svg>
              <p className="ml-1">
                Source
              </p>
            </a>
            }
          </div>
      </Modal>
    </>
  )
}