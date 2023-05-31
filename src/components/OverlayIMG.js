import Image from 'next/image';
import { Button as BTN } from 'semantic-ui-react';
import Link from 'next/link';

export const OverlayImageMobile = ({ setPayClicked }) => {
    return (
        <div className='flex flex-col md:hidden'>
            <div className='relative'>
                <Image className='w-auto h-screen sm:h-full object-cover' src='/images/manns/mannNew1.png' width={1538} height={2048} alt="mann1" />
                <div className="image-overlay">
                    <div className="overlay-text flex flex-col items-center justify-center gap-6">
                        <h3 className='text-white'>FinestLash Studio</h3>
                        <span className='text-3xl text-center text-white'>La précision avant tout</span>
                        <Link href="/RendezVous"><BTN primary className='border border-white p-2 px-10'>GO</BTN></Link>
                    </div>
                </div>
            </div>

            <div className='relative my-2 hidden'>
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
                        <Link href="/RendezVous"><BTN primary className='border border-white p-2 px-10'>GO</BTN></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export const OverlayDesktop = ({ setPayClicked }) => {
    return (
        <div className='mosaicMain flex h-full hidden md:grid'>

            <div className='imgOverlay relative'>
                <Image className='w-full' src='/images/manns/mannNew1.png' width={1538} height={2048} alt="mann1" />
                <div className="image-overlay">
                    <div className="overlay-text flex flex-col items-center justify-center gap-6">
                        <h3 className='text-white'>FinestLash Studio</h3>
                        <span className='text-3xl text-center text-white'>La précision avant tout</span>
                        <Link href="/RendezVous"><BTN onClick={() => setPayClicked(true)} primary className='border border-white p-2 px-10'>GO</BTN></Link>
                    </div>
                </div>
            </div>

            <div className='mosaic grid'>

                <div className='imgOverlay relative'>
                    <Link href="/Contact">
                        <Image className='w-full' src='/images/manns/mannNew4.jpg' width={536} height={819} alt="mann1" />
                        <div className="image-overlay">
                            <div className="overlay-text flex flex-col items-center justify-center gap-6">
                                <h2 className='text-white' >Lieu</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='imgOverlay relative cursor-pointer'>
                    <Link href="/Formations">
                        <Image className='w-full' src='/images/manns/image00001.jpeg' width={536} height={819} alt="mann1" />
                        <div className="image-overlay">
                            <div className="overlay-text flex flex-col items-center justify-center gap-6">
                                <h2 className='text-white' >Formations</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='imgOverlay relative'>
                    <Link href="/PrestationsPage">
                        <Image className='w-full' src='/images/manns/formations1.jpg' width={536} height={819} alt="mann1" />
                        <div className="image-overlay">
                            <div className="overlay-text flex flex-col items-center justify-center gap-6">
                                <h2 className='text-white' >Prestations</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='imgOverlay relative'>
                    <Link href="/PrestationsPage">
                        <Image className='w-full' src='/images/manns/mannequin1.jpeg' width={536} height={819} alt="mann1" />
                        <div className="image-overlay">
                            <div className="overlay-text flex flex-col items-center justify-center gap-6">
                                <h2 className='text-white' >Techniques</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};