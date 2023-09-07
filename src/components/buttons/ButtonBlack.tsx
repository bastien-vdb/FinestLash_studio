import React from 'react';
import Link from 'next/link';

type ButtonBlackProps = {
    text: string,
    link: string,
}

function ButtonBlack({ text, link }: ButtonBlackProps) {
    return (
        <Link href={link ? link : ''}>
            <button className='bg-black text-white text-sm px-8 p-2 uppercase hover:scale-110 transition duration-700 ease-in-out'
            >
                {text}
                crocodile
            </button>
        </Link>
    );
}

export default ButtonBlack;