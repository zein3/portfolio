import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 400,
    })
  }, [])
  return <Component {...pageProps} />
}
