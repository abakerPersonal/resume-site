import { Experience, ExperienceSection } from '@abakernet/types';
import React, { useState } from 'react';
import ExperienceSectionComponent from './experience-section';
import exp from 'constants';

type ExperienceProps = {
  experience: Experience
};

const ExperienceComponent: React.FC<ExperienceProps> = ({ experience }) => {
    const [open, setOpen] = useState(false);

    return (
        <section className='section'>
            <h3><img src={experience.logo} /> {experience.company}, {experience.location}</h3>
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
                    <strong>{experience.title}{experience.remote ? ', Remote' : ''}</strong> | {experience.startDate} – {experience.endDate}
                </span>
           </div>
      {open && (
        <div>
            {experience.sections.map((section, idx) => 
                 <ExperienceSectionComponent key={idx} experienceSection={section}/>
            )}
        </div>
      )}
    </section>
    )
}

export default ExperienceComponent
