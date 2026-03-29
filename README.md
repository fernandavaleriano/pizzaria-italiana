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

- 🔐 **Login por SMS real** via Twilio Verify — o usuário recebe um código no celular
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

\```
pizzaria-italiana/
├── api/
│   ├── send-code.js       # Envia SMS via Twilio
│   └── verify-code.js     # Verifica o código SMS
├── css/
│   ├── base.css           # Reset e estilos globais
│   ├── navbar.css         # Navegação e hero
│   ├── secoes.css         # Seções do site
│   ├── modais.css         # Modais e alertas
│   └── responsivo.css     # Media queries
├── imagens/               # Imagens geradas por IA
├── videos/                # Vídeo de fundo
├── index.html             # Página principal
├── script.js              # Lógica JavaScript
└── package.json           # Dependências Node.js
\```

---

## 🚀 Como Rodar Localmente

\```bash
# Clone o repositório
git clone https://github.com/fernandavaleriano/pizzaria-italiana.git

# Entre na pasta
cd pizzaria-italiana

# Instale as dependências
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

## 💼 Quer um site assim para o seu negócio?

> ### 🚀 Transforme sua presença digital!
>
> Gostou deste projeto? Posso criar um site profissional e moderno para o seu negócio — com design exclusivo, funcionalidades reais e entrega rápida.
>
> **O que posso desenvolver para você:**
> - 🍕 Sites para restaurantes e delivery
> - 🏪 Landing pages para negócios locais
> - 🛒 Lojas virtuais
> - 💼 Portfólios profissionais
> - 📱 Sites responsivos para mobile
>
> **Entre em contato e faça seu orçamento:**
>
> 📸 Instagram: [@fernanda_valeriano.dev](https://www.instagram.com/fernanda_valeriano.dev/)
> 📧 E-mail: fernandaramosvaleriano@gmail.com

---

## 👩‍💻 Desenvolvedora

<div align="center">

**Fernanda Valeriano**

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=white)](https://www.instagram.com/fernanda_valeriano.dev/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?logo=gmail&logoColor=white)](mailto:fernandaramosvaleriano@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?logo=github&logoColor=white)](https://github.com/fernandavaleriano)

*Desenvolvido com 🍕 e muito café*

</div>