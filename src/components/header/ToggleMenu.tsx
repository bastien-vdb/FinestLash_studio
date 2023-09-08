import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { toggleClosed, toggleOpened } from "@/utils/icons";
import { menuType } from "@/types/menu";
import { propsWithPayClicked } from "@/types/propsWithPayClicked";

type ToggleMenuProps = {
  menu: menuType[];
};

function ToggleMenu({ menu, setPayClicked }: propsWithPayClicked<ToggleMenuProps>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-40 lg:hidden">
      {!isOpen && (
        <button id="openOrClose" onClick={() => setIsOpen(true)}>
          {toggleClosed}
        </button>
      )}

      <div className="absolute top-28 left-0 bg-white shadow-sm shadow-black w-full translate-x-[-100%]" style={{ transition: "all 0.3s ease-in-out", transform: isOpen ? "translateX(0%)" : "translateX(-100%)" }}>
        <button className="absolute right-4 top-2" onClick={() => setIsOpen(false)}>
          {toggleOpened}
        </button>
        <ul className="menuLink flex flex-col gap-4 w-fit ml-6 my-4">
          {menu.map((e, key) => {
            return (
              <div key={key} className="linkAnimation">
                <Link
                  onClick={
                    e.link === '/RendezVous'
                      ? () => {
                        setPayClicked(true);
                        setIsOpen(false);
                      }
                      : () => {
                        setPayClicked(false);
                        setIsOpen(false);
                      }
                  }
                  className="menuLink"
                  href={e.link}
                >
                  {e.title}
                </Link>
                <div className="menuLinkAnimation"></div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ToggleMenu;
