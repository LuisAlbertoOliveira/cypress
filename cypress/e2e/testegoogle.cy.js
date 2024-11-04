describe('Teste automatizado', () => {
    it('Visitando o google ', () => {
      cy.visit('https://www.google.com.br/')
     // cy.visit('https://example.cypress.io')

      cy.contains('Imagens').click()
    })
  })