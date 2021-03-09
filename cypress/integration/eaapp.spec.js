 

describe("Test 2",()=>{

    before("Login to application",() => {
        cy.visit('http://eaapp.somee.com/');
        cy.fixture("eauser").as("user");

        cy.get("@user").then((user)=>{
            cy.login(Cypress.env("username"),user.Password);
        })


    });


    it.only('Performing Benefit check', () => {
        

        cy.url().should("include","Account/Login");
            

        cy.get(".btn").click();
        
        cy.contains("Employee List").click();

        // Table
        cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();

        cy.get('.table').find('tr').as("rows");
       
        cy.get("@rows").then(($row)=>{
            cy.wrap($row).click({multiple:true});
        })

        cy.wrap({name: 'Karthik'}).should('have.property','name').and('eq','Karthik');

 

    });
})