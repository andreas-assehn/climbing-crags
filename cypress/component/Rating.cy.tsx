import Rating from '../../components/ui/Rating';

const mocks = {
  rating: 3.6,
  notBoxed: false,
  className: '',
};

describe('<Rating>', () => {
  it('mounts and checks if stars are rendering correctly', () => {
    cy.mount(<Rating {...mocks} />);
    cy.get('img[src="/star-full.svg"]').its('length').should('eq', 3);
    cy.get('img[src="/star-half.svg"]').its('length').should('eq', 1);
    cy.get('img[src="/star-empty.svg"]').its('length').should('eq', 1);
  });
});
