# 🧪 SauceDemo Cypress Automation

Suite de testes automatizados E2E desenvolvida com **Cypress** para o site [**Sauce Demo**](https://www.saucedemo.com).  
O projeto garante a validação dos fluxos principais do e-commerce — **login**, **checkout** e **filtro de produtos** — seguindo boas práticas de QA e automação.

---

## 📌 Funcionalidades testadas

As histórias de usuário foram estruturadas com base nos **requisitos funcionais** da aplicação e organizadas por módulos.

### 🔐 US-001 - Login
- Login bem-sucedido com credenciais válidas.  
- Exibição de mensagem de erro para **usuário bloqueado**.  
- Validação dos **campos obrigatórios**.  
- Mensagem para credenciais inválidas.  
- Logout encerrando a sessão corretamente.  
- Fechamento do alerta de erro ao clicar no botão “X”.

---

### 🛒 US-002 - Fluxo completo de compra
- Adicionar produtos ao carrinho.  
- Preencher formulário de checkout.  
- Finalizar compra com sucesso.  
- Exibir mensagem de confirmação do pedido.

---

### 🧾 US-003 - Cadastro no Checkout
- Campos obrigatórios: **Nome**, **Sobrenome** e **CEP (Zip Code)**.  
- Validação de erros para campos vazios individualmente.  
- Cancelar checkout e retornar ao carrinho.

---

### 🧭 US-004 - Filtro e Ordenação de Produtos
- Ordenação por **preço** (High to Low / Low to High).  
- Ordenação **alfabética** (A-Z / Z-A).  
- Verificação da ordem padrão ao recarregar a página.

---

## 🧰 Tecnologias utilizadas

- **Node.js**  
- **Cypress 14.3.3**  
- **Mochawesome** (relatórios JSON/HTML)  
- **Mochawesome Merge + Generator** (merge e geração final de relatórios)  
- **GitHub Actions** (CI/CD automatizado)

---

## 🚀 Como executar os testes localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Pattussi/sauce_cypress_automation.git
   cd sauce_cypress_automation
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute os testes localmente:
   - **Modo interativo**:
     ```bash
     npx cypress open
     ```
   - **Modo headless (linha de comando)**:
     ```bash
     npm run test
     ```
   - **Execução completa (testes + relatório HTML):**
     ```bash
     npm run test:full
     ```

---

## 📊 Relatórios de teste (Mochawesome)

Após a execução do comando `npm run test:full`, os relatórios são gerados automaticamente em:

```
cypress/reports/html/mochawesome.html
```

📁 Caminho completo (Windows):
```
C:\Users\<seu_usuario>\Desktop\sauce_cypress_automation\cypress\reports\html\mochawesome.html
```

Abra o arquivo `.html` no navegador para visualizar o relatório final com os resultados dos testes.

---

## ⚙️ Integração CI/CD (GitHub Actions)

O workflow automatiza:
- Execução dos testes Cypress em ambiente **headless** (Chrome).  
- Merge dos relatórios JSON.  
- Geração e upload do relatório HTML e vídeos como artefatos.

📄 Arquivo: `.github/workflows/cypress.yml`

---

## 📂 Estrutura de pastas

```bash
sauce_cypress_automation/
│
├── cypress/
│   ├── e2e/                   # Casos de teste (specs)
│   │   ├── login.cy.js
│   │   ├── filtro_produto.cy.js
│   │   ├── cadastro_check_out.cy.js
│   │   └── e2e-saucelabs.cy.js
│   ├── fixtures/              # Dados de teste
│   └── support/               # Comandos customizados e hooks
│
├── scripts/
│   └── generate-report.js     # Script de geração do relatório Mochawesome
│
├── cypress.config.js          # Configuração Cypress
├── package.json
└── README.md
```

---

## 🔮 Melhorias futuras

- Testes para **remoção de produtos do carrinho**.  
- **Validação visual** com Cypress Studio.  
- Adicionar **testes de performance e usabilidade**.  
- Publicar o relatório Mochawesome como **página estática (GitHub Pages)**.

---

## ✨ Sobre o autor

Sou **Leonardo Pattussi**, profissional em transição para **Qualidade de Software (QA)**.  
Após 12 anos na área comercial, concluí o **Bootcamp QA da TripleTen**, aplicando minha experiência analítica e de processos na garantia de qualidade de produtos digitais.

📫 Contato: [pattussi@hotmail.com](mailto:pattussi@hotmail.com)  
🔗 [LinkedIn](https://linkedin.com/in/leonardo-pattussi)
