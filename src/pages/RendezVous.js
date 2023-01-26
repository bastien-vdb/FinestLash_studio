import React, { useState, useEffect } from 'react';

function RendezVous(props) {

    // const [iframeContent, setIframeContent] = useState('');

    // useEffect(() => {
    //     // Fetch the desired content from the page
    //     fetch('https://finestlashstudio.fr/rendez-vous/')
    //         .then((response) => response.text())
    //         .then((html) => {
    //             // Extract the desired content using the DOM API
    //             const parser = new DOMParser();
    //             const doc = parser.parseFromString(html, "text/html");
    //             const desiredContent = doc.querySelector('.elementor-widget-container');

    //             // Update the iframe content
    //             setIframeContent(desiredContent.outerHTML);
    //         });
    // }, []);


    return (
        <div>
            <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                width="100%"
                height="100%"
                className='h-screen'
                src="https://finestlashstudio.fr/reservations/"
                frameborder="0"
            >
            </iframe>
        </div>
    );
}

export default RendezVous;