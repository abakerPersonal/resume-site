import { Experience } from '@abakernet/types';
import React from 'react';
import ExperienceComponent from './experience';
import { all } from 'axios';

type AllExperienceProps = {
  allExperience: Experience[]
};

const AllExperienceComponent: React.FC<AllExperienceProps> = ({allExperience}) => (
    <div>
        <h2>Professional Experience</h2>   
        {allExperience.map(experience =>
            <ExperienceComponent experience={experience} />
        )} 
    </div>
);

export default AllExperienceComponent
