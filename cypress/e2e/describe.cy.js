describe.only('Focused Test Suite', () => {
    it('Test Case 1', () => {
      cy.log("------ Describe Only 1------")
    });
  
    it('Test Case 2', () => {
      cy.log("-------- Describe Only 2 -------")
    });
  });
  
  describe('Another Test Suite', () => {
    it('Another Test Case', () => {
      cy.log("------ Describe only Second Block -------")
    });
  });




  /* Describe Only runs the specific code to test
  that is inside of its block, but does not execute any other tests
  
  */

 // ! Very Important 
 // * some important 
 // ?

//TODO
  