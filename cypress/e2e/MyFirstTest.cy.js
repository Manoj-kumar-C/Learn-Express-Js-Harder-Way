describe('My First Test', () => {
    it('Visits the Cypress website', () => {
      // Visit a website
      cy.visit('https://www.cypress.io/');
  
      // Check if the page contains the expected text
      cy.contains('debug them visually').should('be.visible');
    });
  });
  