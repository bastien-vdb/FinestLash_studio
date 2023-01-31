import React from 'react';
import Image from 'next/image';

function Formations(props) {
    return (
        <>
            <div className='formations mobileBaniere w-full h-screen shadow-2xl md:hidden'></div>
            <div className='desktopBaniere rounded grid grid-rows-3 grid-flow-col shadow-lg'>
                <Image className="h-full row-span-3 shadow-lg border-2" src='/images/vignettes/vignette1.jpeg' width={1366} height={1366} alt="Formation finest Studio" />
                <Image className="col-span-2 shadow-lg border-2" src='/images/vignettes/vignette2.jpg' width={1366} height={1366} alt="Formation finest Studio" />
                <Image className="row-span-2 shadow-lg border-2" src='/images/vignettes/vignette4.jpg' width={1366} height={1366} alt="Formation finest Studio" />
            </div>
            <div className='flex flex-col lg:flex-row shadow-2xl p-2'>
                <div className='m-6'>
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
                <Image className="shadow-xl m-auto" src='/images/vignettes/vignette4.jpg' width={1366} height={1366} alt="Formation finest Studio" />
            </div>
        </>
    );
}

export default Formations;