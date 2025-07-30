import { render, screen } from '@testing-library/react';
import ExperienceComponent from './experience';
import { ExperienceItem } from '@abakernet/types';

// Mock the ExperienceItemComponent to simplify testing
jest.mock('./experience-item', () => {
    return function MockExperienceItem({ experienceItem }: { experienceItem: ExperienceItem }) {
        return <div data-testid="experience-item">{experienceItem.company}</div>;
    };
});

const mockExperience: ExperienceItem[] = [
    {
        company: 'TestCorp',
        location: 'San Francisco, CA',
        logo: '/test-logo.png',
        title: 'Senior Engineer',
        remote: true,
        startDate: '2020',
        endDate: '2023',
        sections: [
        {
            category: 'Development',
            bullets: ['Test bullet point']
        }
        ]
    },
    {
        company: 'AnotherCorp',
        location: 'Remote',
        logo: '/another-logo.png',
        title: 'Engineer',
        remote: false,
        startDate: '2018',
        endDate: '2020',
        sections: [
        {
            category: 'Engineering',
            bullets: ['Another test bullet']
        }
        ]
    }
];


test('renders professional experience section with items', () => {
    render(<ExperienceComponent experience={mockExperience} />);

    // Check for section heading
    expect(screen.getByText(/professional experience/i)).toBeInTheDocument();

    // Check that all experience items are rendered
    const experienceItems = screen.getAllByTestId('experience-item');
    expect(experienceItems).toHaveLength(2);
    expect(experienceItems[0]).toHaveTextContent('TestCorp');
    expect(experienceItems[1]).toHaveTextContent('AnotherCorp');
});
