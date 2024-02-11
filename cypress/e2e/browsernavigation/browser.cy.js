describe('Backward and Forward Navigation', () => {
    it('should navigate between pages using back and forward', () => {
      // First, visit the initial page
      cy.visit('https://example.com');
  
      // Assume there's a link to another page on example.com. Click that link.
      cy.get('selector-to-navigate-link').click();
  
      // Now, we're on a new page. Let's go back to the previous page.
      cy.go('back');
  
      // Check if we are back on the initial page
      // Here you might check for something unique to the initial page to confirm
      cy.url().should('include', 'example.com');
  
      // Now, let's go forward to the page we navigated away from
      cy.go('forward');
  
      // Check if we are on the expected forward page
      // Again, check for something unique to this page
      cy.url().should('include', 'new-page-url-part');
  
      // Alternatively, you can use numbers with cy.go()
      // cy.go(-1) is equivalent to cy.go('back')
      // cy.go(1) is equivalent to cy.go('forward')
    });
  
    // Add more tests as needed
  });
  