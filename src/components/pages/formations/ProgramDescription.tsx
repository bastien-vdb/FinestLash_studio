import React from 'react';

type ProgramDescriptionProps = {
    bloc: string
}

function ProgramDescription({
    bloc
}: ProgramDescriptionProps) {
    return (
        <div className="text-justify">
            <p className="mt-10">
                {bloc}
                <br />
            </p>
        </div>
    );
}

export default ProgramDescription;