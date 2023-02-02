import React from 'react';
import Link from 'next/link';

function Button({ text, link, setPayClicked }) {
    return (
        <>
            <Link href={link ? link : ''}>
                <button onClick={setPayClicked ? () => setPayClicked(true) : ''} className='border border-[#ccb3ae] px-8 p-2 text-[#ccb3ae] uppercase'>
                    {text}
                </button>
            </Link>
        </>
    );
}

export default Button;