/// <reference types ="Cypress" />

describe('First Test Suite', () => {

    before("call for a particular it block",() =>{
        cy.visit("http://www.executeautomation.com/site");
        
    })

    it("Testing of assertions"), () => {
       
        cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should('have.class','ls-nav-active');

        cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should(($x)=>{
            expect($x).to.have.class("ls-nav-active");
        })
    }


    it("Testing of assertions with hooks "), () => {
       
        
        cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should('have.class','ls-nav-active');

        cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should(($x)=>{
            expect($x).to.have.class("ls-nav-active");
        })
    }


   
});