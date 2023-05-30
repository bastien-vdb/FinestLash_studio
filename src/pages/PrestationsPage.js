import {useEffect} from 'react';
import Techniques from '../components/Techniques';
import { aosAnimationConfig } from '@/components/utils/AosAnimationConfig';
import AOS from 'aos';
import 'aos/dist/aos.css';

const techniques = [
    {
        title: 'POSE CIL À CIL',
        descr: 'La pose cil à cil est une technique consistant à coller une extension unique sur un cil naturel. Ce type de pose est celui ayant l’effet le plus naturel. Le studio utilise différentes épaisseurs et choisira celle la plus adaptée à vos cils naturels ainsi qu’au rendu souhaité.',
        img: '/images/vignettes/vignette1.jpeg',
        price: 70,
        link: '/RendezVous'
    },
    {
        title: 'POSE MIXTE',
        descr: 'La pose mixte est un mélange entre la pose cil à cil et la pose volume russe. Il y aura donc des extensions uniques, combinées avec des bouquets de plusieurs cils, pour celles qui veulent un résultat un peu plus fourni. ',
        img: '/images/vignettes/vignette3.jpeg',
        price: 80,
        link: '/RendezVous'
    },
    {
        title: 'POSE VOLUME',
        descr: 'Le volume est une technique consistant à poser un bouquet de cils sur un cil naturel. Bien entendu, l’épaisseur des cils utilisés en volume sont bien plus fins et légers afin que le poids bouquet n’endommage pas le cil naturel. Le bouquet peut contenir  2 extensions comme il peut en contenir 4 et au delà. Plus le bouquet est chargé, plus le volume est intense.',
        img: '/images/vignettes/vignette2.jpeg',
        price: 90,
        link: '/RendezVous',
        complements: {
            title1: 'la pose volume est à 90€',
            title2: 'Le volume intense à 100€',
            title3: 'Le volume effet fox eyes à 100€.'
        }
    }
]

function PrestationsPage({ setPayClicked }) {

    useEffect(() => {
        AOS.init(aosAnimationConfig);
    }, []);

    return (
        <>
            <div className="cursor-pointer rounded-xl relative group shadow-xl">
                <div className="bannierePrestation w-full pt-16 pb-24 text-center">
                    <h4 className="text-4xl font-bold text-gray-800">PRESTATIONS</h4>
                    <p className="text-sm md:text-base text-gray-800 mt-6 text-justify lg:text-center mx-6 sm:mx-12 md:mx-40 lg:mx-96  ">
                        Le Finest Beauty Studio propose 3 types de prestation : la pose cil à cil, la pose mixte et la pose volume.
                        Il y en a sûrement qui se sentent un peu perdues entre ces différents types de pose et qui sont hésitantes quant au choix à faire, mais on a pensé à vous !
                        Toutes les explications dont vous avez besoin sont ci-dessous.
                    </p>
                </div >

                <div data-aos="zoom-in" className="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {techniques.map((e, key) => { return <Techniques setPayClicked={setPayClicked} {...e} key={key} /> })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrestationsPage;