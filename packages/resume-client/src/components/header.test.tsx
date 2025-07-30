import { render, screen } from '@testing-library/react';
import HeaderComponent from './header';
import { Header } from '@abakernet/types';

const mockHeader: Header = {
    name: 'John Doe',
    title: 'Senior Software Engineer',
    email: 'john@example.com',
    linkedInUrl: 'linkedin.com/in/johndoe',
    location: 'San Francisco, CA'
};

test('renders header information correctly', () => {
    render(<HeaderComponent headerInfo={mockHeader} />);

    // Check name and title
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('John Doe');
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();

    // Check contact information
    const emailLink = screen.getByRole('link', { name: 'john@example.com' });
    expect(emailLink).toHaveAttribute('href', 'mailto:john@example.com');

    const linkedInLink = screen.getByRole('link', { name: 'linkedin.com/in/johndoe' });
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/johndoe');
    expect(linkedInLink).toHaveAttribute('target', '_blank');
    expect(linkedInLink).toHaveAttribute('rel', 'noreferrer');

    // Check location
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument();
});
