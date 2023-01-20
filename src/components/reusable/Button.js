import React from 'react';

function Button({ text }) {
    return (
        <>
            <button className='border border-[#ccb3ae] px-8 p-2 text-[#ccb3ae] uppercase'>{text}</button>
        </>
    );
}

export default Button;