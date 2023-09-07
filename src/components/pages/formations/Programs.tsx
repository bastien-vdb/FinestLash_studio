import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProgramDescription from "@/components/pages/formations/ProgramDescription";
import Partie from "./Partie";
import Livrets from "./Livrets";
import type { programsType } from "@/types/programs";


type ProgramsProps = programsType;

export function Programs({ background, title, image, blocs, parties, link }: ProgramsProps) {
  return (
    <div className={`shadow-2xl p-2 ${background}`}>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="m-6 md:mx-10 xl:mx-20">
          <h3>LA FINEST LASH ACADEMY</h3>
          <h2>{title}</h2>
          {blocs.map(bloc => (
            <ProgramDescription bloc={bloc} />
          ))}
        </div>
        <Image className="shadow-xl m-auto w-[600px]" src={image} width={1366} height={1366} alt="Formation finest Studio" />
      </div>

      <div className="my-10">
        <h3 className="text-gray-400 m-4">Programme de la formation</h3>
      </div>

      <div className="programme md:m-10">
        <div className="programDescription flex flex-col md:flex-row md:justify-center gap-2">
          {parties.map(partie => (
            <Partie partie={partie} />
          ))}
        </div>
        <div className="flex flex-col my-20 md:justify-center md:items-center">
          <Link className="m-2 text-blue-800 font-bold" href={link}>
            &gt;&gt;&gt;Télécharger le programme de la formation au format PDF
          </Link>

          <Livrets />

          <ul className="mt-10 italic text-red-600">
            <li>Pour toute question ou demande d’inscription, veuillez envoyer un mail à l’adresse suivante</li>

            <li className="my-4 font-bold">Contact@finestlashstudio.fr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}