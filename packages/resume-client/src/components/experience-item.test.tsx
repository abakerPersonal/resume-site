import { render, screen, fireEvent } from '@testing-library/react';
import ExperienceItemComponent from './experience-item';
import { ExperienceItem } from '@abakernet/types';

const mockExperience: ExperienceItem = {
    company: 'TestCorp',
    location: 'Somewhere, CA',
    logo: '/logo.png',
    title: 'Senior Developer',
    remote: true,
    startDate: '2020',
    endDate: '2022',
    sections: [
    {
        category: 'Backend',
        bullets: ['Built APIs', 'Wrote tests']
    }
    ]
};

test('renders company, location, and title', () => {
    render(<ExperienceItemComponent experienceItem={mockExperience} />);
    expect(screen.getByText(/TestCorp/i)).toBeInTheDocument();
    expect(screen.getByText(/Somewhere, CA/i)).toBeInTheDocument();
    expect(screen.getByText(/Senior Developer, Remote/i)).toBeInTheDocument();
    expect(screen.getByText(/2020 – 2022/i)).toBeInTheDocument();
});

test('expands and collapses details', () => {
    render(<ExperienceItemComponent experienceItem={mockExperience} />);
    const button = screen.getByRole('button', { name: /expand details/i });
    expect(button).toBeInTheDocument();

    // Details should not be visible initially
    expect(screen.queryByText(/Backend/i)).not.toBeInTheDocument();

    // Click to expand
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /collapse details/i })).toBeInTheDocument();
    expect(screen.getByText(/Backend/i)).toBeInTheDocument();
    expect(screen.getByText(/Built APIs/i)).toBeInTheDocument();
    expect(screen.getByText(/Wrote tests/i)).toBeInTheDocument();

    // Click to collapse
    fireEvent.click(screen.getByRole('button', { name: /collapse details/i }));
    expect(screen.queryByText(/Backend/i)).not.toBeInTheDocument();
});