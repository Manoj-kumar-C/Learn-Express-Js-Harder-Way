describe('DOM Interaction Example', () => {
    it('Performs actions on a web form', () => {
        cy.visit('www.freshspar.com');

        // Query and interact with DOM elements
        cy.get('#name').type('John Doe');
        cy.get('#email').type('john.doe@example.com');
        cy.get('select#subject').select('Feedback');
        cy.get('textarea#message').type('Great job on the website!');
        cy.get('input[type="checkbox"]').check(); // Check a checkbox
        cy.get('form').submit(); // Submit the form

        // Assertion
        cy.url().should('include', '/thank-you');
        cy.get('.thank-you-message').should('contain', 'Thank you, John Doe');
    });
});
