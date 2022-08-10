import InfoCard from '../../components/ui/InfoCard';

const mocks = {
  rating: '3.6',
  routes: 'El Magico',
  difficulties: '3a',
  classes: 'Bueno',
  type: 'Cabrón',
};

describe('<InfoCard>', () => {
  it('mounts', () => {
    cy.mount(<InfoCard {...mocks} />);
    cy.contains('El Magico');
    cy.contains('3a');
    cy.contains("People's rating");
  });
});
