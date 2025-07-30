import { render, screen } from '@testing-library/react';
import SummaryComponent from './summary';


const mockSummary = 'Senior software engineer with 10+ years of experience in full-stack development.';

test('renders summary section with heading and content', () => {
    render(<SummaryComponent summary={mockSummary} />);

    // Check for section heading
    expect(screen.getByRole('heading', { name: /professional summary/i })).toBeInTheDocument();

    // Check for summary content
    expect(screen.getByText(mockSummary)).toBeInTheDocument();
});

test('renders empty summary when provided empty string', () => {
    render(<SummaryComponent summary="" />);

    expect(screen.getByRole('heading', { name: /professional summary/i })).toBeInTheDocument();
    expect(screen.getByText('')).toBeInTheDocument();
});
