export default function Footer() {
  return (
    <>
      <div className="w-full flex flex-col items-center py-12">
        <p className="font-normal text-white text-sm tracking-widest">
          Made with <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="footer-link">NextJS</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="footer-link">TailwindCSS</a>
        </p>
        <a href="https://github.com/zein3/portfolio" target="_blank" rel="noreferrer" className="footer-link tracking-widest">
          Created by Zein Haddad
        </a>
      </div>
    </>
  )
}