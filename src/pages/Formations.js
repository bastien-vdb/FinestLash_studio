import React from 'react';
import Image from 'next/image';
import { Programs1, Programs2 } from '../components/Programs';

function Formations(props) {
    return (
        <>
            <div className='bg-red-50 pb-10'>
                <div className='formations mobileBaniere w-full h-screen shadow-2xl md:hidden'></div>
                <div className='container relative grid grid-cols-2 lg:w-[1000px] m-auto rounded shadow-lg'>
                    <Image className="opacity-90 sm:h-[300px] shadow-sm object-cover border-2" src='/images/vignettes/vignette1.jpeg' width={1366} height={1366} alt="Formation finest Studio" />
                    <Image className="opacity-90 sm:h-[300px] shadow-sm object-cover border-2" src='/images/vignettes/vignette2.jpg' width={1366} height={1366} alt="Formation finest Studio" />
                    <Image className="opacity-90 sm:h-[400px] shadow-lg object-cover border-2 col-span-2" src='/images/vignettes/vignette4.jpg' width={1366} height={1366} alt="Formation finest Studio" />
                    <div className="image-overlay">
                        <div className="overlay-text flex flex-col items-center justify-center gap-6">
                            <h3 className='text-lg text-white'>Formations FinestLash Studio</h3>
                            <span className='mx-6 text-3xl text-center text-white md:mx-12 lg:mx-40 lg:text-5xl'>Une formation professionalisante</span>
                        </div>
                    </div>
                </div>
            </div>
            <Programs1 />
            <Programs2 />

        </>
    );
}

export default Formations;