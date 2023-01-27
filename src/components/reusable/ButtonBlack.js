import React from 'react';
import Link from 'next/link';

function ButtonBlack({ text, link }) {
    return (
        <Link href={link? link:''}>
            <button className='bg-black text-white text-sm px-8 p-2 uppercase hover:scale-110 transition duration-700 ease-in-out'
            >
                {text}
            </button>
        </Link>
    );
}

export default ButtonBlack;