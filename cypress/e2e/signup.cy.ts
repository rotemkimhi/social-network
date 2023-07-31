describe('Successful Signup', () => {
  it('Redirects to homepage on correct details', () => {
    const randomString = Math.random().toString(36).substring(7);
    cy.visit('http://localhost:3000/signup');
    cy.get('input[name=name]').type(`testName${randomString}`);
    cy.get('input[name=email]').type(`testEmail${randomString}@gmail.com`);
    cy.get('input[name=username]').type(`testUsername${randomString}`);
    cy.get('input[name=password]').type('testPassword1');
    cy.get('form').submit();
    cy.url().should('not.include', '/signup'); // Assuming home page after successful signup
  });
});


  
  describe('Unsuccessful Signup', () => {
    it('Stays on the signup page on wrong details', () => {
      cy.visit('http://localhost:3000/signup');
      cy.get('input[name=name]').type('testName');
      cy.get('input[name=email]').type('wrongEmail'); // wrong email format
      cy.get('input[name=username]').type('testUsername');
      cy.get('input[name=password]').type('testPassword');
      cy.get('form').submit();
      cy.url().should('include', '/signup'); // Assuming  stays on signup page after unsuccessful signup
    });
  });
  