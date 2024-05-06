import { render, screen } from "@testing-library/react"
import { Characters } from "../../Characters/Characters"


describe('test <Characters/>', () => {

    const image = "https://rick/1.jpeg"
    const name = "Rick"

    
    test('should show the image with alt and url passed from props', () => {

        
        render(<Characters name={name} image={image}/>)
        screen.debug()
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(image)
        expect(alt).toBe(name)
    })

    test('should contain the name passed from props', () => {
        render(<Characters name={name} image={image}/>)
        screen.debug()
        expect(screen.getByText(name)).toBeTruthy()
    })
})