import Image from 'next/image';
import ButtonBlack from './reusable/ButtonBlack';
import Button from './reusable/Button';
import Prestations from './reusable/Prestations';
import { listPresta } from '../staticsdata';
import { heroIconArrow, heroIconMap, heroIconEmail, heroIconPhone } from '../staticsdata';
import { OverlayImageMobile, OverlayDesktop } from './OverlayIMG';

function Corpus(props) {

    return <>
        <div>
            <OverlayImageMobile />
            <OverlayDesktop />
        </div>

        <div className='bloc1 p-6'>
            <div className='bg-gray-50 p-6 gap-4 flex flex-col lg:flex-row'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h3>BWK STUDIO - LIPS & BROWS EXPERT</h3>
                    <h2>Le Studio de beauté BWK</h2>
                    <p className='text-center'>
                        Une forme de sourcils mal définie, une bouche trop fine des asymétries, des tempes dégarnies ou une calvitie naissante : il est aujourd'hui possible de corriger toutes ces imperfections grâce à nos techniques professionnelles signée BWK.
                    </p>
                    <Button text='Prendre rendez-vous' />
                </div>
                <Image className='m-auto md:max-w-[600px]' src='/images/pallettecolor.jpg' width={1024} height={1009} alt="palette" />
            </div>
        </div>

        <div className='bloc2'>
            <h3>BWK STUDIO - NOS PRESTATIONS</h3>
            <h2>Retrouvez nos techniques professionnelles</h2>
            <div className='flex flex-col items-center justify-center md:flex-row'>
                {listPresta &&
                    listPresta.map((e, key) => (
                        <Prestations img={e.img} descr={e.descr} title={e.title} />
                    ))
                }
            </div>
        </div>

        <div className='bloc3 p-6'>
            <div className='bg-gray-50 p-6 flex flex-col items-center justify-center gap-4 lg:flex-row'>
                <Image className='m-auto md:max-w-[400px]' src='/images/finest-salon.jpg' width={683} height={932} alt="finest-salon" />
                <div className='sm:px-4 md:px-10'>
                    <h3>BWK STUDIO - LA BEAUTÉ PARISIENNE</h3>
                    <h2>Bienvenue</h2>
                    <p>Nous vous accueillons sur rendez-vous de 10h à 20h du lundi au samedi dans notre studio beauté pour toute prestation.</p>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex gap-6 items-center'>{heroIconMap} 36 chemin des huats 93000 Bobigny</li>
                        <li className='flex gap-6 items-center'>{heroIconArrow} Horaires d'ouvertures : <b>de 10h à 20h</b></li>
                        <li className='flex gap-6 items-center'>{heroIconPhone} 𝟢6.78.1𝟦.𝟤5.11</li>
                        <li className='flex gap-6 items-center'>{heroIconEmail} contact@finestlashstudio.fr</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='bloc4 flex flex-col gap-8 my-6 mx-10 text-sm md:flex-row'>
            <div className='flex items-center'>
                <Image className='' src='/images/trust/icon1.png' width={91} height={91} alt="finest-salon" />
                <div className='m-2'>
                    <h6 className='m-0'>Produits de qualité</h6>
                    <p>Toutes nos prestations sont réalisées avec les meilleurs produits professionnels.</p>
                </div>
            </div>

            <div className='flex items-center'>
                <Image className='' src='/images/trust/icon2.png' width={91} height={91} alt="finest-salon" />
                <div className='m-2'>
                    <h6 className='m-0'>Diplômé à l'international</h6>
                    <p>Nos praticiens ont + d'une dizaine de formations à leurs actifs.</p>
                </div>
            </div>

            <div className='flex items-center'>
                <Image className='' src='/images/trust/icon3.png' width={91} height={91} alt="finest-salon" />
                <div className='m-2'>
                    <h6 className='m-0'>Equipe smile et love</h6>
                    <p>Redonner le sourire à nos clients en leurs faisant disparaître leurs complexes, est notre passion.</p>
                </div>
            </div>
        </div>

        <div className='bloc5'>
            <div className='p-6'>
                <div className='bg-gray-50 gap-4 py-2 flex flex-col justify-center items-center lg:flex-row'>
                    <Image src='/images/bdp.jpg' width={300} height={400} alt="finest-salon" />
                    <div className='flex flex-col items-center justify-center px-6 gap-2'>
                        <h3>BWK SCHOOL - APPRENEZ AVEC NOUS !</h3>
                        <h2>Nos formations</h2>
                        <p className='text-center lg:w-72'>
                            Découvrez nos techniques professionnelles et apprenez-les à travers nos 5 formations pensées et étudiées pour vous faciliter la réussite dans ce métier.
                        </p>
                        <ButtonBlack text='Découvrez nos formations' />
                        <Button text='pré-inscription' />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Corpus;