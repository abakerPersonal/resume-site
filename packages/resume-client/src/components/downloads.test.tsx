import { render, screen, waitFor } from '@testing-library/react';
import Downloads from './downloads';

beforeEach(() => {
  // @ts-ignore
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { url: '/files/resume.pdf', type: 'PDF' },
        { url: '/files/resume.docx', type: 'DOCX' }
      ])
    })
  );
});

afterEach(() => {
  // @ts-ignore
  global.fetch.mockClear();
});

test('renders download buttons after fetching', async () => {
  render(<Downloads />);
  // Wait for the buttons to appear
  await waitFor(() => {
    expect(screen.getByRole('button', { name: /download pdf/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /download docx/i })).toBeInTheDocument();
  });
});