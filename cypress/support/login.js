import {Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
Given("user launch the application",()=>{
    cy.visit('https://www.youtube.com/')
})

