import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer(props) {
  return (
    <footer id="footer">
      <div className="footer m-4 flex-row flex flex-col gap-2 sm:flex-row sm:justify-around sm:items-center sm:px-20">
        <Image
          className="w-10 sm:w-32"
          src="/images/logo.svg"
          width={185}
          height={185}
          alt="finest logo"
        />
        {/* <div>
                    <h2 className='text-2xl text-left'>FINEST LASH</h2>
                    <ul>
                        <li>ACCUEIL</li>
                        <li>A PROPOS</li>
                    </ul>
                </div> */}
        <div className="hidden sm:block">
          {/* <h2 className='text-2xl text-left'>VOUS & FINEST LASH STUDIO</h2> */}
          <ul>
            <li>
              <Link href="/">ACCUEIL</Link>
            </li>
            <li>
              <Link href="/Legal">MENTIONS LÉGALES</Link>
            </li>
            <li>
              <Link href="/CGV">C.G.V</Link>
            </li>
            <li>
              <Link href="/Confidencial">POLI. DE CONFIDENTIALITÉ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center h-8 bg-[#CCB3AE] text-white text-xs text-center">
        @ 2023 Finest Lash Studio, Réalisation: @Bastien VDB
      </div>
    </footer>
  );
}

export default Footer;
