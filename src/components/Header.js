import React from 'react';
import Image from 'next/image';
import ToggleMenu from './reusable/ToggleMenu';

function Header(props) {
    return (
        <>
            <div className='flex justify-between items-center m-6'>
                <Image className='w-40' src='/images/bwkstudio.png' width={1112} height={351} alt="logo" />
                <ToggleMenu />
            </div>
        </>
    );
}

export default Header;