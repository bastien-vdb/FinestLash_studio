import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import RendezVous from "./RendezVous";
import { Theme } from "@radix-ui/themes";

import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  const [payClicked, setPayClicked] = useState(false);

  return (
    <ChakraProvider>
      <Theme>
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
      </Theme>
    </ChakraProvider>
  );
}
