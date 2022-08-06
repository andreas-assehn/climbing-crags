import { cleanup, render, screen } from '@testing-library/react';
import Rating from '../components/ui/Rating';
import '@testing-library/jest-dom';

describe('Rating', () => {
  it('renders rating component', () => {
    render(<Rating rating={3} />);
    expect(screen.getAllByAltText('star svg').length).toBe(5);
    cleanup();
    render(<Rating />);
    expect(screen.getAllByAltText('star svg').length).toBe(5);
    cleanup();
  });

  it('should work with numbers between 0 and 5', () => {
    // should I refactor to make the test fail?
    const testRating = [-127, 0, 5, 3.8, 6, 10, 100065];
    testRating.forEach((number) => {
      render(<Rating rating={number} />);
      cleanup();
    });
  });
});
