import { render, screen } from '@testing-library/react';
import MeminiApp from './MeminiApp';

test('renders learn react link', () => {
  render(<MeminiApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
