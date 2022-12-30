export default function Section({ children }) {
  return (
    <>
      <section className="lg:min-h-screen w-full flex flex-row justify-center">
        <div className="w-full lg:max-w-[960px] flex flex-col">
          { children }
        </div>
      </section>
    </>
  )
}