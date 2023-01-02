import Typewriter from 'typewriter-effect'
import Section from './section'

export default function Intro({ name, tagline, description }) {
  return (
    <>
      <Section id="intro">
        <div className="flex flex-col items-start py-12 px-2 lg:px-0 lg:justify-center w-full h-full">
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-secondary mb-8 tracking-widest">Hello! My name is</h1>
          <h2 data-aos="fade-up" data-aos-delay="200" className="font-bold text-white text-4xl lg:text-7xl mb-4">{ name }</h2>
          <h3 data-aos="fade-up" data-aos-delay="300" className="font-bold text-gray text-3xl lg:text-6xl mb-8">{ tagline }</h3>
          <div data-aos="fade-up" data-aos-delay="400" className="text-gray w-1/2">
            <Typewriter
              options={{ 
                delay: 75
               }}
              onInit={(typewriter) => {
                typewriter.typeString(description).start()
              }}
            />
          </div>
          <div className="lg:h-1/6"></div>
        </div>
      </Section>
    </>
  )
}