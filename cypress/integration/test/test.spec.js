/// <reference types="cypress" />

Given('navigate to web site', () => {
    cy.visit('/');
})

describe('Opening sign in page', () => {

    When('sign in button is clicked', () => {
        cy.contains('div', 'Вход').click({force: true});
    })
    
    Then('validate that on the sign in page', () => {
        cy.get('div.modal_open').should('be.visible');
    })

})


describe('Sign in', () => {

    
    When('sign in button is clicked', () => {
        cy.contains('div', 'Вход').click({force: true});
    })

    And('entered', (data) => {
        data.hashes().forEach(element => {
            cy.get('input[placeholder="Ник или e-mail"]').clear().type(element.email);
            cy.get('input[placeholder="Пароль"]').clear().type(element.password);
        })
    })

    And('sign in confirmed', () => {
        cy.get('button.auth-button').click({force: true});
    })

    Then('validate that loggined in', () => {
        cy.contains('div', 'Неверный логин или пароль').should('not.exist');
    })
    
})
