describe('Rick and Morty Page', () => {

  
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('Renders the title', () => {
   
    cy.get('[data-testid="title"]').should('contain', 'Rick And Morty')
  })

  it('Renders the next button', () => {
    cy.get(".button-style").should('contain', "Next")
  })

  it('Renders 20 images', () => {
      cy.get('img').should('have.length', 20)
  })

  it('Renders 20 paragraph', () => {
    cy.get('.character-container').find('p').should('have.length', 20)
 })

  it('rendered images each container id must match with numbers from 1 to 20', () =>{
 
      for(let i = 1; i <= 20; i++){


        cy.get('.character-container').invoke('attr', 'id').each(id => {
      
        
         
       })
      }

      
    
  })


})