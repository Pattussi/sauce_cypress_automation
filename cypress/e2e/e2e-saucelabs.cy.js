/// <reference types="cypress"/>

describe('US-002 - Fluxo completo de compra', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve concluir uma compra com sucesso', () => {
    // Login
    cy.login('standard_user', 'secret_sauce')

    // Escolha do produto
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    // Ir para o carrinho
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="title"]').should('contain', 'Your Cart')

    // Checkout
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Backpack')
    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('contain.text', 'Sauce Labs Bike Light')
    cy.get('[data-test="checkout"]').click()

    // Formulário Checkout
    cy.preencherCadastro('Leonardo', 'Pattussi', '17262537')
    cy.get('[data-test="title"]').should('contain.text', 'Checkout: Overview')

    // Finalizar pedido
    cy.get('[data-test="finish"]').click()

    // Validação final
    cy.get('[data-test="complete-header"]')
      .should('contain.text', 'Thank you for your order!')
  })

})
