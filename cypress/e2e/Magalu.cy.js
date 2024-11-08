describe('Teste automatizado em 07.11.24', () => {
    it('Visita ao Magalu     ', () => {
cy.visit('https://www.magazineluiza.com.br/')

cy.contains('Ofertas do Dia').click()

cy.url().should('include','/ofertasdodia/')
cy.contains('Guarda-roupa Casal Easy Slim 8').click()
cy.url().should('include','/guarda-roupa-casal-easy-slim-8-portas-com-espelho-amendoa-clean-off-white-moveis-lopas/')
cy.contains('Comprar Agora').click()
// testando mais interações
cy.contains('Ofertas do Dia').click()
cy.contains('Agora não').click()
//cy.get('button[type="submit"]').click()
})
})