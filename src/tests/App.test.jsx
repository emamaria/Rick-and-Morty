/* eslint-disable no-undef */
import { render, screen,fireEvent, getByTestId } from "@testing-library/react"
import App from "../App"



describe('test <App/>', () => {

    const Next = 'Next'
    const Prev = 'Prev'
  
    test('should see Next button when access to page', () => {

        render(<App/>)

        screen.debug()
        expect(screen.getByRole('button', {value: Next})).toBeTruthy()
       
    })

    test('should see only one button when access to page', () => {

        render(<App/>)

        screen.debug()
        expect(screen.getAllByRole('button')).toHaveLength(1)
       
    })

    test('should show Prev button when click Next Button', async() => {

        render(<App/>)
        const buttonNext = screen.getByText(Next)
        fireEvent.click(buttonNext)
        screen.debug()
        expect(screen.getByText(Prev)).toBeTruthy()
        
    })

   
   
})
