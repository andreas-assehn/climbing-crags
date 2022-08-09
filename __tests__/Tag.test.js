import { cleanup, render, screen } from '@testing-library/react';
import Tag from '../components/ui/Tag';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Tag', () => {
  it('should render text from prop', () => {
    render(<Tag text={'TestText'} />);
    expect(screen.getByText('TestText')).toBeInTheDocument();
  });

  it('should render a star if star = true', () => {
    render(<Tag star={true} />);
    expect(screen.getByAltText('star svg')).toBeInTheDocument();
  });
});
