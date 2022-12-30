import Section from './section'

export default function Intro() {
  return (
    <>
      <Section>
        <div className="flex flex-col py-12 px-2 lg:px-0 lg:justify-center w-full h-full">
          <h1 className="text-secondary mb-8">Hello! My name is</h1>
          <h2 className="font-bold text-white text-4xl lg:text-6xl mb-4">Ahmad Zein Haddad.</h2>
          <h3 className="font-bold text-gray text-4xl lg:text-6xl mb-8">Freelance Web Developer.</h3>
          <p className="text-gray">About me</p>
          <div className="lg:h-1/6"></div>
        </div>
      </Section>
    </>
  )
}