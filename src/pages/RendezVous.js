import React, { useState } from 'react';

function RendezVous(props) {

    const [loading, setLoading] = useState(true);

    return (
        <div>
            {loading && <div className='flex text-4xl text-[#CCB3AE] justify-center items-center h-screen'>Veuillez patienter quelques secondes...</div>}
            <iframe id="Reservations"
                preload
                title="Réservations Rendez-vous"
                width="100%"
                height="100%"
                className='h-screen'
                src="https://finestlashstudio.fr/reservations/"
                frameborder="0"
                onLoad={() => setLoading(false)}
                style={{ display: loading ? 'none' : 'block' }}
            >
            </iframe>
        </div>
    );
}

export default RendezVous;