import React from 'react';
import Image from 'next/image';
import { heroIconArrow, heroIconMap, heroIconEmail, heroIconPhone } from '../components/utils/staticsdata';
import ContactForm from '@/components/ContactForm';
import ContactForm2 from '@/components/ContactForm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { aosAnimationConfig } from '../components/utils/AosAnimationConfig';

function Contact(props) {

    useEffect(() => {
        AOS.init(aosAnimationConfig);
    }, []);

    return (
        <>
            <div className='mt-12 mx-6 md:flex md:justify-center md:items-center md:mb-20'>
                <div data-aos="zoom-in" className='my-20 md:mx-32'>
                    <h3>Finest lash STUDIO CONTACT</h3>
                    <h2 className=''>Contacter le FinestLash Studio</h2>
                    <p className='my-10 text-align'>
                        Vous souhaitez plus d'informations sur une prestation, n'hésitez pas à nous contacter ci-dessous.
                    </p>
                    <div className='m-4 sm:px-4 md:px-10'>
                        <ul className='flex flex-col gap-2 sm:gap-4'>
                            <li className='flex gap-6 items-center'>{heroIconArrow} Horaires d'ouverture : <b>de 9h à 21h</b></li>
                            <li className='flex gap-6 items-center'>{heroIconPhone} 𝟢7.83.63.97.38</li>
                            <li className='flex gap-6 items-center'>{heroIconEmail} contact@finestlashstudio.fr</li>
                        </ul>
                    </div>
                </div>
                <Image data-aos="zoom-in" className='md:w-[600px]' src='/images/contactFLS.jpg' width={1152} height={1707} alt="finest-salon" />
            </div>
            <ContactForm2 />
        </>
    );
}

export default Contact;