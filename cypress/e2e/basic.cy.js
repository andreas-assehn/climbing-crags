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
    cy.contains('carina')
      .next()
      .find('a')
      .should('contain', 'Cajenna')
      .should('contain', 'MUZZERONE');
    cy.contains('Grade:').should('contain', '5c');
    cy.contains('Rating:').parent().as('stars');
    cy.get('@stars').within(() => {
      cy.get('img').should('have.length', '10');
    });
    cy.get('@stars')
      .parent()
      .within(() => {
        cy.get('button').filter(':visible');
      });
    cy.contains('Comments')
      .parent()
      .as('commentsSection')
      .should('contain', 'Average comment rating:')
      .should('contain', 'How was it ?');
    cy.get('@commentsSection').within(() => {
      cy.get('input').invoke('attr', 'placeholder').should('eq', 'Title...');
      cy.get('textarea').invoke('attr', 'placeholder').should('eq', 'Comment');
      cy.get('img').should('have.length', '10');
      cy.get('button').should('contain', 'SEND');
    });
  });

  it('shows a sector page when entering a valid /sector/:sectorNumber url', () => {
    cy.visit('/crag/erto');
    cy.contains('Erto').next().should('contain', 'ITA');
    cy.contains('N° Sectors:').should('contain', '3');
    cy.contains('Grades:').should('contain', '3a - 7a+');
    cy.contains("People's rating:").parent().as('card');
    cy.get('@card').within(() => {
      cy.get('img').should('have.length', '10');
    });
    cy.contains('Sectors');
    cy.contains('BIG').parent().as('bigParent');
    cy.get('@bigParent').within(() => {
      cy.get('img').should('have.length', '2');
      cy.get('a');
      cy.contains('6a - 6c');
      cy.contains('10+ routes');
      cy.contains('1.8');
    });
    cy.contains('No big').parent().as('noBigParent');
    cy.get('@noBigParent').within(() => {
      cy.get('img').should('have.length', '2');
      cy.get('a');
      cy.contains('3a - 6a');
      cy.contains('10+ routes');
      cy.contains('1.6');
    });
    cy.contains('Contessa').parent().as('contessaParent');
    cy.get('@contessaParent').within(() => {
      cy.get('img').should('have.length', '2');
      cy.get('a');
      cy.contains('Erto,');
      cy.contains('ITA');
      cy.contains('5c - 7a+');
      cy.contains('7+ routes');
      cy.contains('1.0');
    });
  });

  it('shows a crag page when entering a valid /crag/:cragNumber url', () => {
    cy.visit('/crag/napoleonica');
    cy.contains('Napoleonica').next().contains('ITA');
    cy.contains('N° Sectors:').contains('16');
    cy.contains('N° Sectors:').filter(':visible').parent().as('card');
    cy.get('@card').within(() => {
      cy.contains('Grades:').contains('3a - 7b');
      cy.contains("People's rating:");
      cy.get('img').should('have.length', '10');
    });
    cy.contains('Sectors');
    cy.contains('Mano di Fatima').parent().as('manoCard');
    cy.get('@manoCard').within(() => {
      cy.get('img').should('have.length', '2');
      cy.contains('5a - 6a+');
      cy.contains('10+ routes');
      cy.contains('0.3');
      cy.contains('Napoleonica');
      cy.contains('ITA');
      cy.get('a').contains('see more');
    });
    cy.contains('Cristo').parent().as('cristoCard');
    cy.get('@cristoCard').within(() => {
      cy.get('img').should('have.length', '2');
      cy.contains('5a - 6b+');
      cy.contains('10+ routes');
      cy.contains('1.6');
      cy.contains('Napoleonica');
      cy.contains('ITA');
      cy.get('a').contains('see more');
    });
    cy.get('button').contains('Load More').click();
    cy.contains('Piccolo Cottolengo').parent().as('piccoloCard');
    cy.get('@piccoloCard').within(() => {
      cy.get('img').should('have.length', '2');
      cy.contains('6a - 6c+');
      cy.contains('10+ routes');
      cy.contains('1.3');
      cy.contains('Napoleonica');
      cy.contains('ITA');
      cy.get('a').contains('see more');
    });
  });
});
