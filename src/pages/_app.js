import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import RendezVous from "./RendezVous";

import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
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
