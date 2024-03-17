import React, { useState, useRef } from "react";
// import RuleModal from "@/components/reusable/RuleModal";
import ModalAlert from "@/components/reusable/ModalAlert";
import Loader from "@/components/reusable/Loader";

function RendezVous(props) {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {/* <div className="mt-32 flex justify-center items-center bg-[#ccb3aed9]">
        <ModalAlert />
      </div> */}
      {/* src="https://www.quickreserve.app/integrate/65eb8cc33db57d21b3e9c4f7" */}
      {/* src="http://localhost:3000/integrate/65eb8cc33db57d21b3e9c4f7" */}
      <iframe
        id="Reservations"
        preload="true"
        title="Réservations Rendez-vous"
        width="100%"
        className="h-screen"
        src="https://www.quickreserve.app/integrate/65eb8cc33db57d21b3e9c4f7"
        frameBorder="0"
        onLoad={() => setLoading(false)}
        style={{ display: loading ? "none" : "block", height: "130vh" }}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox"
        allowsameorigin="true"
      ></iframe>
      {loading && (
        <div>
          <div className="loading flex text-4xl text-[#CCB3AE] text-center justify-center items-center mt-10">Veuillez patienter quelques secondes...</div>
          <Loader />
        </div>
      )}
      ;
    </div>
  );
}

export default RendezVous;
