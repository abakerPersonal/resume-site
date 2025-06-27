import { ExperienceSection } from '@abakernet/types';
import React from 'react';

type ExperienceSectionProps = {
  experienceSection: ExperienceSection
};

const ExperienceSectionComponent: React.FC<ExperienceSectionProps> = ({ experienceSection }) => (
    <div>
        <h4>{experienceSection.category}</h4>
            <ul>
                {experienceSection.bullets.map(bullet =>
                    <li>{bullet}</li>
                )}
            </ul>
    </div>
)

export default ExperienceSectionComponent