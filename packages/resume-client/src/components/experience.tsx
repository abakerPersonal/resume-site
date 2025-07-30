import { ExperienceItem } from '@abakernet/types';
import React from 'react';
import ExperienceItemComponent from './experience-item';

type ExperienceProps = {
  experience: ExperienceItem[]
};

const ExperienceComponent: React.FC<ExperienceProps> = ({experience}) => (
    <div>
        <h2>Professional Experience</h2>   
        {experience.map((experienceItem, idx) =>
            <ExperienceItemComponent key={idx} experienceItem={experienceItem} />
        {experience.map(experienceItem =>
            <ExperienceItemComponent experienceItem={experienceItem} />
        )} 
    </div>
);

export default ExperienceComponent
