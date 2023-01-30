import Image from 'next/image'

export default function Project({ project, isEven }) {
  return (
    <>
      <li className="my-4 w-full flex flex-col lg:grid lg:grid-cols-2">
        {/* Project Content */}
        <div
          // data-aos={isEven ? "fade-left" : "fade-right"}
          data-aos="fade-in"
          className={(isEven ? "lg:col-start-2" : "lg:col-start-1") + " lg:col-span-1 lg:row-start-1 mb-2"}>
          <div className="w-full h-full flex flex-col px-8 lg:bg-primary-dim rounded-sm lg:py-2">
            <h3 className="font-bold text-xl lg:text-2xl text-white transition hover:text-secondary hover:-translate-y-0.5">
              <a href={project.metadata.link} target="_blank" rel="noreferrer">
                { project.metadata.title }
              </a>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: project.content }}></div>
            { project.metadata.tech &&
              <div className="flex flex-row items-center mt-4">
                { project.metadata.tech.map((tech, i) => {
                  return <p key={i} className="bg-darkgray mr-2 px-2 py-1 rounded-sm text-gray font-normal text-sm">{ tech }</p>
                }) }
              </div>
            }
          </div>
        </div>

        {/* Project Image */}
        <div
          // data-aos={isEven ? "fade-right" : "fade-left"}
          data-aos="fade-in"
          className={(isEven ? "lg:col-start-1" : "lg:col-start-2") + " lg:col-span-1 lg:row-start-1"}>
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src={project.metadata.image}
              alt={project.metadata.title}
              width={600}
              height={400}
              className="max-w-xs lg:max-w-md max-h-fit"
            />
          </div>
        </div>
      </li>
    </>
  )
}