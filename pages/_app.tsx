import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Quicksand } from '@next/font/google'
import Nav from '../components/Nav'

const quicksand = Quicksand({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={quicksand.className}>
      <Nav />
      <Component {...pageProps} />
    </main>
  )
}