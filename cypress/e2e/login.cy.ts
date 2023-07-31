//cypress\e2e\login.cy.ts
describe('<Login />', () => {
  it('Stays on the login page on wrong credentials', () => {
      cy.visit('http://localhost:3000/login')
      
      cy.get('input[name=username]').type('wrongUsername');
      cy.get('input[name=password]').type('wrongPassword');
      cy.get('form').submit();

      cy.url().should('include', '/login');
  });  
})

describe('Successful Login', () => {
  it('Redirects to homepage on correct credentials', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name=username]').type('j');
    cy.get('input[name=password]').type('j');
    cy.get('form').submit();
    cy.url().should('not.include', '/login'); // Assuming home page after successful login
  });
});

