import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { propsWithPayClicked } from '@/types/propsWithPayClicked';

type ButtonProps = {
    text: String,
    link?: string,
}

function Button({ text, link, setPayClicked }: propsWithPayClicked<ButtonProps>) {
    return (
        <>
            <Link href={link ? link : ''}>
                <button onClick={setPayClicked ? () => setPayClicked(true) : undefined} className='border border-[#ccb3ae] px-8 p-2 text-[#ccb3ae] uppercase'>
                    {text}
                </button>
            </Link>
        </>
    );
}

export default Button;