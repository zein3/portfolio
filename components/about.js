import Image from 'next/image'
import Section from './section'
import Header from './section/header'

export default function About({ content, skills }) {
  return (
    <>
      <Section id="about">
        <Header dataAos="fade-in">
          About Me
        </Header>
        <div className="flex flex-col lg:grid lg:grid-cols-5 p-4 lg:py-8">
          <div data-aos="fade-up" className="lg:col-span-3 text-gray pr-6">
            <div className="grid grid-cols-1 gap-y-4" dangerouslySetInnerHTML={{ __html: content }}></div>
            <p className="mt-8">
              My Skills:
            </p>
            <ul className="grid grid-cols-3 gap-y-2 mt-2 font-light text-sm">
              {skills.map((skill, i) => {
                return <li key={i} className="before:content-['▹'] before:text-secondary before:mr-1">{ skill }</li>
              })}
            </ul>
          </div>
          <div data-aos="fade-up" className="lg:col-span-2 flex flex-row py-8 justify-center">
            <div className="relative moving-border">
              <div className="absolute w-[250px] h-[250px] border-2 border-secondary rounded-md z-0 top-6 left-6 transition"></div>
              <Image
                src="https://picsum.photos/500"
                alt="Picture of me"
                width={250}
                height={250}
                className="rounded-md z-10 relative hover:shadow-md"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}