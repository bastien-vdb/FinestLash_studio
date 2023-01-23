import Image from "next/image";
import Button from "./Button";

export default function Prestations({ img, descr, title }) {

    return (
        <>
            <div className='flex flex-col items-center justify-center gap-2 my-2'>
                <Image className='px-10 rounded rounded-t-full' src={img} width={657} height={743} alt={descr} />
                <h3 className=''>{descr}</h3>
                <h2 className='text-2xl p-0 m-0'>{title}</h2>
                <Button text={`+ d'infos`} />
            </div>

        </>
    )
}