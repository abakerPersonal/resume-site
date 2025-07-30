import { render, screen } from '@testing-library/react';
import EducationComponent from './education';
import { EducationItem } from '@abakernet/types';

const mockEducation: EducationItem[] = [
    {
        school: 'University of Example',
        degree: ['BS in Computer Science', 'Minor in Math']
    }
];

test('renders education entries', () => {
    render(<EducationComponent education={mockEducation} />);
    expect(screen.getByText(/education/i)).toBeInTheDocument();
    expect(screen.getByText(/BS in Computer Science, Minor in Math/i)).toBeInTheDocument();
});