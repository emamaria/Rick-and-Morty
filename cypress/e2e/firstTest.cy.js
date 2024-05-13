describe('Rick and Morty first page test', () => {

  
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

  it('first and last container id of rendered images must match with 1 and 20', () =>{
 
       cy.get('.character-container').then(containers => {

        let lastContainerIndex = containers.length - 1
        cy.wrap(containers).eq(0).invoke('attr', 'id').should('contain', 1)
        cy.wrap(containers).eq(lastContainerIndex).invoke('attr', 'id').should('contain', 20)

       })
     
    
    })
       

  })

  describe('Rick and Morty from second page test', () => {

     
     beforeEach(() => {
         cy.visit('http://localhost:5173/')
      })


     it('Shows Prev button as well once click Next button of / page',() => {
        cy.contains('Next').click()
        cy.contains('Prev').should('exist')
     })

     it('does correct request and response when click next button', () => {
        cy.intercept('GET', `https://rickandmortyapi.com/api/character?page=2`).as('getCharacters')
        cy.contains('Next').click()
        cy.wait('@getCharacters')
        cy.get('@getCharacters').then(http => {
          expect(http.response.statusCode).to.equal(200)
          expect(http.response.body.results.length).to.equal(20)
          expect(http.response.body.results[0]).to.have.property('id')
          expect(http.response.body.results[0]).to.have.property('image')
          expect(http.response.body.results[0]).to.have.property('name')
        })
     })

     it('shows 20 images after every click and not show Next button in last page', () => {
     


       cy.request('GET', `https://rickandmortyapi.com/api/character`).then(resp => {
        
       const createArray = N  => Array.from({length: N}, (_, index) => index + 1);

       const totalPages = createArray(resp.body.info.pages)
       
        cy.wrap(totalPages).each(() => {

            cy.get('img').should('have.length', 20)
            cy.contains('Next').click()
           
        }) 

        cy.contains('Next').should('not.exist')

       })
    
  
       
     })
      

  })
