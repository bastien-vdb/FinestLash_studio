import React from 'react';

function ButtonBlack({ text }) {
    return (
        <>
            <button className='bg-black text-white text-sm px-8 p-2 uppercase'>{text}</button>
        </>
    );
}

export default ButtonBlack;