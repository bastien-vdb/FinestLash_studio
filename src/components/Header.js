import React from 'react';
import Image from 'next/image';
import ToggleMenu from './reusable/ToggleMenu';
import DesktopMenu from './reusable/DesktopMenu';
import Link from 'next/link';

function Header({ setPayClicked }) {

    const menu = [
        { title: "Accueil", link: "/" },
        { title: "Prestations", link: "/PrestationsPage" },
        // { title: "Formations", link: "/Formations" },   //A activer ou désactiver si pas de campagne de formation
        { title: "Rendez-vous", link: "/RendezVous" },
        { title: "Contact", link: "/Contact" },
    ]

    return (
        <>
            <div className='relative'>
                <div className='flex justify-center items-center h-8 bg-[#CCB3AE] text-xs sm:text-sm md:text-base text-white text-center'>FinestLash Studio, salon d'extension de cils</div>
                <div className='flex justify-between items-center m-6 px-8'>
                    <Link href='/'><Image className='w-10 md:w-14 lg:w-20' src='/images/logo.svg' width={351} height={351} alt="logo" /></Link>
                    <ToggleMenu menu={menu} setPayClicked={setPayClicked} />
                    <DesktopMenu menu={menu} setPayClicked={setPayClicked} />
                </div>
            </div>
        </>
    );
}

export default Header;