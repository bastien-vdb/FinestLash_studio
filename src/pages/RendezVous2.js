import React from "react";
import Image from "next/image";
import {
  heroIconArrow,
  heroIconMap,
  heroIconEmail,
  heroIconPhone,
} from "../components/utils/staticsdata";
import ContactForm from "@/components/ContactForm";
import ContactForm2 from "@/components/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { aosAnimationConfig } from "../components/utils/AosAnimationConfig";
import ModalAlert from "@/components/reusable/ModalAlert";
import Loader from "@/components/reusable/Loader";

function RendezVous2(props) {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {/* <div className="mt-32 flex justify-center items-center bg-[#ccb3aed9]">
        <ModalAlert />
      </div> */}
      {/* src="https://www.quickreserve.app/integrate/65eb8cc33db57d21b3e9c4f7" */}
      {/* src="http://localhost:3000/integrate/65eb8cc33db57d21b3e9c4f7" */}

      <div>
        <iframe
          id="Reservations"
          preload="true"
          title="Réservations Rendez-vous"
          width="100%"
          className="h-screen"
          src="https://www.quickreserve.app/integrate/66536d718a97b102c3f8159e"
          onLoad={() => setLoading(false)}
          frameBorder="0"
          style={{ display: loading ? "none" : "block" }}
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox"
          allowsameorigin="true"
        ></iframe>
        {loading && (
          <div>
            <div className="loading flex text-4xl text-[#CCB3AE] text-center justify-center items-center mt-10">
              Veuillez patienter quelques secondes...
            </div>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}

export default RendezVous2;
