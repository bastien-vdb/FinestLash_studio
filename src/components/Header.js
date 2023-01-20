import React from 'react';
import Image from 'next/image';
import ToggleMenu from './reusable/ToggleMenu';
import Head from 'next/head';

function Header(props) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap" rel="stylesheet" />
            </Head>
            <div className='flex justify-between items-center m-6'>
                <Image className='w-40' src='/images/bwkstudio.png' width={1112} height={351} alt="logo" />
                <ToggleMenu />
            </div>
        </>
    );
}

export default Header;