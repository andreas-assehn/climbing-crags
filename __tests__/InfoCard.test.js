import { cleanup, render, screen } from '@testing-library/react';
import InfoCard from '../components/ui/InfoCard';
import '@testing-library/jest-dom';

describe('InfoCard', () => {
  it('should render InfoCard', () => {
    render(<InfoCard />);
    expect(screen.getByText('Grades:')).toBeInTheDocument();
    cleanup();
  });

  it('should show the correct stars', () => {});
});
