Cypress.Commands.add('forceClick', (locator) => {
    if (locator.includes('//')) {
        cy.xpath(locator).scrollIntoView().should('exist').click({ force: true })
    }
    else {
        cy.get(locator).scrollIntoView().click()
    }
})

Cypress.Commands.add('enterText', (locator, value) => {
    if (locator.includes("//")) {
        cy.xpath(locator).scrollIntoView().should('exist').clear().type(value)
    }
    else {
        cy.get(locator).scrollIntoView().should('exist').clear().type(value)
    }
})

Cypress.Commands.add('inputShouldHave', (locator, value) => {
    if (locator.includes("//")) {
        cy.xpath(locator).scrollIntoView().should('exist').should('have.value', value)
    }
    else {
        cy.get(locator).scrollIntoView().should('exist').should('have.value', value)
    }
})

Cypress.Commands.add('inputShouldNotHave', (locator, value) => {
    if (locator.includes("//")) {
        cy.xpath(locator).scrollIntoView().should('exist').should('not.equal', value)
    }
    else {
        cy.get(locator).scrollIntoView().should('exist').should('not.equal', value)

    }
})
Cypress.Commands.add('mouseHover', (locator) => {
    if (locator.includes("//")) {
        cy.xpath(locator).trigger('mouseover')
    }
    else {
        cy.get(locator).trigger('mouseover')
    }
})

Cypress.Commands.add('searchElement', (locator, element) => {
    if (locator.includes("//")) {
        cy.xpath(locator).scrollIntoView().should('exist').type(element).type('{enter}')
    }
    else {
        cy.get(locator).scrollIntoView().should('exist').type(element).type('{enter}')
    }
})

