import React, { useState, useEffect } from "react";
import ModalAlert from "@/components/reusable/ModalAlert";
import Loader from "@/components/reusable/Loader";

function RendezVous2(props) {
  const [loading, setLoading] = useState(true);

  const adjustIframeHeight = () => {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const iframe = document.getElementById("Reservations");
    if (header && footer && iframe) {
      const headerHeight = header.clientHeight;
      const footerHeight = footer.clientHeight;
      iframe.style.height = `calc(100vh - ${headerHeight + footerHeight}px)`;
    }
  };

  useEffect(() => {
    adjustIframeHeight();
    window.addEventListener("resize", adjustIframeHeight);
    return () => {
      window.removeEventListener("resize", adjustIframeHeight);
    };
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div style={{ height: "100vh", width: "100%" }}>
        <iframe
          id="Reservations"
          preload="true"
          title="Réservations Rendez-vous"
          className=""
          width={"100%"}
          height={"100%"}
          src="https://www.quickreserve.app/integrate/66536d718a97b102c3f8159e"
          onLoad={() => setLoading(false)}
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
