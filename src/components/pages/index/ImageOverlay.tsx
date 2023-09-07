import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from 'react'


type ImageOverlayProps = {
  src: string,
  link: string,
  title: string,
  main?: boolean,
}
export const ImageOverlay = ({ src, link, title, main, children }: PropsWithChildren<ImageOverlayProps>) => {
  return (
    <div className="imgOverlay relative">
      <Link href={link}>
        <Image className="w-full" src={src} width={1538} height={2048} alt={src} />
        <div className="image-overlay">
          <div className="overlay-text flex flex-col items-center justify-center gap-6">
            {main ? <h3 className="text-white">FinestLash Studio</h3> : null}
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl">{title}</h2>
            {children}
          </div>
        </div>
      </Link>
    </div>
  );
};
