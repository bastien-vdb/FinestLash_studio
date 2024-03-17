import React from "react";
import Image from "next/image";

export function Programs1() {
  return (
    <div className="shadow-2xl p-2">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="m-6 md:mx-10 xl:mx-20">
          <h3>Les bases du cil à cil, sur 2 jours</h3>
          <h2>CLASSIC MASTERY:</h2>

          <div className="text-justify">
            <p className="mt-10">Conçue pour les personnes ayant pour projet de démarrer une activité en tant que lash artist, cette formation sur 2 jours offre à ses apprenants des bases solides, aussi bien théorique que pratique, afin de commencer à exercer leur activité en toute confiance.</p>
            <p className="mt-10">Natacha, la fondatrice et formatrice du Finest Lash Studio, partage non seulement sa technique raffinée, mais également toutes les petites astuces nécessaires afin de vous démarquer dans cette industrie de plus en plus compétitive.</p>
          </div>
        </div>
        <Image className="shadow-xl m-auto w-[800px]" src="/images/Formations/classicmastery_day1.png" width={1080} height={1350} alt="Formation finest Studio" />
      </div>
    </div>
  );
}

export function Programs2(props) {
  return (
    <div className="shadow-2xl p-2 bg-red-50">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="m-6 md:mx-10 xl:mx-20">
          <h3>L’art du volume fait main, sur 1 jour</h3>
          <h2>VOLUME ARTISTRY:</h2>

          <div className="text-justify">
            <p className="mt-10">
              Être lash artist, c’est savoir créer et adapter une pose en fonction du client. Pour adapter une pose à un client, il est nécessaire de savoir faire ses bouquets à la main ! Vous pourrez jongler entre bouquets fermés, ouverts, légers, denses…ce qui est non négligeable, surtout lorsque la compétition
              devient de plus en plus coriace.
            </p>
            <p className="mt-10">L’art de l’extension de cils nécessite donc, pour le Finest Lash Studio, de faire ses bouquets à la main. Ceci est, pour nous, un impératif afin de ne pas vous limiter dans votre art, car encore une fois : vous êtes votre seule limite. </p>
            <p className="mt-10">Natacha fera des rappels techniques afin de faire un volume digne de ce nom, et vous apprendra à créer vos bouquets vous-même et à faire différents effets en fonction du rendu souhaité.</p>
          </div>
        </div>
        <Image className="shadow-xl m-auto w-[600px]" src="/images/Formations/volumeartistry.png" width={1366} height={1366} alt="Formation finest Studio" />
      </div>
    </div>
  );
}

export function Programs3(props) {
  return (
    <div className="shadow-2xl p-2">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="m-6 md:mx-10 xl:mx-20">
          <h3>Regroupe le Classic Mastery + Volume Artistry, sur 3 jours</h3>
          <h2>FINEST FUSION:</h2>

          <div className="text-justify">
            <p className="mt-10">Pour cette formation Finest Fusion, il y a 1 mois d’intervalle entre le Classic Mastery et le Volume Artistry, pour que vous ayez le temps de vous entraîner et vous familiariser avec le cil à cil avant de vous former au volume.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Programs4(props) {
  return (
    <div className="shadow-2xl p-2 bg-red-50">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="m-6 md:mx-10 xl:mx-20">
          <h3>Effets fox eyes et eyeliner, sur 1 jour</h3>
          <h2>VOLUME ARTISTRY PRO LEVEL:</h2>

          <div className="text-justify">
            <p className="mt-10">Envie de vous démarquer encore plus dans une industrie déjà très compétitive ?</p>
            <p className="mt-10">Le Finest Lash Studio vous propose une formation encore plus technique, dans laquelle vous apprendrez les fondamentaux d’un travail artistique incluant principalement les courbures spécifiques dont les courbures L et M.</p>
            <p className="mt-10">À l’issue de cette formation, vous serez en mesure de créer des effets fox eyes et liner qui auront le mérite d’être appelés ainsi.</p>
          </div>
        </div>
        <Image className="shadow-xl m-auto w-[600px]" src="/images/Formations/volumeartistry_prolevel.png" width={1366} height={1366} alt="Formation finest Studio" />
      </div>

      <div className="my-10">
        <h3 className="text-gray-400 m-4">Programme de formation pour le jour du volume</h3>
      </div>
    </div>
  );
}

export function Programs5(props) {
  return (
    <div className="shadow-2xl p-2">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="m-6 md:mx-10 xl:mx-20">
          <h3>En fonction de la demande, en général sur une journée entière.</h3>
          <h2>FORMATION PERFECTIONNEMENT:</h2>

          <div className="text-justify">
            <p className="mt-10">La formation de perfectionnement est une formation faite sur mesure, afin qu’elle soit bénéfique à chaque apprenant. </p>
            <p className="mt-10">Natacha crée un programme sur la journée spécialement en fonction de vos besoins : il faut au préalable la contacter et discuter avec elle des différents points sur lesquels vous aimeriez travailler en fonction de vos lacunes et vos objectifs. </p>
            <p className="mt-10">Les points évoqués peuvent être purement techniques aussi bien que relatifs au business. L’expérience de Natacha vous sera plus que bénéfique. </p>
          </div>
        </div>
        <Image className="shadow-xl m-auto w-[800px]" src="/images/Formations/perfectionnement2.png" width={1080} height={1350} alt="Formation finest Studio" />
      </div>

      <ul className="mt-20 italic text-center text-red-600">
        <li>Pour toute demande d’information ou inscription, n’hésitez pas à nous contacter via :</li>
        <li className="my-4 font-bold">DM Instagram : @finestlashstudio</li>
        <li className="my-4 font-bold">Téléphone : +33 7 83 63 97 38</li>
        <li className="my-4 font-bold">E-mail : contact@finestlash.fr</li>
      </ul>
    </div>
  );
}
