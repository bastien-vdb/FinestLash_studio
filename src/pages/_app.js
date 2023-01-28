import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import RendezVous from './RendezVous';

export default function App({ Component, pageProps }) {

  const [payClicked, setPayClicked] = useState(false);

  return (
    <>
      <div className='bg-white max-w-[1450px] m-auto'>
        <Header setPayClicked={setPayClicked} />
        <div style={{ display: payClicked ? 'block' : 'none' }}>
          <RendezVous />
        </div>
        <div style={{ display: payClicked ? 'none' : 'block' }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  )
}
