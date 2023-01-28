import React from 'react';
import Image from 'next/image';
import ImagePresentation from './reusable/ImagePresentation';

function Techniques({ title, descr, img }) {
    console.log(title, descr, img);

    const [titleVisible, setTitleVisible] = React.useState(true);
    return (
        <div onMouseLeave={() => setTitleVisible(true)} onMouseOver={() => setTitleVisible(false)} className='relative w-fit rounded-2xl'>
            {
                titleVisible
                &&
                <div className='text-center text-white z-50 absolute top-40 left-20 flex flex-col gap-4'>
                    <h1 className=' uppercase text-4xl font-extrabold'>
                        Cil à Cil
                    </h1>
                    <p className='text-xl font-light text-rose-200 bg-black opacity-70 p-2 px-10 rounded-full'>En savoir plus ...</p>
                </div>
            }
            <ImagePresentation img={img} descr={descr} title={title} />
        </div>
    );
}

export default Techniques;