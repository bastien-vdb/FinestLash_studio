import React from "react";
import Image from "next/image";
import ToggleMenu from "@/components/header/ToggleMenu";
import DesktopMenu from "@/components/header/DesktopMenu";
import Link from "next/link";
import { menu } from "@/data/header/menu";
import { propsWithPayClicked } from "@/types/propsWithPayClicked";

function Header({ setPayClicked }: propsWithPayClicked<{}>) {
  return (
    <>
      <div className="relative">
        <div className="flex justify-center items-center h-8 bg-[#CCB3AE] text-xs sm:text-sm md:text-base text-white text-center">FinestLash Studio, salon d'extension de cils</div>
        <div className="flex justify-between items-center m-6 px-8">
          <Link href="/">
            <Image className="w-10 md:w-14 lg:w-20" src="/images/logo.svg" width={351} height={351} alt="logo" />
          </Link>
          <ToggleMenu menu={menu} setPayClicked={setPayClicked} />
          <DesktopMenu menu={menu} setPayClicked={setPayClicked} />
        </div>
      </div>
    </>
  );
}

export default Header;
