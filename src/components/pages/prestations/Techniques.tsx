import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { techniquesType } from '@/types/techniques';

type TechniquesProps = techniquesType & { setPayClicked: Dispatch<SetStateAction<boolean>> };

const Techniques = ({ title, descr, img, price, link, complements, setPayClicked }: TechniquesProps) => {

    return (
        <>
            <div className="bg-gray-50 shadow-2xl rounded-lg py-4 flex flex-col justify-between items-center">
                <div className='h-full'>
                    <p className="text-xl text-center font-bold text-[#EBACA2]">{title}</p>
                    <p className='my-6 mx-10 text-justify'>{descr}</p>
                </div>

                {complements &&
                    <ul className='mb-10'>
                        <li>- {complements.title1}</li>
                        <li>- {complements.title2}</li>
                        <li>- {complements.title3}</li>
                    </ul>
                }

                <Image src={img} width={351} height={351} alt={title} />
                <p className="text-center py-8">
                    <span className="text-3xl font-bold text-[#EBACA2]">{price}</span>
                    <span className="text-xs uppercase text-gray-500">€</span>
                </p>
                <div className="flex items-center justify-center mt-6">
                    <Link href={link} className="bg-[#CE6A6B] hover:bg-white hover:border hover:border-[#CE6A6B] px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150" title="Réserver"><button onClick={() => setPayClicked(true)}>Réserver</button></Link>
                </div>
            </div>
        </>
    );
}

export default Techniques;