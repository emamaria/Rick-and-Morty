describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="title"]').should('contain', 'Rick And Morty')
  })
})