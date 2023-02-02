import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Corpus from '@/components/Corpus';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ setPayClicked }) {
  return (
    <>
      <Head>
        <title>Finest Lash Studio</title>
        <meta name="description" content="FinestLash Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='sm:px-2 md:px-10 lg:px-16'>
        <Corpus setPayClicked={setPayClicked}  />
      </main>
    </>
  )
}
