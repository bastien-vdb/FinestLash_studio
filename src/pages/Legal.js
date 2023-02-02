import React from 'react';

function Legal(props) {
    return (
        <div className='flex flex-col gap-8 text-justify my-4 mx-8 md:mx-20 lg:mx-40 xl:mx-80'>
            <h2>MENTIONS LÉGALES</h2>

            <h3 className='text-lg'>1. Identification de l'entreprise</h3>
            <p className='md:md:text-center'>
                <strong>Nom de l'entreprise:</strong> Finest Lash Studio<br />
                <strong>Adresse:</strong> 36 chemin des huats<br />
                <strong>Représentant légal:</strong> MADAME NATACHA SITIER<br />
                <strong>Immatriculation:</strong> SIRET n°85148858500015
            </p>

            <h3 className='text-lg'>2. Contact</h3>
            <p className='md:text-center'>
                <strong>Courrier électronique:</strong> Contact@finestlashstudio.fr
            </p>

            <h3 className='text-lg'>3. Hébergeur</h3>
            <p className='md:text-center'>
                Le backend est hébergé sur OVH via Wordpress.<br />
                Le frontend est hébergé sur Vercel/Netlify.<br />
                <strong>Adresse de l'hébergeur:</strong> 2 Rue Kellermann 59100 ROUBAIX
            </p>
        </div>
    );
}

export default Legal;