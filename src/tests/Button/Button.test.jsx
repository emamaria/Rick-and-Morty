import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "../../Button/Button"



describe('test <Button/>', () => {

    const buttonName = "Next"
    // eslint-disable-next-line no-undef
    const clickFunc = jest.fn()
 

     beforeEach(() => {
        render(<Button buttonName={buttonName} onClick={clickFunc}/>)
     })

    test('Button contain buttonName passed from props', () => {
       
        expect(screen.getByText(buttonName)).toBeTruthy()
    })


    test('Every time button is clicked,  clickFunc must be called', () => {

        const button = screen.getByText(buttonName)
        fireEvent.click(button)
        fireEvent.click(button)
        expect(clickFunc).toHaveBeenCalled()
        expect(clickFunc).toHaveBeenCalledTimes(2)
    })

   

})