/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('US-003 - Funcionalidade: Cadastro no Checkout', () => {
  
  beforeEach(() => {
    LoginPage.acessarSite()
    LoginPage.fazerLogin('standard_user', 'secret_sauce')
    ProductsPage.adicionarProdutoAoCarrinho()
    ProductsPage.irParaCarrinho()
    cy.get('[data-test="checkout"]').click()
  })

  it('Deve realizar cadastro com sucesso (todos campos preenchidos)', () => {
    CheckoutPage.preencherCadastro('Leonardo', 'Pattussi', '96000000')
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
  })

  it('Deve exibir erro ao deixar todos os campos vazios', () => {
    cy.get('[data-test="continue"]').click()
    CheckoutPage.validarMensagemErro('Error: First Name is required')
  })

  it('Deve validar ausência de nome', () => {
    CheckoutPage.preencherCadastro('', 'Pattussi', '96000000')
    CheckoutPage.validarMensagemErro('Error: First Name is required')
  })

  it('Deve validar ausência de sobrenome', () => {
    CheckoutPage.preencherCadastro('Leonardo', '', '96000000')
    CheckoutPage.validarMensagemErro('Error: Last Name is required')
  })

  it('Deve validar ausência de CEP', () => {
    CheckoutPage.preencherCadastro('Leonardo', 'Pattussi', '')
    CheckoutPage.validarMensagemErro('Error: Postal Code is required')
  })

  it('Deve permitir cancelar o checkout e voltar ao carrinho', () => {
    CheckoutPage.cancelarCheckout()
  })
})
