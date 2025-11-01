// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (usuario, senha) => {
  
  if (usuario) {
    cy.get('[data-test="username"]').type(usuario)
  }

  if (senha) {
    cy.get('[data-test="password"]').type(senha)
  }

  cy.get('[data-test="login-button"]').click()
})


Cypress.Commands.add('preencherCadastro', (nome, sobrenome, zip_code) => {

  if (nome) {
    cy.get('[data-test="firstName"]').type(nome)
  }

  if (sobrenome) {
    cy.get('[data-test="lastName"]').type(sobrenome)
  }

  if (zip_code) {
    cy.get('[data-test="postalCode"]').type(zip_code)
  }

  cy.get('[data-test="continue"]').click()
})



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })