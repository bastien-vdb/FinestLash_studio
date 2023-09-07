import React from 'react';


type PartieProps = {
    partie: {
        title: string;
        elements: string[];
    }
}
function Partie({ partie }: PartieProps) {
    return (
        <div>
            <h4>{partie.title}</h4>
            <ul>
                {partie.elements.map(element => (
                    <li>{element}</li>
                ))}
            </ul>
        </div>
    );
}

export default Partie;