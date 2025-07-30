import { render, screen } from '@testing-library/react';
import SkillsComponent from './skills';
import { Skill } from '@abakernet/types';

const mockSkills: Skill[] = [
    {
        title: 'Languages',
        skills: ['TypeScript', 'JavaScript', 'Python']
    },
    {
        title: 'Frameworks',
        skills: ['React', 'Node.js', 'Express']
    }
];


test('renders skills section with categories and items', () => {
    render(<SkillsComponent skills={mockSkills} />);

    // Check section heading
    expect(screen.getByRole('heading', { name: /technical skills/i })).toBeInTheDocument();

    // Check skill categories and their contents
    expect(screen.getByText(/languages:/i)).toBeInTheDocument();
    expect(screen.getByText(/typescript, javascript, python/i)).toBeInTheDocument();

    expect(screen.getByText(/frameworks:/i)).toBeInTheDocument();
    expect(screen.getByText(/react, node\.js, express/i)).toBeInTheDocument();
});

test('renders empty list when no skills provided', () => {
    render(<SkillsComponent skills={[]} />);
    
    expect(screen.getByRole('heading', { name: /technical skills/i })).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
});
