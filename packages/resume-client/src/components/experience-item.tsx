import { ExperienceItem, ExperienceItemBulletSection } from '@abakernet/types';
import React, { useState } from 'react';
import ExperienceSectionComponent from './experience-item-bullet-section';

type ExperienceProps = {
  experienceItem: ExperienceItem
};

const ExperienceItemComponent: React.FC<ExperienceProps> = ({ experienceItem }) => {
    const [open, setOpen] = useState(false);

    return (
        <section className='section'>
            <h3><img src={experienceItem.logo} /> {experienceItem.company}, {experienceItem.location}</h3>
            <div>
                <button
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label={open ? 'Collapse details' : 'Expand details'}
                    className='section-expand'
                >
                    {open ? '▼' : '▶'}
                </button> 
                <span>
                    <strong>{experienceItem.title}{experienceItem.remote ? ', Remote' : ''}</strong> | {experienceItem.startDate} – {experienceItem.endDate}
                </span>
           </div>
      {open && (
        <div>
            {experienceItem.sections.map((section, idx) => 
                 <ExperienceSectionComponent key={idx} section={section}/>
            )}
        </div>
      )}
    </section>
    )
}

export default ExperienceItemComponent
