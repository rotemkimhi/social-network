describe("Blog pagination", () => {
    it("navigates to the next page", () => {
      cy.visit("http://localhost:3000");
  
      cy.get('.post').first().invoke('attr', 'key').as('firstPostID');
      cy.get('button').contains('Next').click();
      cy.get('.post').first().invoke('attr', 'key').should('not.eq', '@firstPostID');
    });
  });
  