import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='bg-white max-w-[1450px] m-auto'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
