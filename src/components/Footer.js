import React from 'react';
import Image from 'next/image';

function Footer(props) {
    return (
        <div>
            <div className='footer m-4 flex-row flex flex-col gap-2 sm:flex-row sm:justify-around sm:items-center sm:px-20'>
                <Image className='w-32' src='/images/logo.svg' width={185} height={185} alt="finest logo" />
                <div>
                    <h2 className='text-2xl text-left'>FINEST LASH</h2>
                    <ul>
                        <li>ACCUEIL</li>
                        <li>A PROPOS</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl text-left'>VOUS & FLS</h2>
                    <ul>
                        <li>MENTIONS LÉGALES</li>
                        <li>C.G.V.</li>
                        <li>POLI. DE CONFIDENTIALITÉ</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center h-8 bg-[#CCB3AE] text-white text-xs text-center'>@ 2023 Finest Lash Studio, Réalisation: @Bastien VDB</div>
        </div>
    );
}

export default Footer;