import React, { useState, useRef } from "react";
// import RuleModal from "@/components/reusable/RuleModal";
import ModalAlert from "@/components/reusable/ModalAlert";
import Loader from "@/components/reusable/Loader";

function RendezVous(props) {
  const [loading, setLoading] = useState(true);

  const ifram = useRef(null);

  return (
    <div>
      <div className="mt-32 flex justify-center items-center bg-[#ccb3aed9]">
        <ModalAlert />
      </div>
      <iframe
        id="Reservations"
        ref={ifram}
        preload="true"
        title="Réservations Rendez-vous"
        width="100%"
        height="100%"
        className="h-screen"
        src="https://dzt.pgb.mybluehost.me/"
        frameBorder="0"
        onLoad={() => setLoading(false)}
        style={{ display: loading ? "none" : "block" }}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox"
        allowsameorigin="true"
      ></iframe>
      {loading && <div>
        <div className="loading flex text-4xl text-[#CCB3AE] text-center justify-center items-center mt-10">Veuillez patienter quelques secondes...</div>
        <Loader/>
        </div>
        }
    </div>
  );
}

export default RendezVous;
