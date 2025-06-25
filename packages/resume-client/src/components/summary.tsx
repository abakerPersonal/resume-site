import { } from '@abakernet/types';
import React from 'react';

type SummaryProp = {
    summary: string
}

const SummaryComponent: React.FC<SummaryProp> = ({summary}) => (
    <div>
        <h2>Professional Summary</h2>
        <p>Senior Software Engineer with a proven track record of designing, building, and maintaining scalable, high-performance software systems. Experienced across the full software development lifecycle, with a focus on backend services, APIs, and cloud-based architectures. Skilled in modern languages including TypeScript, Java, and Ruby, and frameworks such as Node.js, Spring, and Ruby on Rails. Comfortable working full stack across both web and mobile platforms. Adaptable and solutions-oriented, passionate about clean code, performance optimization, and driving innovation in fast-paced, collaborative environments.</p>
    </div>
);

export default SummaryComponent;