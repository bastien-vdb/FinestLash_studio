import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import RendezVous from "./RendezVous";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App({ Component, pageProps }) {
  const [payClicked, setPayClicked] = useState(false);

  return (
    <>
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
    </>
  );
}
