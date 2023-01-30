import React from 'react';
import Image from 'next/image';

function Formations(props) {
    return (
        <>
            <div className='formations w-full h-screen shadow-2xl'></div>
            <div className='flex flex-wrap shadow-2xl p-2'>
                <div className='m-6 w-[300px]'>
                    <h1>LA FINEST LASH ACADEMY</h1>
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
                <Image className="w-[700px] shadow-xl" src='/images/finest-salon.png' width={3874} height={2758} alt="Salon finest Studio" />
            </div>
        </>
    );
}

export default Formations;