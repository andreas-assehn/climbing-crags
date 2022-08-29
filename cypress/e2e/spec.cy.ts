describe('User flow test', () => {
  it('Visits Climbing Crags', () => {
    cy.visit('http://localhost:3000');
  });
  it('Searches for "i", clicks button and checks url', () => {
    cy.get('input').type('i');
    cy.contains('Search').click();
    cy.url().should('include', '/?search=i');
  });
  it('Clicks "See more" on first element and checks url', () => {
    cy.contains('see more').click();
    cy.url().should('include', '/crag/erto');
  });
  it('Clicks "See more" on first element and checks url', () => {
    cy.contains('see more').click();
    cy.url().should('include', '/sector/1834');
  });
  it('Clicks first element and checks url', () => {
    cy.get('a[href^="/route/"]').first().click();
    cy.url().should('include', '/route/0-3-62');
  });
  it('Should navigate back and check url', () => {
    cy.go('back');
    cy.url().should('include', '/sector/1834');
  });
  it('Clicks the Climbing Crags link in navbar and checks url', () => {
    cy.get('a[href^="/"]').first().click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});

export {};
