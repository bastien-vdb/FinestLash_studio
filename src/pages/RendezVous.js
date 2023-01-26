import React, { useState, useEffect } from 'react';

function RendezVous(props) {

    const [loading, setLoading] = useState(true);


    return (
        <div>
            {loading && <div className='flex text-4xl justify-center items-center h-screen'>Veuillez patienter quelques secondes...</div>}
            <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                width="100%"
                height="100%"
                className='h-screen'
                src="https://finestlashstudio.fr/reservations/"
                frameborder="0"
                onLoad={() => setLoading(false)}
            >
            </iframe>
        </div>
    );
}

export default RendezVous;