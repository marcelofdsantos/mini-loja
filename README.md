# Mini-Loja: Implementação de UI em 4 Versões de Estilização

Este projeto é uma implementação de uma interface de usuário (UI) de mini-loja, desenvolvida com o objetivo de demonstrar e comparar quatro abordagens distintas de estilização em um ambiente React/Vite.

## 🎯 Objetivo da Tarefa

O objetivo principal foi implementar a mesma tela de listagem de produtos, incluindo componentes comuns como barra de navegação e cards de produto, utilizando quatro técnicas de estilização diferentes, respeitando um conjunto rigoroso de requisitos de design, interatividade e acessibilidade.

### Versões Implementadas

O projeto está estruturado para que cada versão de estilização resida em seu próprio diretório, garantindo que cada técnica seja utilizada de forma isolada:

1.  **`01-css-global`**: Estilização utilizando arquivos CSS globais.
2.  **`02-css-modules`**: Estilização utilizando CSS Modules para escopo local.
3.  **`03-tailwind`**: Estilização utilizando o framework utilitário Tailwind CSS.
4.  **`04-styled-components`**: Estilização utilizando a biblioteca CSS-in-JS `styled-components`.

### Requisitos de Componentes e Design

| Componente | Requisitos |
| :--- | :--- |
| **Navbar (Fixa)** | Logo, seletor de tema (claro/escuro com persistência) e badge do carrinho. |
| **Grid de Produtos** | Responsivo com breakpoints específicos: **≤480px**: 1 coluna; **481–768px**: 2 colunas; **769–1024px**: 3 colunas; **≥1025px**: 4 colunas. |
| **Card de Produto** | Imagem 1:1 (placeholder), título (2 linhas com ellipsis), preço, rating (★), tag (“Novo”/“Promo”), botão “Adicionar” com variantes (solid/outline/ghost). |
| **Dados** | Exibir 6 produtos (id, título, preço, rating, tag, imagem placeholder). Imagens com *lazy loading*. |

### Requisitos de Interação e Qualidade

| Categoria | Requisitos |
| :--- | :--- |
| **Estados/Interações** | `Hover` (elevação/sombra), `focus` visível, `disabled`, `loading` com *skeleton* (simulação de atraso). |
| **Dark Mode** | Aplicado a cores, sombras e bordas, com persistência de tema. |
| **Acessibilidade** | Navegação por teclado, atributos `aria-*` onde aplicável, contraste de cores ≥ 4.5:1. |
| **Animações** | Transições de 150–250ms (utilizando `transform`/`opacity`). |
| **Critérios Adicionais** | Breakpoints exatos, *focus ring* visível, *skeleton* sem *layout shift*, variantes de botão consistentes nos dois temas, organização clara de pastas e uso de *tokens* (cores, espaçamentos, raio, sombras). |

## 🚀 Estrutura do Projeto e Tecnologias

O projeto é um frontend moderno construído com **React** e **TypeScript**, utilizando o **Vite** como ferramenta de *build* e *bundler*.

### Tecnologias Principais

| Categoria | Tecnologia | Finalidade |
| :--- | :--- | :--- |
| **Framework** | React | Biblioteca JavaScript para construção de interfaces de usuário. |
| **Linguagem** | TypeScript | Superset de JavaScript que adiciona tipagem estática. |
| **Build Tool** | Vite | Ferramenta de desenvolvimento frontend rápida e otimizada. |
| **Estilização** | Tailwind CSS, styled-components, CSS Modules, CSS Global | Demonstração das quatro abordagens de estilização. |
| **UI Components** | Radix UI | Primitivas de componentes acessíveis (utilizadas como base para a UI). |
| **Roteamento** | Wouter | Biblioteca de roteamento leve e declarativa. |
| **Gerenciamento de Tema** | next-themes | Implementação de tema claro/escuro com persistência. |

### Estrutura de Diretórios

A estrutura do projeto é organizada para separar a lógica de apresentação (UI) das diferentes implementações de estilização:

```
mini-loja/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/  # Componentes de UI genéricos (Radix, shadcn/ui)
│   │   ├── contexts/    # Contextos globais (ThemeContext)
│   │   ├── data/        # Dados mockados (produtos, tokens)
│   │   ├── hooks/       # Hooks customizados
│   │   ├── pages/       # Páginas principais (Home, Store, NotFound)
│   │   └── versions/    # Implementações específicas da tarefa (01-css-global, etc.)
│   └── index.html
├── package.json         # Scripts e dependências
├── vite.config.ts       # Configuração do Vite (incluindo suporte a styled-components)
├── postcss.config.js    # Configuração do PostCSS para Tailwind
└── tailwind.config.js   # Configuração do Tailwind CSS
```

## 💻 Scripts Disponíveis

No diretório raiz do projeto, você pode executar:

| Comando | Descrição |
| :--- | :--- |
| `pnpm install` | Instala todas as dependências do projeto. |
| `pnpm dev` | Inicia o servidor de desenvolvimento local. |
| `pnpm build` | Compila o projeto para produção no diretório `dist`. |
| `pnpm preview` | Serve a versão de produção localmente para testes. |
