import React, { useState, useEffect } from "react";
import ModalAlert from "@/components/reusable/ModalAlert";
import Loader from "@/components/reusable/Loader";

function RendezVous2(props) {
  const [loading, setLoading] = useState(true);
  const [height, setHeight] = useState(0);

  const adjustIframeHeight = () => {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const iframe = document.getElementById("Reservations");
    if (header && footer && iframe) {
      const headerHeight = header.offsetHeight;
      const footerHeight = footer.offsetHeight;
      const iframeSize = `${
        window.innerHeight - headerHeight - footerHeight - 5
      }px`;
      setHeight(iframeSize);
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div style={{ flex: 1 }}>
        <iframe
          id="Reservations"
          preload="true"
          title="Réservations Rendez-vous"
          height={height}
          width={"100%"}
          // src="https://www.quickreserve.app/integrate/66536d718a97b102c3f8159e"
          src="https://dzt.pgb.mybluehost.me/"
          onLoad={() => setLoading(false)}
          style={{ display: loading ? "none" : "block", border: "none" }}
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox"
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
