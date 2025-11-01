/// <reference types="cypress"/>

describe('US-004 - Ordenação dos produtos', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Colocar os produtos em ordem decrescente de preço (High to Low)', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="product-sort-container"]').select('hilo')

    cy.get('#inventory_container .inventory_item_price')
      .then(($prices) => {
        const prices = [...$prices].map(el =>
          parseFloat(el.innerText.replace('$', '').trim())
        )

        const sortedPrices = [...prices].sort((a, b) => b - a)
        expect(prices, 'Produtos devem estar em ordem decrescente de preço')
          .to.deep.equal(sortedPrices)
      })
  })

  it('Colocar os produtos em ordem crescente de preço (Low to High)', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="product-sort-container"]').select('lohi')

    cy.get('#inventory_container .inventory_item_price')
      .then(($prices) => {
        const prices = [...$prices].map(el =>
          parseFloat(el.innerText.replace('$', '').trim())
        )

        const sortedPrices = [...prices].sort((a, b) => a - b)
        expect(prices, 'Produtos devem estar em ordem crescente de preço')
          .to.deep.equal(sortedPrices)
      })
  })

  it('Colocar os produtos em ordem alfabética de A-Z', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="product-sort-container"]').select('az')

    cy.get('.inventory_item_name')
      .then(($names) => {
        const names = [...$names].map(el => el.innerText.trim())

        const sortedNames = [...names].sort((a, b) => a.localeCompare(b))
        expect(names, 'Produtos devem estar em ordem alfabética de A-Z')
          .to.deep.equal(sortedNames)
      })
  })

  it('Colocar os produtos em ordem alfabética de Z-A', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="product-sort-container"]').select('za')

    cy.get('.inventory_item_name')
      .then(($names) => {
        const names = [...$names].map(el => el.innerText.trim())

        const sortedNames = [...names].sort((a, b) => b.localeCompare(a))
        expect(names, 'Produtos devem estar em ordem alfabética de Z-A')
          .to.deep.equal(sortedNames)
      })
  })
  it('Deve manter ordem padrão ao carregar a página', () => {
  cy.login('standard_user', 'secret_sauce')
  cy.get('.inventory_item_name').should('have.length.greaterThan', 0)
})
})
