/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('US-002 - Fluxo completo de compra', () => {

  it('Deve concluir uma compra com sucesso', () => {
    LoginPage.acessarSite()
    LoginPage.fazerLogin('standard_user', 'secret_sauce')

    ProductsPage.adicionarProdutoAoCarrinho()
    ProductsPage.irParaCarrinho()

    cy.get('[data-test="checkout"]').click()
    CheckoutPage.preencherCadastro('Leonardo', 'Pattussi', '96000000')

    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
  })
})
