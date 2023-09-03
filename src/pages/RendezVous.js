import React, { useState, useRef } from "react";
// import RuleModal from "@/components/reusable/RuleModal";
import ModalAlert from "@/components/reusable/ModalAlert";
import Loader from "@/components/reusable/Loader";

function RendezVous(props) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center my-40">
      <div className="mt-32 flex justify-center items-center bg-[#ccb3aed9]">
        <ModalAlert />
      </div>
      <iframe
        id="Reservations"
        preload="true"
        title="Réservations Rendez-vous"
        width="100%"
        height="100%"
        className="h-screen"
        src="http://wp.finestlash.studio/"
        frameBorder="0"
        onLoad={() => setLoading(false)}
        style={{ display: loading ? "none" : "block" }}
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox"
        allowsameorigin="fals"
      ></iframe>
      {loading && (
        <div>
          <div className="loading flex text-4xl text-[#CCB3AE] text-center justify-center items-center mt-10">Veuillez patienter quelques secondes...</div>
          <Loader />
        </div>
      )}
      {/* <a class="group flex items-center justify-between w-80 gap-4 rounded-lg border border-[#CCB3AE] bg-pink-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring" href="http://wp.finestlash.studio/">
        <span class="font-medium text-white transition-colors group-hover:text-[#CCB3AE] group-active:text-[#CDB4AE]">Prendre un rendez-vous</span>

        <span class="shrink-0 rounded-full border border-current bg-white p-2 text-[#CCB3AE] group-active:text-[#CCB3AE]">
          <svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </a> */}
    </div>
  );
}

export default RendezVous;
