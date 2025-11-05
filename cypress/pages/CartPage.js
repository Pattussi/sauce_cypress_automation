// cypress/pages/CartPage.js
import { productSelectors } from '../support/selectors'

class CartPage {
  validarCarrinho() {
    cy.get('[data-test="title"]').should('contain.text', 'Your Cart')
  }

  clicarCheckout() {
    cy.get(productSelectors.checkoutButton).click()
  }
}

export default new CartPage()
