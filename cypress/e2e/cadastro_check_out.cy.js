/// <reference types="cypress"/>


describe('US-003-Funcionalidade: Cadastro Checkout', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('standard_user', 'secret_sauce')
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('.btn_primary').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.btn_action').click()
  });


  it('Deve fazer cadastro com os campos obrigatórios preenchidos', () => {
    cy.preencherCadastro('Leonardo', 'Pattussi', '99010000')
    cy.get('[data-test="title"]').should('contain', 'Checkout: Overview')
  });

  it('Erro ao deixar vazio os campos obrigatórios', () => {
    cy.preencherCadastro("", '', '')
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
  });

  it('Não deve aceitar fazer cadastro sem o campo NOME', () => {
    cy.preencherCadastro("", 'Pattussi', '99010000')
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
  });

  it('Não deve aceitar fazer cadastro sem o campo SOBRENOME', () => {
    cy.preencherCadastro("Leonardo", '', '99010000')
    cy.get('[data-test="error"]').should('contain', 'Error: Last Name is required')
  });

  it('Não deve aceitar fazer cadastro sem o campo ZIP-CODE', () => {
    cy.preencherCadastro("Leonardo", 'Pattussi', '')
    cy.get('[data-test="error"]').should('contain', 'Error: Postal Code is required')
  });

  it('Deve exibir erro ao deixar o campo Nome vazio', () => {
    cy.preencherCadastro('', 'Pattussi', '12345')
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
  });

  it('Deve exibir erro ao deixar o campo Sobrenome vazio', () => {
    cy.preencherCadastro('Leonardo', '', '12345')
    cy.get('[data-test="error"]').should('contain', 'Error: Last Name is required')
  });

  it('Deve exibir erro ao deixar o campo ZIP Code vazio', () => {
    cy.preencherCadastro('Leonardo', 'Pattussi', '')
    cy.get('[data-test="error"]').should('contain', 'Error: Postal Code is required')
  });

  it('Deve cancelar o checkout e retornar ao carrinho', () => {
    cy.get('[data-test="cancel"]').click()
    cy.get('.title').should('contain', 'Your Cart')

  })
})