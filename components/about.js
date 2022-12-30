import Image from 'next/image'
import Section from './section'
import Header from './section/header'

export default function About() {
  return (
    <>
      <Section>
        <Header>
          About Me
        </Header>
        <div className="grid grid-rows-2 lg:grid-rows-0 lg:grid-cols-5 p-4 lg:px-12 lg:py-8">
          <div className="col-span-3">
            <p className="text-gray">Hello!</p>
          </div>
          <div className="col-span-2">
            <Image
              src="https://picsum.photos/500"
              alt="Picture of me"
              width={250}
              height={250}
            />
          </div>
        </div>
      </Section>
    </>
  )
}