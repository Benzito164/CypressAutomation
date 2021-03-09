import {Given,And,Then} from "cypress-cucumber-preprocessor/steps"
import {loginPage} from "../../examples/Pages/EALoginPage"

Given('I visit Ea Site',()=>{
    cy.visit('http://eaapp.somee.com/');
})

Given('I click login',()=>{
   cy.contains('Login').click();
})

Given('i login as user with {string} and {string}',(username,password)=>{
    cy.get("#UserName").type(username);
    cy.get("#Password").type(password,{log:false});
    cy.get(".btn").click();
 })

 Given('i login as following', datatable => {

    datatable.hashes().forEach(row =>{
        // cy.get("#UserName").type(row.userName);
        // cy.get("#Password").type(row.Password,{log:false});

        loginPage.performLogin(row.userName,row.Password);
        
    });
    loginPage.clickLoginButton();

 })