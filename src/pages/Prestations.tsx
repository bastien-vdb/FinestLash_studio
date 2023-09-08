import Techniques from "@/components/pages/prestations/Techniques";
import "aos/dist/aos.css";
import Meta from "@/components/metas/Meta";
import { techniques } from "@/data/prestations/techniques";
import { propsWithPayClicked } from "@/types/propsWithPayClicked";

// export const getServerSideProps = async () => {
//   const res = await fetch(`https://dzt.pgb.mybluehost.me/wp-json/wp/v2/pages/66`);
//   const repo = await res.json();
//   return { props: { repo } };
// };

function PrestationsPage({ setPayClicked }: propsWithPayClicked<{}>) {
  return (
    <>
      <Meta />
      <div className="cursor-pointer rounded-xl relative group shadow-xl">
        <div className="bannierePrestation w-full pt-16 pb-24 text-center">
          <h4 className="text-4xl font-bold text-gray-800">PRESTATIONS</h4>
          <p className="text-sm md:text-base text-gray-800 mt-6 text-justify lg:text-center mx-6 sm:mx-12 md:mx-40 lg:mx-96  ">
            Le Finest Beauty Studio propose 3 types de prestation : la pose cil à cil, la pose mixte et la pose volume. Il y en a sûrement qui se sentent un peu perdues entre ces différents types de pose et qui sont hésitantes quant au choix à faire, mais on a pensé à vous ! Toutes les explications dont vous avez
            besoin sont ci-dessous.
          </p>
        </div>

        <div data-aos="zoom-in" className="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
            {techniques.map((e, key) => {
              return <Techniques setPayClicked={setPayClicked} {...e} key={key} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PrestationsPage;
