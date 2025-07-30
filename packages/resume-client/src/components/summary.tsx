import React from 'react';

type SummaryProp = {
    summary: string
}

const SummaryComponent: React.FC<SummaryProp> = ({summary}) => (
     <div>
        { summary ? 
        (
            <div>
                <h2>Professional Summary</h2>
                <p>{summary}</p>
            </div>
        ) :
        (
            <p />
        )

        }
    </div>
);

export default SummaryComponent;