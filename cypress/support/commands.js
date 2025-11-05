Cypress.Commands.add('login', (usuario, senha) => {
  cy.log(`🔐 Fazendo login com usuário: ${usuario}`);
  if (usuario) cy.get('[data-test="username"]').type(usuario);
  if (senha) cy.get('[data-test="password"]').type(senha);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('preencherCadastro', (nome, sobrenome, zip_code) => {
  cy.log('🧾 Preenchendo dados de checkout');
  if (nome) cy.get('[data-test="firstName"]').type(nome);
  if (sobrenome) cy.get('[data-test="lastName"]').type(sobrenome);
  if (zip_code) cy.get('[data-test="postalCode"]').type(zip_code);
  cy.get('[data-test="continue"]').click();
});

Cypress.Commands.add('logout', () => {
  cy.log('🚪 Efetuando logout');
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
});
Cypress.Commands.add('adicionarProdutoAoCarrinho', (produto) => {
  cy.log(`🛒 Adicionando produto ao carrinho: ${produto}`);
  cy.contains('.inventory_item', produto)
    .find('button')
    .click();
});

Cypress.Commands.add('removerProdutoDoCarrinho', (produto) => {
  cy.log(`🛒 Removendo produto do carrinho: ${produto}`);
  cy.contains('.inventory_item', produto)
    .find('button')
    .click();
}); 