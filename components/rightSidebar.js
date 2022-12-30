export default function rightSidebar() {
  return (
    <>
      <div className="px-8 h-screen hidden lg:flex lg:flex-col justify-end fixed bottom-0 right-0">
        <a className="text-gray vertical-rl transition hover:-translate-y-1 hover:text-secondary my-8" href="mailto:zeinhaddad02@gmail.com">
          zeinhaddad02@gmail.com
        </a>
        <div className="h-1/5 border-l-[1px] border-l-gray self-center"></div>
      </div>
    </>
  )
}