import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import '../../support/commands'
// Given step: Set up the initial context
Given('the user opens the google homepage', () => {
    // Visit a URL to your homepage)
    cy.visit("https://www.amazon.in/")
});

// When step: Navigate to the Google website
When('the user enter {string} and {string}', () => {
    // Visit the Google homepage
    cy.mouseHover('#nav-link-accountList-nav-line-1');
    cy.wait(1000);
    cy.forceClick('(//span[contains(text(),"Sign in")])[1]')
    cy.get('.a-form-label').should('be.visible');
    // provide  empty value and validate error message
    cy.forceClick('#continue')
    //cy.inputShouldHave('.a-alert-content', 'Enter your email or mobile phone number')
    cy.enterText('#ap_email', '19311a12c6')
    //cy.get('.a-alert-content').should('contain.text', 'Enter a valid email address or phone number')
    cy.enterText('#ap_email', '19311a12c5@sreenidhi.edu.in');
    cy.forceClick('#continue')
    cy.get('#ap_email').clear();
    cy.get('.a-alert-content').should('contain.text', 'We cannot find an account with that email address')
    cy.enterText('#ap_email', '19311a12c6@sreenidhi.edu.in');
    cy.inputShouldHave('#ap_email', '19311a12c6@sreenidhi.edu.in')
    cy.inputShouldNotHave('#ap_email').should('not.equal', '19311a12c5@sreenidhi.edu.in')
    cy.forceClick('#continue');
    cy.enterText('#ap_password', 'S@t26');
    cy.forceClick('#signInSubmit')
    cy.get('.a-alert-content').should('contain.text', 'Your password is incorrect')
    cy.get('#ap_password').clear();
    cy.enterText('#ap_password', 'S@t26-26');
    cy.inputShouldHave('#ap_password', 'S@t26-26')
    cy.inputShouldNotHave('input[name="password"]', 'S@t26-26')
    cy.forceClick('#signInSubmit')
});

// Then step: Verify Google homepage elements
Then('the user click on search bar', () => {
    // Assert that the search bar and Google logo elements are visible
    //cy.get('textarea[name="q"]').click();

});

// And step: Verify the URL of the page
And('the URL of the page should be {string}', (expectedUrl) => {
    // Assert that the current URL matches the expected URL
    //cy.url().should('eq', 'https://www.google.com/imghp?hl=en&ogbl');
});