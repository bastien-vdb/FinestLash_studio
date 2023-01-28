import React from 'react';
import Image from 'next/image';
import ToggleMenu from './reusable/ToggleMenu';
import DesktopMenu from './reusable/DesktopMenu';
import { useState } from 'react';

function Header({ setPayClicked }) {

    const menu = [
        { title: "Accueil", link: "/" },
        { title: "Prestations", link: "/PrestationsPage" },
        { title: "Formations", link: "/Formations" },
        { title: "Rendez-vous", link: "/RendezVous" },
        { title: "Contact", link: "/Contact" },
    ]

    return (
        <>
            <div className='relative'>
                <div className='flex justify-center items-center h-8 bg-[#CCB3AE] text-white text-center'>FinestLash Studio, salon d'extension de cils</div>
                <div className='flex justify-between items-center m-6 px-8'>
                    <Image className='w-20' src='/images/logo.svg' width={351} height={351} alt="logo" />
                    <ToggleMenu menu={menu} />
                    <DesktopMenu menu={menu} setPayClicked={setPayClicked} />
                </div>
            </div>
        </>
    );
}

export default Header;