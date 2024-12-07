import Image from "next/image";
import ButtonBlack from "./reusable/ButtonBlack";
import Button from "./reusable/Button";
import Prestations from "./reusable/Prestations";
import { listPresta } from "./utils/staticsdata";
import {
  heroIconArrow,
  heroIconMap,
  heroIconEmail,
  heroIconPhone,
} from "./utils/staticsdata";
import { OverlayImageMobile, OverlayDesktop } from "./OverlayIMG";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { aosAnimationConfig } from "./utils/AosAnimationConfig";

function Corpus({ setPayClicked }) {
  useEffect(() => {
    AOS.init(aosAnimationConfig);
    if (typeof window !== "undefined") {
    }
  }, []);

  return (
    <>
      <div>
        <OverlayImageMobile setPayClicked={setPayClicked} />
        <OverlayDesktop setPayClicked={setPayClicked} />
      </div>

      <div data-aos="zoom-in" className="bloc1 p-6">
        <div className="bg-gray-50 p-6 gap-4 flex flex-col lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-4">
            <h3>Finest Lash Studio - LASH EXPERT</h3>
            <h2>Extension de cils by Finest Lash Studio</h2>
            <div className="text-center">
              <p className="mb-6">
                Bienvenue au <b>Finest Lash Studio</b>, un espace beauté
                spécialisé en extension de cils, situé à <b>Bobigny (93000)</b>.
              </p>

              <p>
                Proposant une variété de longueurs, courbures et épaisseurs pour
                que chacune y trouve son bonheur, le Finest Lash Studio s’adapte
                à chaque profil, et procède en fonction de la nature des cils de
                chaque cliente afin de sublimer leur regard sans endommager
                leurs cils naturels.
              </p>
            </div>
            <Button setPayClicked={setPayClicked} text="Prendre rendez-vous" />
          </div>
          {/* <Image className='m-auto md:max-w-[600px]' src='/images/blueeyes2.png' width={1024} height={1024} alt="palette" /> */}
        </div>
      </div>

      <div data-aos="zoom-in" className="bloc2">
        <h3>FINEST LASH STUDIO - Techniques</h3>
        <h2>Retrouvez nos techniques professionnelles</h2>
        <div className="flex flex-col items-center justify-center md:flex-row">
          {listPresta &&
            listPresta.map((e, key) => <Prestations key={key} {...e} />)}
        </div>
      </div>

      <div data-aos="zoom-out" className="bloc3 p-6">
        <div className="bg-gray-50 p-6 flex flex-col items-center justify-center gap-4 lg:flex-row">
          <Image
            className="m-auto md:max-w-[400px]"
            src="/images/vignettes/vignette5.jpg"
            width={683}
            height={932}
            alt="finest-salon"
          />
          <div className="sm:px-4 md:px-10">
            <h3>FINEST LASH STUDIO - La précision</h3>
            <h2>Bienvenue</h2>
            <p>
              Nous vous accueillons sur rendez-vous de 9h à 21h du lundi au
              samedi dans notre studio beauté pour toute prestation.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-6 items-center">
                {heroIconArrow} Horaires d'ouverture : <b>de 9h à 21h</b>
              </li>
              <li className="flex gap-6 items-center">
                {heroIconPhone} 𝟢7.83.63.97.38
              </li>
              <li className="flex gap-6 items-center">
                {heroIconEmail} contact@finestlashstudio.fr
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="bloc4 flex flex-col gap-8 my-6 mx-10 text-sm md:flex-row"
      >
        <div className="flex items-center">
          <Image
            src="/images/trust/icon1.png"
            width={91}
            height={91}
            alt="finest-salon"
          />
          <div className="m-2">
            <h6 className="m-0">Produits de qualité</h6>
            <p>
              Toutes les prestations sont réalisées avec les meilleurs produits
              professionnels.
            </p>
          </div>
        </div>

        {/* <div className='flex items-center'>
                <Image src='/images/trust/icon2.png' width={91} height={91} alt="finest-salon" />
                <div className='m-2'>
                    <h6 className='m-0'>Certifiée à l'international</h6>
                    <p>Au delà du diplôme, bénéficiez d'une expérience et d'une connaissance pointue</p>
                </div>
            </div> */}

        <div className="flex items-center">
          <Image
            src="/images/trust/icon3.png"
            width={91}
            height={91}
            alt="finest-salon"
          />
          <div className="m-2">
            <h6 className="m-0">Moment agréable</h6>
            <p>
              Profitez d'une expérience agréable, où je vous met à l'aise dans
              un studio dédié, cosy.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="zoom-out" className="bloc5">
        <div className="p-6">
          <div className="bg-gray-50 gap-4 py-2 flex flex-col justify-center items-center lg:flex-row">
            <Image
              className="max-w-[800px]"
              src="/images/finest-salon.png"
              width={3674}
              height={2758}
              alt="finest-salon"
            />
            <div className="flex flex-col items-center justify-center px-6 gap-2">
              <h3>
                FINEST LASH STUDIO - DEVENIR UN/UNE VERITABLE professionnel
              </h3>
              <h2>La formation</h2>
              <p className="text-center lg:w-72">
                Organisme de formation visant l’excellence, le Finest Lash
                Studio vous propose différentes formations en fonction de votre
                niveau et de vos projets...
              </p>
              <ButtonBlack text="Voir les formations" link="/Formations" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Corpus;
