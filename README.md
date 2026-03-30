<div align="center">

# 🍕 Pizzaria Italiana

### *Tradição italiana, tecnologia moderna*

![Status](https://img.shields.io/badge/status-online-brightgreen)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

**[🌐 Ver o site ao vivo](https://pizzaria-italiana.vercel.app)**

</div>

---

## 📖 Sobre o Projeto

A **Pizzaria Italiana** é um site completo para uma pizzaria premium, desenvolvido como projeto de portfólio. O projeto combina um design sofisticado com funcionalidades reais como autenticação por SMS, carrinho de compras e integração com WhatsApp.

> 🤖 **Nota:** Todas as imagens utilizadas neste projeto foram geradas por Inteligência Artificial.

---

## ✨ Funcionalidades

- 🔐 **Fluxo de Login por SMS** via Twilio Verify — o fluxo completo está ativo (no site de demonstração, utilize o código padrão `123456` para testar sem custos de API).
- 👤 **Perfil do usuário** com nome, telefone e endereço salvos localmente
- 🛒 **Carrinho de compras** completo com controle de quantidade
- 📱 **Finalização via WhatsApp** — o pedido vai direto para o restaurante
- 🎬 **Vídeo em loop** como seção de experiência
- 📜 **Cardápio interativo** com abas entre pizzas salgadas e doces
- 💫 **Animações de scroll** com Intersection Observer
- 📱 **Totalmente responsivo** para celular e tablet

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estrutura do site |
| CSS3 | Estilização modular (4 arquivos) |
| JavaScript Vanilla | Lógica e interatividade |
| Twilio Verify | Autenticação por SMS |
| Vercel Functions | API backend segura |
| Vercel | Hospedagem e deploy automático |
| GitHub | Controle de versão |

---

## 📁 Estrutura do Projeto

| Pasta / Arquivo | Descrição |
| :--- | :--- |
| 📁 `api/` | **Backend (Serverless):** Contém as funções Node que rodam na Vercel |
| &nbsp;&nbsp;&nbsp;&nbsp;📄 `send-code.js` | Dispara a requisição de SMS para a API da Twilio |
| &nbsp;&nbsp;&nbsp;&nbsp;📄 `verify-code.js` | Valida se o código digitado pelo usuário está correto |
| 📁 `css/` | **Estilização Modular:** CSS dividido por responsabilidade |
| &nbsp;&nbsp;&nbsp;&nbsp;📄 `base.css` | Reset de estilos, variáveis de cor e fontes globais |
| &nbsp;&nbsp;&nbsp;&nbsp;📄 `navbar.css` | Estilos exclusivos do menu de navegação e seção Hero |
| &nbsp;&nbsp;&nbsp;&nbsp;📄 `secoes.css` | Estilização do cardápio, sobre nós, rodapé e seções gerais |
| &nbsp;&nbsp;&nbsp;&nbsp;📄 `modais.css` | Estilos visuais das janelas pop-up (carrinho e login) |
| &nbsp;&nbsp;&nbsp;&nbsp;📄 `responsivo.css` | Media queries para deixar o site perfeito em celulares |
| 📁 `imagens/` | Banco de imagens do site (todas geradas por IA) |
| 📁 `videos/` | Mídias em vídeo usadas no fundo das seções |
| 📄 `index.html` | Estrutura principal e esqueleto de todas as seções do site |
| 📄 `script.js` | Lógica do Frontend (Carrinho, Máscaras, Autenticação simulada) |
| 📄 `package.json` | Gerenciador de dependências e scripts do projeto |

---

## 🚀 Como Rodar Localmente

Siga o passo a passo abaixo para clonar o projeto e executá-lo na sua máquina:

### 1️⃣ Clonar e Instalar
No seu terminal, execute os seguintes comandos:

```bash
# Clone o repositório
git clone [https://github.com/fernandavaleriano/pizzaria-italiana.git](https://github.com/fernandavaleriano/pizzaria-italiana.git)

# Entre na pasta do projeto
cd pizzaria-italiana

# Instale as dependências do projeto
npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env com:
TWILIO_ACCOUNT_SID=seu_account_sid
TWILIO_AUTH_TOKEN=seu_auth_token
TWILIO_SERVICE_SID=seu_service_sid

# Rode localmente com Vercel CLI
npx vercel dev
\```

---

## 🔑 Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `TWILIO_ACCOUNT_SID` | SID da conta Twilio |
| `TWILIO_AUTH_TOKEN` | Token de autenticação Twilio |
| `TWILIO_SERVICE_SID` | SID do serviço Verify |

---

---

## 💼 Quer um site exclusivo para o seu negócio?

### 🚀 Transforme sua presença digital


Gostou deste projeto? Eu posso criar um site profissional, moderno e sob medida para sua empresa — com design estratégico, funcionalidades reais e foco total em conversão de clientes.


---

### 🛠️ O que posso desenvolver para você

- 🍕 Sites para Restaurantes e Delivery 
- 🏪 Landing Pages de Alta Conversão  
- 🛒 Lojas Virtuais (E-commerce) 
- 💼 Portfólios Profissionais 
- 📱  Design 100% Responsivo

---

## 📩 Contato

<div align="center">
 
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/fernandavaleriano)

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5527988796796?text=Olá%20Fernanda!%20Vim%20pelo%20seu%20portfólio%20e%20tenho%20interesse%20nos%20seus%20serviços.)

[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:fernandaramosvaleriano@gmail.com)

<a href="https://instagram.com/fernanda_valeriano.dev/" target="_blank">
  <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
</a>


<div align="center">