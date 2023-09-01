import React from "react";
import { useState } from "react";

function Iframe({ id, preload, title, width, height, className, src, frameBorder, style, sandbox, allowsameorigin }) {

  return (
    <iframe
      id="Reservations"
      preload="true"
      title="Réservations Rendez-vous"
      width="100%"
      height="100%"
      className="h-screen"
      src={src}
      frameBorder="0"
      sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox"
      allowsameorigin="true"
    ></iframe>
  );
}

export default Iframe;
