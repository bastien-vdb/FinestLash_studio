import Image from "next/image";
import { Programs } from "@/components/pages/formations/Programs";
import { programs } from "@/data/formations/programs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { aosAnimationConfig } from "@/utils/AosAnimationConfig";
import Meta from "@/components/metas/Meta";

function Formations() {
  useEffect(() => {
    AOS.init(aosAnimationConfig);
  }, []);

  let programBackground = true;

  return (
    <>
      <Meta title="Finest Lash Studio - Formation" />
      <div className="bg-red-50 pb-10">
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
      </div>
      {programs.map((program, index) => {
        programBackground = !programBackground;
        return (
          <Programs
            background={programBackground ? 'bg-red-50' : ""}
            title={program.title}
            link={program.link}
            image={program.image}
            blocs={program.blocs}
            parties={program.parties}
          />
        )
      }
      )};
    </>
  );
}

export default Formations;
