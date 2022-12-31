import Typewriter from 'typewriter-effect'
import Section from './section'

export default function Intro() {
  return (
    <>
      <Section id="intro">
        <div className="flex flex-col items-start py-12 px-2 lg:px-0 lg:justify-center w-full h-full">
          <h1 data-aos="fade-up" className="text-secondary mb-8">Hello! My name is</h1>
          <h2 data-aos="fade-up" className="font-bold text-white text-4xl lg:text-7xl mb-4">Ahmad Zein Haddad.</h2>
          <h3 data-aos="fade-up" className="font-bold text-gray text-3xl lg:text-6xl mb-8">Freelance Web Developer.</h3>
          <div data-aos="fade-up" className="text-gray">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit diam lectus, at vulputate mi viverra ut. Etiam porttitor arcu et turpis mollis hendrerit. Nunc eu consequat lorem. Curabitur maximus sapien et tortor vulputate laoreet. */}
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hello, world!').start()
              }}
            />
          </div>
          <div className="lg:h-1/6"></div>
        </div>
      </Section>
    </>
  )
}