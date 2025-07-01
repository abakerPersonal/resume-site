import { render, screen } from '@testing-library/react';
import DownloadButton from './download-button';

test('renders download button with correct text and link', () => {
  render(<DownloadButton fileUrl="/files/resume.pdf" buttonText="Download PDF" />);
  const button = screen.getByRole('button', { name: /download pdf/i });
  expect(button).toBeInTheDocument();

  const link = button.closest('a');
  expect(link).toHaveAttribute('href', '/files/resume.pdf');
});