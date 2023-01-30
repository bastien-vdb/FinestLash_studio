import React from 'react';
import Link from 'next/link';

function DesktopMenu({ menu, setPayClicked }) {
    return (
        <div className='hidden lg:flex justify-center items-center gap-16'>
            {menu.map((e, key) => {
                if (e.title === 'Rendez-vous') {
                    return (
                        <div key={key} className='linkAnimation'>
                            <button className='menuLink' onClick={() => setPayClicked(true)}>
                                {e.title}
                            </button>
                            <div className='menuLinkAnimation'></div>
                        </div>
                    )
                }
                else {
                    return (
                        <div key={key} className='linkAnimation'>
                            <Link onClick={() => setPayClicked(false)} className='menuLink' href={e.link}>
                                {e.title}
                            </Link>
                            <div className='menuLinkAnimation'></div>
                        </div>
                    )
                }
            }
            )}
        </div>

    );
}

export default DesktopMenu;