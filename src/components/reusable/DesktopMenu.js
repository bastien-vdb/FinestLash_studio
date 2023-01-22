import React from 'react';
import Link from 'next/link';

function DesktopMenu({ menu }) {
    return (
        <div className='hidden lg:flex justify-center items-center gap-16'>
            {menu.map((e, key) => (
                <div className='linkAnimation'>
                    <Link className='menuLink' href={e.link}>
                        {e.title}
                    </Link>
                    <div className='menuLinkAnimation'></div>
                </div>
            )
            )}
        </div>

    );
}

export default DesktopMenu;