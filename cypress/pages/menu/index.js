class Menu {
    menuProdutos() {
    cy.contains(`Products`).click()

    }
    menuLoginCadastro() {
        cy.contains('Signup').click()

    }
    menuContato() {
        cy.contains(`Contact us`).click()

    }
}

export default new Menu()