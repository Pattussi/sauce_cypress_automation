/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage'

describe('US-001 - Funcionalidade: Página de Login', () => {
  
  beforeEach(() => {
    LoginPage.acessarSite()
  })

  it('Deve realizar login com sucesso', () => {
    cy.log(' Tentando login com credenciais válidas')
    LoginPage.fazerLogin('standard_user', 'secret_sauce')
    LoginPage.validarLoginSucesso()
  })

  it('Deve exibir mensagem para usuário bloqueado', () => {
    cy.log('Tentando login com usuário bloqueado')
    cy.login('locked_out_user', 'secret_sauce')
    cy.wait(1000) // pequena espera para renderização
    LoginPage.validarMensagemErro('Epic sadface: Sorry, this user has been locked out.')
  })

  it('Deve validar campo usuário obrigatório', () => {
    LoginPage.fazerLogin('', 'secret_sauce')
    LoginPage.validarMensagemErro('Epic sadface: Username is required')
  })

  it('Deve validar campo senha obrigatório', () => {
    LoginPage.fazerLogin('standard_user', '')
    LoginPage.validarMensagemErro('Epic sadface: Password is required')
  })

  it('Deve realizar logout com sucesso', () => {
    LoginPage.fazerLogin('standard_user', 'secret_sauce')
    cy.logout()
    cy.get('[data-test="login-button"]').should('have.value', 'Login')
  })

  it('Deve exibir mensagem para credenciais inválidas', () => {
    LoginPage.fazerLogin('standard_user', 'senha_errada')
    LoginPage.validarMensagemErro('Epic sadface: Username and password do not match')
  })

  it('Deve fechar alerta de erro ao clicar no botão X', () => {
    LoginPage.fazerLogin('', '')
    cy.get('.error-button').click()
    cy.get('[data-test="error"]').should('not.exist')
  })
})
