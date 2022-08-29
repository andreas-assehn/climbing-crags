import { cleanup, render, screen } from '@testing-library/react';
import InfoCard from '../components/ui/InfoCard';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('InfoCard', () => {
  it('should render InfoCard', () => {
    render(<InfoCard />);
    expect(screen.getByText('Grades:')).toBeInTheDocument();
  });

  it('should show N° Sectors or Routes depending on type passed', () => {
    const { rerender } = render(<InfoCard type={'crag'} />);
    expect(screen.getByText('N° Sectors:')).toBeInTheDocument();

    rerender(<InfoCard type={'sector'} />);
    expect(screen.getByText('N° Routes:')).toBeInTheDocument();
  });
});
