import "@/styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import RendezVous from "./RendezVous";
import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  const [payClicked, setPayClicked] = useState(false);

  return (
    <>
      <ChakraProvider>
        <div className="bg-white max-w-[1450px] m-auto">
          <Header setPayClicked={setPayClicked} />
          <div style={{ display: payClicked ? "block" : "none" }}>
            <RendezVous />
          </div>
          <div style={{ display: payClicked ? "none" : "block" }}>
            <Component setPayClicked={setPayClicked} {...pageProps} />
          </div>
          <Footer />
        </div>
      </ChakraProvider>
    </>
  );
}
