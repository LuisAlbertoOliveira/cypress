describe('Teste automatizado', () => {
    it('Visitando a Amazon ', () => {
      cy.visit('https://www.amazon.com.br/')
     
      cy.contains('Contas e Listas').click()

      cy.url().should('include','/ap/signin')

      // Para pegar o nome da classe, deve-se inspecionar a página que se deseja testar e verificar a classe do elemento. O comando cy.get trabalha com o nome da classe.
    cy.get('.a-form-label').type('oliv.luis@gmail.com')

    // Foi difícil achar o nome da classe desse botão tive que fazer vários testes. 
    cy.get('#continue.a-button-input').click()

    })
  })


