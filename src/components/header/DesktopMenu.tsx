import Link from "next/link";
import type { menuType } from "@/types/menu";
import type { propsWithPayClicked } from '@/types/propsWithPayClicked';

type DesktopMenuProps = {
  menu: menuType[];
};

function DesktopMenu({ menu, setPayClicked }: propsWithPayClicked<DesktopMenuProps>) {
  return (
    <div className="hidden lg:flex justify-center items-center gap-16">
      {menu.map((menuElement, key) => {
        return (
          <div key={key} className="linkAnimation">
            <Link className="menuLink" onClick={() => setPayClicked(menuElement.link === "/RendezVous" ? true : false)} href={menuElement.link}>
              {menuElement.title}
            </Link>
            <div className="menuLinkAnimation"></div>
          </div>
        );
      })}
    </div>
  );
}

export default DesktopMenu;
