import Image from 'next/image'
import Section from './section'
import Header from './section/header'

export default function About() {
  return (
    <>
      <Section id="about">
        <Header dataAos="fade-in">
          About Me
        </Header>
        <div className="flex flex-col lg:grid lg:grid-cols-5 p-4 lg:py-8">
          <div data-aos="fade-right" className="lg:col-span-3 text-gray pr-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit diam lectus, at vulputate mi viverra ut. Etiam porttitor arcu et turpis mollis hendrerit. Nunc eu consequat lorem. Curabitur maximus sapien et tortor vulputate laoreet. Donec placerat dapibus ligula, id sodales nibh pharetra eu. Donec vestibulum enim sapien. Proin vitae congue orci. Fusce vel nisl non elit rhoncus molestie. Duis non volutpat magna. Nam porta malesuada commodo. Praesent odio risus, laoreet id neque nec, fringilla condimentum diam. Integer auctor purus dolor, vitae pellentesque urna scelerisque at. Quisque bibendum faucibus purus, vitae suscipit tellus egestas lobortis. Fusce et lacus turpis. 
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit diam lectus, at vulputate mi viverra ut.
            </p>
            <p className="mt-8">
              My Skills:
            </p>
            <ul className="grid grid-cols-3 gap-y-2 mt-2 font-light text-sm">
              <li className="before:content-['▹'] before:text-secondary before:mr-1">Javascript</li>
              <li className="before:content-['▹'] before:text-secondary before:mr-1">Javascript</li>
              <li className="before:content-['▹'] before:text-secondary before:mr-1">Javascript</li>
              <li className="before:content-['▹'] before:text-secondary before:mr-1">Javascript</li>
              <li className="before:content-['▹'] before:text-secondary before:mr-1">Javascript</li>
              <li className="before:content-['▹'] before:text-secondary before:mr-1">Javascript</li>
            </ul>
          </div>
          <div data-aos="fade-left" className="lg:col-span-2 flex flex-row py-8 justify-center">
            <div className="relative moving-border">
              <div className="absolute w-[250px] h-[250px] border-2 border-secondary rounded-md z-0 top-6 left-6 transition"></div>
              <Image
                src="https://picsum.photos/500"
                alt="Picture of me"
                width={250}
                height={250}
                className="rounded-md z-10 relative"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}