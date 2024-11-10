Automação de Testes - Projeto Web
Este projeto é uma automação de testes para um aplicativo web usando Cypress e Mochawesome. Ele inclui testes de UI, além de gerar relatórios de execução de testes com Mochawesome.

Tecnologias Usadas
Cypress: Framework de testes end-to-end (E2E).
Mochawesome Reporter: Gerador de relatórios em HTML e JSON para Cypress.

Pré-requisitos
Antes de começar, é necessário ter instalado no seu ambiente:

Node.js: Para executar os testes com Cypress.
NPM ou Yarn: Para gerenciar dependências.
Instalação
Clone o repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:
Usando npm:

bash
Copiar código
npm install
Ou, usando yarn:

bash
Copiar código
yarn install
Configuração do Cypress
Os testes Cypress estão configurados para rodar com o Mochawesome e Allure como reportadores. O arquivo de configuração cypress.config.js já está configurado para rodar com esses plugins.

Base URL: Está configurada para https://automationexercise.com, mas você pode ajustar conforme a necessidade.
Rodando os Testes Localmente
Para rodar os testes localmente com Cypress, execute o seguinte comando:

bash
Copiar código
npx cypress open
Ou, para rodar os testes de forma não interativa (em modo headless):

bash
Copiar código
npx cypress run
Os testes irão gerar relatórios em cypress/reports no formato JSON e HTML.

Relatórios
Após a execução dos testes, os relatórios serão gerados nos seguintes formatos:

Mochawesome Report: Relatórios em HTML e JSON.
Visualizando o Relatório Mochawesome
Os relatórios do Mochawesome são salvos na pasta cypress/reports e podem ser visualizados abrindo o arquivo mochawesome.html no seu navegador.



Executar Testes no GitHub Actions: O arquivo cypress.yml está configurado para rodar os testes em cada push ou pull request para o repositório.
Relatórios no GitHub Actions: Após a execução, o GitHub Actions fará o upload dos relatórios como artefatos, permitindo que você baixe e visualize os relatórios de teste.
Exemplo de Workflow no GitHub Actions:
yml

Contribuindo
Se você deseja contribuir para este projeto, por favor, siga as etapas abaixo:

Fork este repositório.
Crie uma branch para suas mudanças (git checkout -b minha-feature).
Faça as mudanças necessárias.
Commit suas mudanças (git commit -am 'Adicionando nova feature').
Push para a branch (git push origin minha-feature).
Abra um Pull Request para revisão.
