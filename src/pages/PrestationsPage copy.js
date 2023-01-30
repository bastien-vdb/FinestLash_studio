import React from 'react';
import Techniques from '../components/Techniques';
import Image from 'next/image';
import ButtonBlack from '@/components/reusable/ButtonBlack';

const techniques = [
    {
        title: 'POSE CIL À CIL',
        descr: 'La pose cil à cil est une technique consistant à coller une extension unique sur un cil naturel. Ce type de pose est celui ayant l’effet le plus naturel. Le studio utilise différentes épaisseurs et choisira celle la plus adaptée à vos cils naturels ainsi qu’au rendu souhaité. La pose cil à cil est à 70€.',
        img: '/images/vignettes/vignette1.jpeg'
    },
    {
        title: 'POSE MIXTE',
        descr: 'La pose mixte est une technique qui consiste à coller une extension unique sur un cil naturel et à coller une extension en groupe de 2 à 5 cils sur un cil naturel. Cette technique est idéale pour les personnes qui ont des cils naturels fins et qui souhaitent un rendu plus dense. La pose mixte est à 80€.',
        img: '/images/vignettes/vignette3.jpeg'
    },
    {
        title: 'POSE VOLUME',
        descr: 'La pose volume est une technique qui consiste à coller une extension en groupe de 2 à 5 cils sur un cil naturel. Cette technique est idéale pour les personnes qui ont des cils naturels fins et qui souhaitent un rendu plus dense. La pose volume est à 90€.',
        img: '/images/manns/mannNew4.jpg'
    }
]

function PrestationsPage(props) {

    return (
        <>
            <div className='from-white via-[#CCB3AE] to-white bg-gradient-to-b'>
                <div className='introTechnique flex flex-col justify-center items-center gap-4 mx-20 bg-white p-6 rounded-2xl py-10 shadow-lg'>
                    <h2 className='text-6xl'>Prestations</h2>
                    <p className='px-40 text-justify'>
                        Le Finest Beauty Studio propose 3 types de prestation : la pose cil à cil, la pose mixte et la pose volume. Il y en a sûrement qui se sentent un peu perdues entre ces différents types de pose et qui sont hésitantes quant au choix à faire, mais on a pensé à vous ! Toutes les explications dont vous avez besoin sont ci-dessous.
                    </p>

                    <div className='flex justify-between flex-wrap'>
                        {techniques.map((e, key) => (
                            <Techniques title={e.title} descr={e.descr} img={e.img} />
                        ))}
                    </div>
                    <ButtonBlack text='Prendre rendez-vous' link='/RendezVous' />
                </div>
            </div>
        </>
    );
}

export default PrestationsPage;