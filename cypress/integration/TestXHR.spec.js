/// <reference types="Cypress"/>

describe('Test Sample XHR', () => {

    before(() => {
        cy.visit("https://accounts.lambdatest.com/login");
    });

    it('Verify Cookies', () => {
        cy.fixture("eauser").as("user");

        cy.get("@user").then((user)=>{
            cy.login(Cypress.env("username"),user.Password);
        })
        

        cy.getCookie('user_id').should('have.property','value',41224)
    });
});