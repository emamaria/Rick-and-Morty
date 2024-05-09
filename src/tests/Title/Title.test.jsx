/* eslint-disable no-undef */
import { render} from "@testing-library/react";
import {Title} from "../../Title/Title"

describe('test <Title/>', () => {
    

    test('should match the snapshot', () => {
       
        const {container} = render(<Title/>)
        expect(container).toMatchSnapshot()
    })

    
});
