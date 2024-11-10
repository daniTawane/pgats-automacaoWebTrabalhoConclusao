///# <reference types="cypress" />
import login from '../pages/login';
import cadastro from '../pages/cadastro';
import menu from '../pages/menu';
import formulario from '../pages/formulario';
import lista from '../pages/lista';
//import { faker } from '@faker-js/faker' 

cadastro.preencherFormulario
login.acessoLogin

// hooks
// ações que executam antes de todos ou de cada teste before e beforeEach 
// ou depois de todos ou de cada teste after e afterEach
// outras nomenclaturas 

describe('Automation Exercise', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Test Case 1: Cadastrar um usuário', () => {
    cadastro.preencherFormulario()
    cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))
  });

  it('Test Case 2: Login User with correct email and password', () => {
    menu.menuLoginCadastro()
    login.acessoLogin('tester-1721346302730@mail.com' , '12345')
    cy.get('i.fa-user').parent().should('contain', 'Tester QA')

  });

  it('Test Case 3: Login User with incorrect email and password', () => {
    menu.menuLoginCadastro()
    login.acessoLogin('tester-1721346302730@mail.com' ,'54321')
    cy.get('p').should('contain', 'Your email or password is incorrect!')
  });

  it('Test Case 4: Logout User', () => {
    menu.menuLoginCadastro()
    login.acessoLogin('tester-1721346302730@mail.com' , '12345' )
  
    cy.get('i.fa-user').parent().should('contain', 'Tester QA')
    cy.contains('Logout').click()
    cy.url().should('contain', 'login')
    cy.contains("Login to your account").should("be.visible");

  });

  it('Test Case 5: Register User with existing email', () => {
    menu.menuLoginCadastro()
    cadastro.iniciarCadastro('Tester QA', 'tester-1721346302730@mail.com')
    cy.get(`.signup-form form p`)
      .should('be.visible')
      .and('contain', 'Email Address already exist!')
  });

  it('Test Case 6: Contact Us Form', () => {
    menu.menuContato()
    formulario.contatoFaleConosco()   
    cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    menu.menuProdutos()
    lista.listaProdutos()
    cy.get('.product-information > h2').should('be.visible')
    cy.get('.product-information p').should('be.visible').and('have.length', 4)
    cy.get('.product-information span span').should('be.visible')

  });

  it('Test Case 9: Search Product', () => {
    menu.menuProdutos()

    cy.url().should('contain', 'products')
    cy.get('.title').should('be.visible').and('contain', 'All Products')

    cy.get('input#search_product').type('Shirt')
    cy.get('button#submit_search').click()

    cy.get('.title').should('be.visible').and('contain', 'Searched Products')

    cy.get('.single-products')
      .should('be.visible')
      .and('have.length.at.least', 1)

  });

  it('Test Case 10: Verify Subscription in home page', () => {

    cy.get('input#susbscribe_email')
      .scrollIntoView()
      .type('tester-qa@mail.com')

    cy.get('button#subscribe').click()

    cy.contains('You have been successfully subscribed!').should('be.visible')

  });

  it('Test Case 15: Place Order: Register before Checkout', () => {
    cadastro.preencherFormulario()
    formulario.preencheCartao()
    cy.get('[data-qa="order-placed"]').should('be.visible')
    cy.get('[href *="delete"]').click()
    cy.get('b').should('contain', 'Account Deleted!')
    cy.get('[data-qa="continue-button"]').click()


  });
});