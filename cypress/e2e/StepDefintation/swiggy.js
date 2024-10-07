import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import '../../support/commands'

Given('user launch the application', () => {
  cy.visit("https://www.swiggy.com")
});

When('user search for the {string}', (item) => {
  cy.forceClick('//span[contains(text(),"Search")]')
  cy.searchElement('//input[contains(@class,"ssM7E")]', item)

});

And('user select the resurtant {string}', (resurtant) => {
  cy.forceClick('(//div[contains(text(),"' + resurtant + '")])[1]')
})

Then('user select the item to cart', () => {
  cy.forceClick('//*[@id="cid-Recommended"]/div[2]/div/div[1]/div[1]/div/div[2]/div/div/div/div[1]/div/button[2]/div')
})