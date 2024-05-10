describe('Rick and Morty First Page Test', () => {

  
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

  describe.only('Rick and Morty rest of pages testing', () => {


         
     beforeEach(() => {
         cy.visit('http://localhost:5173/')
      })


     it('Shows Prev button as well once click Next button of / page',() => {
        cy.contains('Next').click()
        cy.contains('Prev').should('exist')
     })

     it('shows 20 images after every click in Next button until this button dissapears', () => {
           
      let buttonsNumbers;
      cy.contains('Next').click()

       cy.get('button').then( buttons => {
        buttonsNumbers = cy.wrap(buttons).length
         while(buttonsNumbers === 2){
          cy.contains('Next').click()
          cy.wait(1000)
          cy.get('img').should('have.length', 20)
          buttonsNumbers = cy.get('buttons').length
          console.log("ema", buttonsNumbers)
          cy.contains('Next').click()
         }
       })
        
        //  const buttonsNumbers =  cy.get('button').length
      //  const NextButton = cy.contains('Next').should('exist')
      //  console.log(NextButton)
       
      //  while(cy.contains('Next')){
      //      console.log("ema")
      //  }
      //   if(NextButton){
      //   NextButton.click()
      //   cy.get('img').should('have.length', 20)
      // }
       
     })
      

  })
