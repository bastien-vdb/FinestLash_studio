import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { toggleClosed, toggleOpened } from '../utils/staticsdata';

function ToggleMenu({ menu, setPayClicked }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpened = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpened.current && !menuOpened.current.contains(e.target)) {
        setIsOpen(false);
        console.log('clicked outside');
      }
      // else if (e.target.id === 'openOrClose') {
      //   setIsOpen(() => false);
      //   console.log('clicked on button');
      // }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log(isOpen);
  }, []);

  return (
    <div className='z-40 lg:hidden'>
      {!isOpen ? (
        <button id='openOrClose' onClick={() => setIsOpen(!isOpen)}>
          {toggleClosed}
        </button>)
        :
        (<button>
          {toggleOpened}
        </button>)
      }


      <div ref={menuOpened} className='absolute top-28 left-0 bg-white shadow-sm shadow-black w-full translate-x-[-100%]' style={{ transition: 'all 0.3s ease-in-out', transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)' }}>
        <ul className='menuLink flex flex-col gap-4 w-fit ml-6 my-4'>

          {menu.map((e, key) => {
            if (e.title === 'Rendez-vous') {
              return (
                <div key={key} className='linkAnimation'>
                  <button className='menuLink' onClick={() => { setPayClicked(true); setIsOpen(false) }}>
                    {e.title}
                  </button>
                  <div className='menuLinkAnimation'></div>
                </div>
              )
            }
            else {
              return (
                <div key={key} className='linkAnimation'>
                  <Link onClick={() => { setPayClicked(false); setIsOpen(false) }} className='menuLink' href={e.link}>
                    {e.title}
                  </Link>
                  <div className='menuLinkAnimation'></div>
                </div>
              )
            }
          }
          )}
        </ul>
      </div>

    </div>
  );
}

export default ToggleMenu;
