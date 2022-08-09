import { cleanup, render, screen } from '@testing-library/react';
import Rating from '../components/ui/Rating';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Rating', () => {
  it('renders rating component', () => {
    const { rerender } = render(<Rating rating={3} />);
    expect(screen.getAllByAltText('star svg').length).toBe(5);

    rerender(<Rating />);
    expect(screen.getAllByAltText('star svg').length).toBe(5);
  });

  it('should render when passed a number between 0 and 5', () => {
    render(<Rating rating={0.5} />);
    expect(screen.getAllByAltText('star svg').length).toBe(5);
    cleanup();
    render(<Rating rating={4} />);
    expect(screen.getAllByAltText('star svg').length).toBe(5);
  });
});
