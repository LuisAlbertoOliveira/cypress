describe('Meu primeiro teste automatizado', () => {
    it('Visitando uma pagina ', () => {
      //cy.visit('https://www.google.com.br/')
      cy.visit('https://example.cypress.io')

      cy.contains('type').click() 
      //type é o que eu procuro na página. Se eu colocar hype(p.ex) o teste vai falhar pois não tem o link hype. O click() executa a ação de clicar nesse link encontrado.

      cy.url().should('include','/commands/actions')
      //o should possui 2 argumentos:include e a parte da url que voce deseja  procurar

      // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
    })
  })