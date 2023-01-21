import React, { useState } from 'react';
import Link from 'next/link';

function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    { title: "Accueil", link: "" },
    { title: "Prestations", link: "" },
    { title: "Formations", link: "" },
    { title: "Rendez-vous", link: "" },
    { title: "Contact", link: "" },
  ]

  return (
    <div className='z-40'>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className='flex flex-col gap-2'>
          <div className='w-12 border border-1 border-gray-400'></div>
          <div className='w-12 border border-1 border-gray-400'></div>
        </div>
      </button>

      <div className='absolute top-24 left-0 bg-white shadow-sm shadow-black w-full translate-x-[-100%]' style={{ transition: 'all 0.3s ease-in-out', transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)' }}>
        <ul className='menuLink flex flex-col gap-4 w-fit ml-6 my-4'>

          {menu.map((e, key) => (
            <li>
              <Link className='text-gray-600' href={e.link}>{e.title}</Link>
              <div className='menuLinkAnimation'></div>
            </li>
          ))

          }
        </ul>
      </div>

    </div>
  );
}

export default ToggleMenu;
