import { cleanup, render, screen } from '@testing-library/react';
import Rating from '../components/ui/Rating';
import '@testing-library/jest-dom';

describe('Rating', () => {
  it('renders rating component', () => {
    const { rerender } = render(<Rating rating={3} />);
    expect(screen.getAllByAltText('star svg').length).toBe(5);
    screen.debug();

    rerender(<Rating />);
    expect(screen.getAllByAltText('star svg').length).toBe(5);
  });

  it('should work with numbers between 0 and 5', () => {
    // should I refactor to make the test fail?
    // Alex's suggestion: make component transform too large numbers to 5 and too small numbers to 0
    const testRating = [-127, 0, 5, 3.8, 6, 10, 100065];
    testRating.forEach((number) => {
      render(<Rating rating={number} />);
      cleanup();
    });
  });

  test.each();
});
// msw package => mocking
// "stop mocking fetch" article
