/// <reference types="cypress"/>


describe('US-001-Funcionalidade: Página de login', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve realizar login com sucesso', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')

    });

    it('Deve exibir mensagem para usuário bloqueado', () => {
        cy.login("locked_out_user", "secret_sauce")
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    });

    it('Deve validar campo "usuário" obrigatório', () => {
        cy.login('', 'secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')

    });

    it('Deve validar campo "senha" obrigatório', () => {
        cy.login('standard_user', '')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required')

    });

     it('Deve realizar o logout com sucesso', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        cy.get('[data-test="login-button"]').should('contain', 'Login')

    });

    it('Deve validar login com credenciais inválidas', () => {
    cy.login('standard_user', 'senha_errada')
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match')
  })

    it('Deve fechar o alerta de erro ao clicar no botão de fechar', () => {
  cy.login('', '')
  cy.get('.error-button').click()
  cy.get('[data-test="error"]').should('not.exist')
})

})