import React from 'react';

function ImagePresentation({ img, title, descr }) {
    return (
        <div
            className="w-[300px] h-[700px] m-10 aspect-video cursor-pointer rounded-xl relative group shadow-xl"
        >
            <div
                className="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
            >
                <div>
                    <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <div className="text-3xl font-bold">{title}</div>

                        <div className="text-lg opacity-70 text-sm ">
                            {descr}
                        </div>
                    </div>
                </div>
            </div>
            <img
                alt="photo extension de cils"
                className="rounded rounded-2xl h-[700px] object-cover aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src={img}
            />
        </div>
    );
}

export default ImagePresentation;