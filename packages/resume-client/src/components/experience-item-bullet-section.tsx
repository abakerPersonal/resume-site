import { ExperienceItemBulletSection } from '@abakernet/types';
import React from 'react';

type ExperienceSectionProps = {
  section: ExperienceItemBulletSection
};

const ExperienceSectionComponent: React.FC<ExperienceSectionProps> = ({ section }) => (
    <div>
        <h4>{section.category}</h4>
            <ul>
                {section.bullets.map((bullet, idx) =>
                    <li key={idx}>{bullet}</li>
                )}
            </ul>
    </div>
)

export default ExperienceSectionComponent