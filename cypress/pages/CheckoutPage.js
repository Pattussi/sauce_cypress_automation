class CheckoutPage {
  preencherCadastro(nome, sobrenome, cep) {
    if (nome) cy.get('[data-test="firstName"]').clear().type(nome)
    if (sobrenome) cy.get('[data-test="lastName"]').clear().type(sobrenome)
    if (cep) cy.get('[data-test="postalCode"]').clear().type(cep)
    cy.get('[data-test="continue"]').should('be.visible').click()
  }

  finalizarCompra() {
    cy.get('[data-test="finish"]').should('be.visible').click()
  }

  validarMensagemErro(mensagemEsperada) {
    cy.get('[data-test="error"]', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', mensagemEsperada)
  }

  cancelarCheckout() {
    cy.get('[data-test="cancel"]').should('be.visible').click()
    cy.url().should('include', '/cart.html')
  }
}

export default new CheckoutPage()
