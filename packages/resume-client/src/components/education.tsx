import { EducationItem } from '@abakernet/types';
import React from 'react';

type EducationProps = {
    education: EducationItem[]
}

const EducationComponent: React.FC<EducationProps> = ({education}) => (
    <div>
        <h2>Education</h2>
        { education.map((item, idx) => (
            <p key={idx}><strong>{item.school}:</strong> {item.degree.join(', ')}</p>
        ))}
    </div>
);

export default EducationComponent;