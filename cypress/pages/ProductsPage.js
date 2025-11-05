class ProductsPage {
  adicionarProdutoAoCarrinho(nomeProduto = 'Sauce Labs Backpack') {
    cy.contains('.inventory_item_name', nomeProduto)
      .parents('.inventory_item')
      .find('button')
      .click()
  }

  irParaCarrinho() {
    cy.get('.shopping_cart_link').click()
  }

  selecionarFiltro(tipoFiltro) {
    cy.get('[data-test="product-sort-container"]').select(tipoFiltro)
  }

  validarOrdemEsperada(ordemEsperada) {
    cy.get('.inventory_item_name').then((itens) => {
      const textos = [...itens].map((i) => i.innerText)
      expect(textos).to.deep.equal(ordemEsperada)
    })
  }
}

export default new ProductsPage()
