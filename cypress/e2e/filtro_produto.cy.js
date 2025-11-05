/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'

describe('US-004 - Funcionalidade: Ordenação de produtos', () => {

  beforeEach(() => {
    LoginPage.acessarSite()
    LoginPage.fazerLogin('standard_user', 'secret_sauce')
  })

  it('Deve ordenar produtos por preço decrescente (High to Low)', () => {
    ProductsPage.selecionarFiltro('hilo')
    cy.get('.inventory_item_price').then(prices => {
      const valores = [...prices].map(el => parseFloat(el.innerText.replace('$', '')))
      const ordenado = [...valores].sort((a, b) => b - a)
      expect(valores).to.deep.equal(ordenado)
    })
  })

  it('Deve ordenar produtos por preço crescente (Low to High)', () => {
    ProductsPage.selecionarFiltro('lohi')
    cy.get('.inventory_item_price').then(prices => {
      const valores = [...prices].map(el => parseFloat(el.innerText.replace('$', '')))
      const ordenado = [...valores].sort((a, b) => a - b)
      expect(valores).to.deep.equal(ordenado)
    })
  })

  it('Deve ordenar produtos alfabeticamente (A-Z)', () => {
    ProductsPage.selecionarFiltro('az')
    cy.get('.inventory_item_name').then(items => {
      const nomes = [...items].map(el => el.innerText)
      const ordenado = [...nomes].sort()
      expect(nomes).to.deep.equal(ordenado)
    })
  })

  it('Deve ordenar produtos alfabeticamente (Z-A)', () => {
    ProductsPage.selecionarFiltro('za')
    cy.get('.inventory_item_name').then(items => {
      const nomes = [...items].map(el => el.innerText)
      const ordenado = [...nomes].sort().reverse()
      expect(nomes).to.deep.equal(ordenado)
    })
  })

it('Deve manter ordem padrão ao carregar a página', () => {
  cy.url().should('include', '/inventory.html')
  ProductsPage.validarOrdemEsperada([
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Onesie',
    'Test.allTheThings() T-Shirt (Red)'
  ])
})
})
