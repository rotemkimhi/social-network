//cypress\integration\app_spec.js
describe('App', () => {
    it('Stays on the login page on wrong credentials', () => {
        cy.get('input[name=username]').type('wrongUsername');
        cy.get('input[name=password]').type('wrongPassword');
        cy.get('form').submit();
        cy.url().should('include', '/login');  // still '/login' after failed login
      });      
  })
  