import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Programs1(props) {
    return (
        <div className='shadow-2xl p-2'>
            <div className='flex flex-col items-center justify-center lg:flex-row'>
                <div className='m-6 md:mx-10 xl:mx-20'>
                    <h3>LA FINEST LASH ACADEMY</h3>
                    <h2>Formation Cil à cil 1150 €
                    </h2>

                    <div className='text-justify'>
                        <p className='mt-10'>
                            La formation Cil à cil, sur 2 jours, est faite pour les lash students débutantes sans expérience, souhaitant démarrer une activité en qualité de technicienne en extension de cils. Le programme de formation, traite non seulement de l’art et la technique, mais consacre également une partie Business et Money Making de cette industrie devenant compétitive, et étant donc, pour la Finest Academy, indispensable afin de faire évoluer son activité.
                        </p>
                        <p>
                            Les nouvelles lash artists seront donc non seulement aptes à créer des poses et proposer un service de qualité, mais seront également aptes à gérer leur business comme de réelles Boss Ladies, tout en confiance.
                        </p>
                    </div>
                </div>
                <Image className="shadow-xl m-auto w-[600px]" src='/images/vignettes/vignette4.jpg' width={1366} height={1366} alt="Formation finest Studio" />


            </div>

            <div className='my-10'>
                <h3 className='text-gray-400 m-4'>Programme de la formation</h3>
            </div>

            <div className='programme md:m-10'>
                <div className='programDescription flex flex-col md:flex-row md:justify-center gap-2'>
                    <div className='bloc'>

                        <h4>I. PARTIE JURIDIQUE / ADMINISTRATIVE</h4>
                        <ul>
                            <li>Déclaration d’activité</li>
                            <li>Assurance</li>
                        </ul>

                        <h4>II. PARTIE THÉORIQUE</h4>
                        <ul>
                            <li>Le cil naturel</li>
                            <li>Les extensions de cil</li>
                            <li>Travailler avec différentes formes d’yeux</li>
                            <li>Outils et produits</li>
                        </ul>

                        <h4>III. PARTIE PRATIQUE</h4>
                        <ul>
                            <li>Hygiène & sécurité</li>
                            <li>Consultation client</li>
                            <li>Procédure de pose</li>
                            <li>Procédure de dépose</li>
                            <li>Procédure de remplissage</li>
                        </ul>
                    </div>

                    <div className='bloc'>
                        <h4>IV. BUSINESS & MONEY MAKING</h4>
                        <ul>
                            <li>Entrepreneur mindset</li>
                            <li>Proposer un service de qualité</li>
                            <li>Politiques à mettre en place</li>
                            <li>Gestion de clientèle</li>
                            <li>Tarification</li>
                            <li>Psychologie du client</li>
                            <li>Marketing</li>
                            <li>Branding</li>
                            <li>“Work Smarter, not harder”</li>
                            <li>Investissements indispensables</li>
                            <li>Coaching & suivi individuel</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col my-20 md:justify-center md:items-center'>
                    <Link className='m-2 text-blue-800 font-bold' href='https://finestlashstudio.fr/wp-content/uploads/2022/12/1.-Programme-de-formation-Cil-a%CC%80-Cil-pdf.pdf'>&gt;&gt;&gt;Télécharger le programme de la formation au format PDF</Link>
                    <ul className='mt-10 italic'>
                        <li>Livret de formation</li>
                        <li>Remise d’un certificat de formation</li>
                        <li>Kit complet inclus</li>
                    </ul>

                    <ul className='mt-10 italic text-red-600'>
                        <li>Pour toute question ou demande d’inscription, veuillez envoyer un mail à l’adresse suivante</li>

                        <li className='my-4 font-bold'>Contact@finestlashstudio.fr</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function Programs2(props) {
    return (
        <div className='shadow-2xl p-2 bg-red-50'>
            <div className='flex flex-col items-center justify-center lg:flex-row'>
                <div className='m-6 md:mx-10 xl:mx-20'>
                    <h3>LA FINEST LASH ACADEMY</h3>
                    <h2>Formation Cil à cil + Volume
                        (méthodes russe et américaine)
                        1600€
                    </h2>

                    <div className='text-justify'>
                        <p className='mt-10'>
                            La formation Cil à cil + Volume, sur 3 jours, est faite pour les lash students débutantes sans expérience, souhaitant démarrer une activité en qualité de technicienne en extension de cils. Le programme de formation est en partie identique à la formation Cil à cil présentée précédemment. La différence : un jour de formation supplémentaire : une introduction aux méthodes russe et américaine sera faite. Ce troisième jour de formation consacré au Volume sera alors purement basé sur la technique.
                        </p>
                        <p>
                            Les nouvelles lash artists seront donc non seulement aptes à créer différents types de pose et proposer un service de qualité, mais seront également aptes à gérer leur business comme de réelles Boss Ladies, tout en confiance.
                        </p>
                    </div>
                </div>
                <Image className="shadow-xl m-auto w-[600px]" src='/images/vignettes/vignette4.jpg' width={1366} height={1366} alt="Formation finest Studio" />


            </div>

            <div className='my-10'>
                <h3 className='text-gray-400 m-4'>Programme de formation pour le jour du volume</h3>
            </div>

            <div className='programme md:m-10'>
                <div className='programDescription flex flex-col md:flex-row md:justify-center gap-2'>
                    <div className='bloc'>

                        <h4>I. PARTIE THÉORIQUE</h4>
                        <ul>
                            <li>Introduction & définition du volume</li>
                            <li>Détail des extensions et du matériel utilisés pour le volume</li>
                            <li>Différence entre Volume Russe et Volume Américain</li>
                            <li>Détails techniques du Volume Russe</li>
                            <li>Détails techniques du Volume Américain</li>
                        </ul>
                    </div>

                    <div className='bloc'>
                        <h4>II. PARTIE PRATIQUE</h4>
                        <ul>
                            <li>Création de bouquets Volume Russe sur papier millimétré</li>
                            <li>Création de bouquets Volume Américain sur papier millimétré</li>
                            <li>Effets</li>
                            <li>Stylisme / visagisme</li>
                            <li>Placement & direction des bouquets</li>
                            <li>Pose sur modèle</li>
                            <li>Séance photo & Gestion de contenu</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col my-20 md:justify-center md:items-center'>
                    <Link className='m-2 text-blue-800 font-bold' href='https://finestlashstudio.fr/wp-content/uploads/2022/12/2.-Programme-de-formation-Cil-a-cil-Volume.pdf'>&gt;&gt;&gt;Télécharger le programme de la formation au format PDF</Link>
                    <ul className='mt-10 italic'>
                        <li>Remise d’un certificat de formation</li>
                        <li>+ Kit complet inclus</li>
                    </ul>

                    <ul className='mt-10 italic text-red-600'>
                        <li>Pour toute question ou demande d’inscription, veuillez envoyer un mail à l’adresse suivante</li>

                        <li className='my-4 font-bold'>Contact@finestlashstudio.fr</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

