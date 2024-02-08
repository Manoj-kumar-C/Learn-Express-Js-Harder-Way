describe('Login Test', () => {
    it('Successfully logs in', () => {
        // Step 1: Visit the login page
        cy.visit('www.themeforest.com')

        // Step 2: Type the username and password
        cy.get('.shared-autosuggest_component__searchInput').type('testuser')
        

        // Use data-cy for more robust tests in real scenarios
        // cy.get('[data-cy=username]').type('testuser')
        // cy.get('[data-cy=password]').type('password123')

        // Step 3: Click the login button
        cy.get('.shared-autosuggest_component__searchBtn').click()

        // Alternatively, for forms, you can use `.submit()` if it triggers the form submission
        // cy.get('#loginForm').submit()

        // Step 4: Assert the login was successful by checking the URL
        cy.url().should('include', '/home')

        // Optionally, check for the presence of an element that only exists when logged in
        // cy.get('.welcome-message').contains('Welcome, testuser!')
    })
})
