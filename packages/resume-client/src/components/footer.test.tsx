import { render, screen } from "@testing-library/react";
import FooterComponent from "./footer";


test('renders footer with copyright, year, and rights', () => {
  render(<FooterComponent />);
  const year = new Date().getFullYear().toString();
  expect(screen.getByText(new RegExp(year))).toBeInTheDocument();

  expect(screen.getByText(/alan baker/i)).toBeInTheDocument();
  expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
});