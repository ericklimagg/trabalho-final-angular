# Trabalho Prático - Aplicação com Angular

Este repositório contém o código-fonte da parte prática do trabalho da disciplina de Engenharia de Software. O objetivo é explorar e analisar os principais tópicos relacionados ao desenvolvimento front-end com frameworks modernos, com foco especial em Angular.

A aplicação consiste em uma Single-Page Application (SPA) com duas páginas, demonstrando conceitos fundamentais como componentização, roteamento, consumo de APIs externas e testes unitários.

---

## 🎯 Conceitos Abordados e Requisitos Cumpridos

Este projeto foi desenvolvido para atender aos seguintes requisitos práticos e teóricos:

- **✅ Aplicação com Duas Páginas:**
  - Páginas: **Home** e **Sobre**, com navegação via `AppRoutingModule`, demonstrando o funcionamento de uma SPA.

- **✅ Arquitetura baseada em Componentes:**
  - Estrutura modular com três componentes principais:
    - `AppComponent` (componente raiz/layout)
    - `HomeComponent`
    - `SobreComponent`

- **✅ Consumo de API Externa com Módulo HTTP:**
  - O `HomeComponent` realiza uma requisição `GET` para a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/), exibindo dados dinâmicos.

- **✅ Introdução aos Testes com Karma e Jasmine:**
  - Arquivo de teste: `home.component.spec.ts`
  - Teste básico que valida a criação do componente (`expect(component).toBeTruthy()`), utilizando o ambiente de teste configurado com `TestBed`.

---

## 🛠️ Tecnologias Utilizadas

- [Angular](https://angular.io/) (v20.x)
- [TypeScript](https://www.typescriptlang.org/)
- HTML5 & CSS3
- Node.js (Ambiente de execução)
- Angular CLI (Ferramenta de linha de comando)
- Karma & Jasmine (Frameworks de teste)

---

## 📂 Estrutura do Projeto

```
trabalho-final-angular/
├── src/
│   ├── app/
│   │   ├── pages/                 
│   │   │   ├── home/              
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.css
│   │   │   │   └── home.component.spec.ts
│   │   │   └── sobre/             
│   │   │       ├── sobre.component.ts
│   │   │       ├── sobre.component.html
│   │   │       └── sobre.component.css
│   │   ├── app.component.ts       
│   │   ├── app.component.html     
│   │   ├── app-routing.module.ts  
│   │   └── app.module.ts          
│   ├── assets/                    
│   └── ...
├── angular.json                   
└── package.json                   
```

---

## 🚀 Como Executar o Projeto

Estas são as instruções para configurar e rodar o projeto em um ambiente de desenvolvimento local.

### ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Angular CLI instalado globalmente:

```
npm install -g @angular/cli
```

---

### ✅ Instalação

1. Clone este repositório:

```
git clone <url-do-seu-repositorio>
```

2. Navegue até a pasta do projeto:

```
cd trabalho-final-angular
```

3. Instale as dependências:

```
npm install
```

---

### ✅ Executando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```
ng serve --open
```

A aplicação abrirá automaticamente no navegador em:

```
http://localhost:4200/
```

---

### ✅ Executando Testes Unitários

Para rodar os testes com Karma:

```
ng test
```

---

## 👨‍💻 Autores

- Erick Lima – RA: 244950262  
- André Roberto – RA: 240509842  
- Felipe Fernandes – RA: 242062022  
- Leonardo Tomaz – RA: 240509852
