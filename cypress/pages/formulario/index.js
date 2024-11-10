import { faker } from '@faker-js/faker' 
class Formulario {
    contatoFaleConosco() {
    cy.get(`.contact-form h2`)
      .should('be.visible')
      .and('have.text', 'Get In Touch')
    cy.get('[data-qa="name"]').type(`Tester`)
    cy.get('[data-qa="email"]').type(`tester-qa@mail.com`)
    cy.get('[data-qa="subject"]').type(`Test Automation`)
    cy.get('[data-qa="message"]').type(`Learning Test Automation`)

    cy.fixture('example.json').as('arquivo')
    cy.get('input[name="upload_file"]').selectFile('@arquivo')

    cy.get('[data-qa="submit-button"]').click()
    }
    preencheCartao() {
        cy.contains("Add to cart").click()
        cy.contains("View Cart").click()
        cy.get('.btn-default.check_out').should('be.visible')
        cy.get('.btn-default.check_out').click()
        cy.get('.heading').first().should('have.text', 'Address Details')
        cy.get('.heading').last().should('have.text', 'Review Your Order')
        cy.get('.form-control').type('378 98562-8781')
        cy.get('.btn-default.check_out').click()
        cy.get('[data-qa="name-on-card"]').type(faker.person.fullName())
        cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber())
        cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV())
        cy.get('[data-qa="expiry-month"]').type(12)
        cy.get('[data-qa="expiry-year"]').type(2035)
        cy.get('[data-qa="pay-button"]').click()

    }
}

export default new Formulario()