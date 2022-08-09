const { get } = require('http');

describe('Basic functionality', () => {
  it('Loads index page', () => {
    cy.visit('/');
  });

  it('searches for a crag, clicks on the link', () => {
    cy.get('input').type('finale');
    cy.get('form button').click();
    cy.scrollTo('bottom').contains('Bric').parent().as('btnParent');
    cy.get('@btnParent').within(() => {
      cy.get('a').click();
    });
    cy.url().should('contain', '/sector/13195');
  });

  it('shows a route page when entering a valid /route/:routeNumber url', () => {
    cy.visit('/route/4-6-2148');
    cy.get('h1').should('contain', 'Carina');
    cy.contains('Carina');
  });
  it('shows a sector page when entering a valid /sector/:sectorNumber url', () => {});
  it('shows a crag page when entering a valid /crag/:cragNumber url', () => {});
});
