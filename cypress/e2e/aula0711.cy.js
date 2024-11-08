describe('Teste automatizado em 07.11.24', () => {
    it('Visita ao Magalu     ', () => {
cy.visit('https://www.magazineluiza.com.br/')
cy.contains('Ofertas do Dia').click()

})
})