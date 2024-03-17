import Image from "next/image";
import { Programs1, Programs2, Programs3, Programs4, Programs5 } from "../components/Programs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { aosAnimationConfig } from "../components/utils/AosAnimationConfig";

function Formations() {
  useEffect(() => {
    AOS.init(aosAnimationConfig);
  }, []);

  return (
    <>
      <div data-aos="zoom-in" className="bg-red-50 pb-10">
        <div className="formations mobileBaniere w-full h-screen shadow-2xl md:hidden"></div>
        <div className="container relative grid grid-cols-2 lg:w-[1000px] m-auto rounded shadow-lg">
          <Image data-aos="zoom-in" className="opacity-90 sm:h-[300px] shadow-sm object-cover border-2" src="/images/vignettes/vignette1.jpeg" width={1366} height={1366} alt="Formation finest Studio" />
          <Image data-aos="zoom-in" className="opacity-90 sm:h-[300px] shadow-sm object-cover border-2" src="/images/vignettes/vignette2.jpg" width={1366} height={1366} alt="Formation finest Studio" />
          <Image data-aos="zoom-in" className="opacity-90 sm:h-[400px] shadow-lg object-cover border-2 col-span-2" src="/images/vignettes/vignette4.jpg" width={1366} height={1366} alt="Formation finest Studio" />
          <div className="image-overlay">
            <div className="overlay-text flex flex-col items-center justify-center gap-6">
              <h3 className="text-lg text-white">Formations FinestLash Studio</h3>
              <span className="mx-6 text-3xl text-center text-white md:mx-12 lg:mx-40 lg:text-5xl">Une formation professionalisante</span>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out" className="flex flex-col gap-4 text-xs m-4 sm:m-20 sm:mx-20 md:mx-28 lg:mx-60">
          <h2 className="mt-4 text-center m-2">Organisme de formation visant l’excellence, le Finest Lash Studio vous propose différentes formations en fonction de votre niveau et de vos projets. </h2>
          <h2 className="mt-4 text-center m-2">Il est impératif pour nous de proposer des formations dans lesquelles l’enseignement d’une technique irréprochable est priorisée. </h2>
          <h2 className="mt-4 text-center m-2">
            Dispensées dans une ambiance intimiste, elles vous permettront d’être performant(e) et confiant(e) dans votre travail, et ainsi, de proposer un service de qualité, tout en vous démarquant sur ce marché de plus en plus compétitif : l’objectif n’étant pas de seulement former des (futur.e.s.) technicien(ne)s,
            mais de réels artistes.{" "}
          </h2>
          <h2 className="mt-4 text-center m-2 font-bold">Les formations proposées:</h2>
        </div>
      </div>

      <div data-aos="zoom-in">
        <Programs1 />
      </div>
      <div data-aos="zoom-out">
        <Programs2 />
      </div>
      <div>
        <Programs3 data-aos="zoom-in" />
      </div>
      <div data-aos="zoom-out">
        <Programs4 />
      </div>
      <div>
        <Programs5 data-aos="zoom-in" />
      </div>
    </>
  );
}

export default Formations;
