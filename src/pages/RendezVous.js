import React, { useState, useEffect, useRef } from 'react';

function RendezVous(props) {

    const [loading, setLoading] = useState(true);

    const ifram = useRef(null);


    return (
        <div>
            {loading && <div className='loading flex text-4xl text-[#CCB3AE] text-center justify-center items-center h-screen'>Veuillez patienter quelques secondes...</div>}
            {/* <iframe id="Reservations"
                preload="true"
                title="Réservations Rendez-vous"
                width="100%"
                height="100%"
                className='h-screen'
                src="https://finestlashstudio.fr/reservations/"
                frameBorder="0"
                onLoad={() => setLoading(false)}
                style={{ display: loading ? 'none' : 'block' }}
            >
            </iframe> */}
            <iframe id="Reservations"
                ref={ifram}
                preload="true"
                title="Réservations Rendez-vous"
                width="100%"
                height="100%"
                className='h-screen'
                src="https://dzt.pgb.mybluehost.me/"
                frameBorder="0"
                onLoad={() => setLoading(false)}
                style={{ display: loading ? 'none' : 'block' }}
                sandbox='allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation allow-popups-to-escape-sandbox'
                allowSameOrigin 
            >
            </iframe>
        </div>
    );
}

export default RendezVous;