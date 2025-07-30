import { Skill } from '@abakernet/types';
import React from 'react';

type SkillsProps = {
    skills: Skill[]
}

const SkillsComponent: React.FC<SkillsProps> = ({skills}) => (
    <div>
        <h2>Technical Skills</h2>
        <ul>
            { skills.map((skill, idx) => (
                <li key={idx}><strong>{skill.title}: </strong>{skill.skills.join(', ')}</li>
            ))} 
        </ul>
    </div>
);

export default SkillsComponent;