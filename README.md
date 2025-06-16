Trabalho Prático - Aplicação com Angular
Este repositório contém o código-fonte da parte prática do trabalho da disciplina de Engenharia de Software. O objetivo é explorar e analisar os principais tópicos relacionados ao desenvolvimento front-end com frameworks modernos, com foco especial em Angular.

A aplicação consiste em uma Single-Page Application (SPA) com duas páginas, demonstrando conceitos fundamentais como componentização, roteamento, chamadas HTTP e testes unitários.

🎯 Conceitos Abordados e Requisitos Cumpridos
Este projeto foi desenvolvido para atender aos seguintes requisitos práticos e teóricos:

✅ Aplicação com Duas Páginas:

Foram criadas as páginas "Home" e "Sobre", com navegação configurada através do AppRoutingModule, demonstrando o funcionamento de uma SPA.
✅ Arquitetura baseada em Componentes:

A aplicação é modularizada em três componentes principais: AppComponent (componente raiz/layout), HomeComponent e SobreComponent, cada um com sua própria lógica, template e estilo, ilustrando o pilar fundamental do Angular.
✅ Consumo de API Externa com Módulo HTTP:

O HomeComponent utiliza o HttpClientModule para fazer uma requisição GET a uma API pública (JSONPlaceholder). Isso demonstra a capacidade do Angular de se comunicar com serviços externos para buscar e exibir dados dinâmicos.
✅ Introdução aos Testes com Karma e Jasmine:

O arquivo home.component.spec.ts apresenta a estrutura básica de um teste unitário. Ele demonstra como configurar um ambiente de teste (TestBed), criar uma instância do componente e executar um teste simples (it) que verifica se o componente foi criado com sucesso (expect(component).toBeTruthy()).
🛠️ Tecnologias Utilizadas
Angular (v20.x)
TypeScript
HTML5 & CSS3
Node.js (Ambiente de execução)
Angular CLI (Ferramenta de linha de comando)
Karma & Jasmine (Frameworks de teste)
📂 Estrutura do Projeto
A estrutura de arquivos segue o padrão gerado pelo Angular CLI, com algumas pastas e arquivos chave:

trabalho-final-angular/
├── src/
│   ├── app/
│   │   ├── pages/                 # Pasta para os componentes de página
│   │   │   ├── home/              # Componente da página inicial
│   │   │   └── sobre/             # Componente da página "Sobre"
│   │   ├── app.component.ts       # Componente raiz da aplicação (layout)
│   │   ├── app.component.html     # Template do layout principal com o menu
│   │   ├── app-routing.module.ts  # Configuração das rotas de navegação
│   │   └── app.module.ts          # Módulo principal que une a aplicação
│   ├── assets/                    # Para arquivos estáticos como imagens
│   └── ...
├── angular.json                   # Arquivo de configuração do Angular CLI
└── package.json                   # Dependências e scripts do projeto
🚀 Como Executar o Projeto
Estas são as instruções para configurar e rodar o projeto em um ambiente de desenvolvimento local.

Pré-requisitos
Node.js (versão LTS recomendada)
Angular CLI instalado globalmente (npm install -g @angular/cli)
Instalação
Clone este repositório:
Bash

git clone <url-do-seu-repositorio>
Navegue até a pasta do projeto:
Bash

cd trabalho-final-angular
Instale as dependências do Node.js:
Bash

npm install
Servidor de Desenvolvimento
Execute o comando abaixo para iniciar o servidor de desenvolvimento.

Bash

ng serve --open
A aplicação será compilada e aberta automaticamente no seu navegador em http://localhost:4200/.

Executando Testes Unitários
Para executar os testes unitários via Karma, utilize o seguinte comando:

Bash

ng test
👨‍💻 Autores
Erick Lima (RA: 244950262), André Roberto (RA: 240509842), Felipe Fernandes (RA: 242062022) e Leonardo Tomaz (RA: 240509852).

Data: 16 de junho de 2025
