import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggleButton from './dark-mode-toggle';

test('renders the toggle button with correct icon and calls onToggle', () => {
    const onToggle = jest.fn();

    // Test when darkMode is false (should show moon icon)
    const { rerender } = render(<DarkModeToggleButton darkMode={false} onToggle={onToggle} />);
    expect(screen.getByRole('button', { name: /toggle dark mode/i })).toBeInTheDocument();
    expect(screen.getByTestId('theme-icon')).toHaveClass('fa-moon');

    // Click the button
    fireEvent.click(screen.getByRole('button', { name: /toggle dark mode/i }));
    expect(onToggle).toHaveBeenCalledTimes(1);

    // Test when darkMode is true (should show sun icon)
    rerender(<DarkModeToggleButton darkMode={true} onToggle={onToggle} />);
    expect(screen.getByTestId('theme-icon')).toHaveClass('fa-sun');
});