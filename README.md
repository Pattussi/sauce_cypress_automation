# Testes automatizados SauceDemo - sauce_cypress 🧪

Suite de testes automatizados para o site **Sauce Demo** (https://www.saucedemo.com).  
O objetivo é validar os fluxos principais da aplicação de e-commerce, garantindo que o login, o filtro de produtos e o checkout estejam funcionando conforme o esperado.

---

## 📌 Funcionalidades testadas

As histórias de usuário foram criadas com base em **requisitos funcionais** da aplicação e estruturadas de acordo com boas práticas de QA.

### 🔐 US-001 - Login
- O usuário deve conseguir realizar login com sucesso utilizando credenciais válidas.
- Mensagem apropriada deve ser exibida para **usuário bloqueado**.
- Validação de **campos obrigatórios**.
- Login deve falhar para credenciais inválidas.
- Logout deve encerrar a sessão corretamente.

**Cenários (exemplos):**
- Login válido.
- Login com usuário bloqueado.
- Login com campos vazios.
- Logout bem-sucedido.

---

### 🛒 US-002 - Fluxo completo de compra
- O usuário deve conseguir adicionar produtos ao carrinho.
- Deve preencher as informações de checkout.
- Deve concluir uma compra com sucesso.
- Sistema deve exibir a mensagem de confirmação do pedido.

**Cenário principal:**
- Fluxo “happy path” da compra do início ao fim.

---

### 🧾 US-003 - Cadastro e Checkout
- Campos obrigatórios: **Nome**, **Sobrenome** e **CEP (Zip Code)**.
- O sistema deve exibir erro ao deixar campos obrigatórios vazios.
- Validação individual de cada campo ausente.

**Cenários (exemplos):**
- Cadastro completo.
- Tentativa de cadastro sem nome.
- Tentativa de cadastro sem sobrenome.
- Tentativa de cadastro sem CEP.

---

### 🧭 US-004 - Filtro e Ordenação de Produtos
- O usuário deve conseguir ordenar produtos por:
  - Preço (High to Low / Low to High)
  - Ordem alfabética (A-Z / Z-A)
- O sistema deve atualizar dinamicamente a lista conforme a seleção.

**Cenários (exemplos):**
- Ordenar por menor preço.
- Ordenar por maior preço.
- Ordenar de A-Z.
- Ordenar de Z-A.

---

## 🧰 Tecnologias utilizadas
- **Node.js / JavaScript**  
- **Cypress** (framework de testes E2E)

---

## 🚀 Como rodar os testes localmente

1. Clone o repositório  
   ```bash
   git clone https://github.com/Pattussi/sauce_cypress.git
   cd sauce_cypress
   ```

2. Instale as dependências  
   ```bash
   npm install
   ```

3. Verifique a URL base configurada no cypress.config.js:  
   ```bash
   baseUrl: "https://www.saucedemo.com"
   ```

4. Execute os testes:  
   - Modo interativo (com interface do Cypress):  
     ```bash
     npx cypress open
     ```

   - Modo headless (para CI/CD):  
     ```bash
     npx cypress run
     ```

---

## 📂 Estrutura de pastas

```bash
sauce_cypress/
│
├── cypress/
│   ├── e2e/                # casos de teste (specs)
│   │   ├── login.cy.js
│   │   ├── filtro_produto.cy.js
│   │   ├── cadastro_check_out.cy.js
│   │   └── e2e-saucelabs.cy.js
│   ├── fixtures/           # dados de teste
│   └── support/            # comandos customizados e hooks
│
├── cypress.config.js       # configuração Cypress
├── package.json
└── README.md
```

---

## 🤝 Como contribuir

1. Faça um fork do projeto

2. Crie uma branch:  
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

3. Commit suas alterações  

4. Push para o repositório remoto  

5. Abra um Pull Request 🚀

---

## 🔮 Melhorias futuras

- Adicionar testes de remover produtos do carrinho.  
- Implementar validação visual com Cypress Studio.  
- Integração com pipeline de CI/CD (GitHub Actions).  

---

## ✨ Sobre Mim
Sou **Leonardo Pattussi**, profissional em transição para a área de **Qualidade de Software (QA)**.  
Após mais de 12 anos atuando como gerente comercial, concluí o **Bootcamp QA da TripleTen**, aplicando agora minha experiência analítica e de processos para garantir a entrega de produtos digitais de qualidade.  

📫 Contato: [pattussi@hotmail.com](mailto:pattussi@hotmail.com) | [LinkedIn](https://linkedin.com/in/leonardo-pattussi)
