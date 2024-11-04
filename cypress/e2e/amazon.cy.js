describe('Teste automatizado', () => {
    it('Visitando o google ', () => {
      cy.visit('https://www.amazon.com.br/')
     // cy.visit('https://example.cypress.io')

      cy.contains('Contas e Listas').click()

      cy.url().should('include','/ap/signin')

      // Get an input, type into it
    cy.get('.a-form-label').type('oliv.luis@gmail.com')

    cy.get('#continue.a-button-input').click()

    })
  })


