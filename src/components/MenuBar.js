import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/router";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const MenubarDemo = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([
    CHECK_ITEMS[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);
  const router = useRouter();
  return (
    <Menubar.Root className="flex bg-white p-[3px] rounded-md shadow-[0_2px_10px] shadow-blackA4">
      <Menubar.Menu>
        <Menubar.Trigger
          onClick={() => router.push("/")}
          className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-black text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-[#CCB3AE] data-[state=open]:bg-[#CCB3AE]"
        >
          Accueil
        </Menubar.Trigger>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger
          onClick={() => router.push("/PrestationsPage")}
          className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-black text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-[#CCB3AE] data-[state=open]:bg-[#CCB3AE]"
        >
          Prestations
        </Menubar.Trigger>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger
          onClick={() => router.push("/RendezVous2")}
          className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-black text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-[#CCB3AE] data-[state=open]:bg-[#CCB3AE]"
        >
          RDV
        </Menubar.Trigger>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger
          onClick={() => router.push("/Contact")}
          className="py-2 px-3 outline-none select-none font-medium leading-none rounded text-black text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-[#CCB3AE] data-[state=open]:bg-[#CCB3AE]"
        >
          Contact
        </Menubar.Trigger>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default MenubarDemo;
