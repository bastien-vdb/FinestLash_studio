import React, { useState } from 'react';
import Link from 'next/link';

function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className='flex flex-col gap-2'>
          <div className='w-12 border border-1 border-gray-400'></div>
          <div className='w-12 border border-1 border-gray-400'></div>
        </div>
      </button>

      <div className='absolute top-24 left-0 bg-white w-full translate-x-[-100%]' style={{ transition: 'all 1.2s ease-in-out', transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)' }}>
        <ul className='menuLink m-8 flex flex-col gap-2 w-fit'>
          <li>
            <Link href="">Accueil
              
            </Link>
            <div className='menuLinkAnimation'></div>
          </li>

          <li><Link href="">Prestations</Link></li>
          <li><Link href="">Formations</Link></li>
          <li><Link href="">Rendez-vous</Link></li>
          <li><Link href="">Contact</Link></li>
        </ul>
      </div>

    </div>
  );
}

export default ToggleMenu;
