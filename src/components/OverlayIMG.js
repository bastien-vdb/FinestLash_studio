import Image from 'next/image';
import { Button as BTN } from 'semantic-ui-react';

export const OverlayImageMobile = () => {
    return (
        <div className='flex flex-col lg:hidden'>
            <div className='relative'>
                <Image className='w-auto h-[80vh] object-cover' src='/images/manns/mann6.jpg' width={1558} height={1067} alt="mann1" />
                <div className="image-overlay">
                    <div className="overlay-text flex flex-col items-center justify-center gap-6">
                        <h3 className='text-white'>FinestLash Studio</h3>
                        <span className='text-3xl text-center text-white'>La précision avant tout</span>
                        <BTN primary className='border border-white p-2 px-10'>A propos</BTN>
                    </div>
                </div>
            </div>

            <div className='relative my-2 hidden md:block lg:m-2'>
                <div className='flex flex-col gap-2'>
                    <div className='flex w-full gap-2'>
                        <Image className='w-full' src='/images/manns/mann1.png' width={1558} height={1067} alt="mann1" />
                        <Image className='w-full' src='/images/manns/mann3.png' width={1558} height={1067} alt="mann1" />
                    </div>
                    <div className='flex w-full gap-2'>
                        <Image className='w-full' src='/images/manns/mann2.png' width={1558} height={1067} alt="mann1" />
                        <Image className='w-full' src='/images/manns/mann4.jpg' width={1558} height={1067} alt="mann1" />
                    </div>
                </div>
                <div className="image-overlay">
                    <div className="overlay-text flex flex-col items-center justify-center gap-6">
                        <h3 className='text-white'>FinestLash Studio</h3>
                        <span className='text-3xl text-center text-white'>La précision avant tout</span>
                        <BTN primary className='border border-white p-2 px-10'>A propos</BTN>
                    </div>
                </div>
            </div>

        </div>
    );
};

export const OverlayDesktop = () => {
    return (
        <div className='mosaicMain flex h-full hidden lg:grid'>

            <div className='imgOverlay relative'>
                <Image className='w-full' src='/images/manns/mann1.png' width={1558} height={1067} alt="mann1" />
                <div className="image-overlay">
                    <div className="overlay-text flex flex-col items-center justify-center gap-6">
                        <h3 className='text-white'>FinestLash Studio</h3>
                        <span className='text-3xl text-center text-white'>La précision avant tout</span>
                        <BTN primary className='border border-white p-2 px-10'>A propos</BTN>
                    </div>
                </div>
            </div>

            <div className='mosaic grid'>
                <div className='imgOverlay relative'>
                    <Image className='w-full' src='/images/manns/mann1.png' width={1558} height={1067} alt="mann1" />
                    <div className="image-overlay">
                        <div className="overlay-text flex flex-col items-center justify-center gap-6">
                            <h2 className='text-white' >Lieu</h2>
                        </div>
                    </div>
                </div>

                <div className='imgOverlay relative'>
                    <Image className='w-full' src='/images/manns/mann3.png' width={1558} height={1067} alt="mann1" />
                    <div className="image-overlay">
                        <div className="overlay-text flex flex-col items-center justify-center gap-6">
                            <h2 className='text-white' >Formations</h2>
                        </div>
                    </div>
                </div>

                <div className='imgOverlay relative'>
                    <Image className='w-full' src='/images/manns/mann2.png' width={1558} height={1067} alt="mann1" />
                    <div className="image-overlay">
                        <div className="overlay-text flex flex-col items-center justify-center gap-6">
                            <h2 className='text-white' >Prestations</h2>
                        </div>
                    </div>
                </div>

                <div className='imgOverlay relative'>
                    <Image className='w-full' src='/images/manns/mann3.png' width={1558} height={1067} alt="mann1" />
                    <div className="image-overlay">
                        <div className="overlay-text flex flex-col items-center justify-center gap-6">
                            <h2 className='text-white' >Techniques</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};