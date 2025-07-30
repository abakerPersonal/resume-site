import { render, screen } from '@testing-library/react';
import ExperienceSectionComponent from './experience-item-bullet-section';
import { ExperienceItemBulletSection } from '@abakernet/types';

const mockSection: ExperienceItemBulletSection = {
    category: 'Backend Development',
    bullets: [
        'Built REST APIs in Node.js',
        'Deployed with Docker and Kubernetes'
  ]
};

test('renders section category and bullets', () => {
    render(<ExperienceSectionComponent section={mockSection} />);
    expect(screen.getByRole('heading', { level: 4, name: /backend development/i })).toBeInTheDocument();
    expect(screen.getByText(/built rest apis in node\.js/i)).toBeInTheDocument();
    expect(screen.getByText(/deployed with docker and kubernetes/i)).toBeInTheDocument();
});