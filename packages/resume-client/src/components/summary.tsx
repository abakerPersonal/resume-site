import React from 'react';

type SummaryProp = {
    summary: string
}

const SummaryComponent: React.FC<SummaryProp> = ({summary}) => (
    <div>
        <h2>Professional Summary</h2>
        <p>{summary}</p>
    </div>
);

export default SummaryComponent;