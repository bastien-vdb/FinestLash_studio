import Image from "next/image";
import Button from "./Button";

export default function Prestations({ img, descr, title }) {

    return (
        <>
            <div className='flex flex-col items-center justify-center gap-2 my-2'>
                <div className="border border-[#CCB3AE] border-4 m-6 rounded-full">
                    <Image className='rounded-full w-44 md:w-40 lg:w-60 rounded' src={img} width={657} height={743} alt={descr} />
                </div>
                <h3 className=''>{descr}</h3>
                <h2 className='text-2xl p-0 m-0'>{title}</h2>
                <Button text={`+ d'infos`} />
            </div>

        </>
    )
}