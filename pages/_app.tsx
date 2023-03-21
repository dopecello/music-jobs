import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Quicksand } from '@next/font/google';
import Nav from '../components/Nav';
import Header from '../components/Header';
import { SessionProvider } from "next-auth/react"

const quicksand = Quicksand({
  subsets: ['latin'],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className={quicksand.className}>
        <Header />
        <Nav />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
