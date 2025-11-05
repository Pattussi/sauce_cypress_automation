class LoginPage {
  acessarSite() {
    cy.visit('/')
  }

  fazerLogin(usuario, senha) {
    // Preenche apenas se o valor for informado (para testes negativos)
    if (usuario) cy.get('[data-test="username"]').clear().type(usuario)
    if (senha) cy.get('[data-test="password"]').clear().type(senha)

    cy.get('[data-test="login-button"]')
      .should('be.visible')
      .click()
  }

  validarLoginSucesso() {
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]', { timeout: 10000 })
      .should('contain.text', 'Products')
  }

  validarMensagemErro(mensagemEsperada) {
    // Espera explícita para evitar timing issues
    cy.get('[data-test="error"]', { timeout: 15000 })
      .should('exist')
      .and('be.visible')
      .and('contain.text', mensagemEsperada)
  }

  realizarLogout() {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link')
      .should('be.visible')
      .click()
    cy.url().should('include', '/')
  }
}

export default new LoginPage()
