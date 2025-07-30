import { render, screen } from '@testing-library/react';
import SummaryComponent from './summary';

const mockSummary = 'Senior software engineer with 10+ years of experience in full-stack development.';

test('renders summary section with heading and content when summary provided', () => {
    render(<SummaryComponent summary={mockSummary} />);
    
    expect(screen.getByRole('heading', { name: /professional summary/i })).toBeInTheDocument();
    expect(screen.getByText(mockSummary)).toBeInTheDocument();
});

test('does not render heading or content when summary is empty', () => {
    render(<SummaryComponent summary="" />);
    
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    expect(screen.queryByText(/professional summary/i)).not.toBeInTheDocument();
});
