import { render, screen } from '@testing-library/react';
import PageHeader from '../PageHeader';
 
it("test if the name was rendered properly", async ()=>{
    const  name = "Hello world"
    render(<PageHeader name={name} />)
    const headingElement = screen.getByText(name)
    expect(headingElement).toBeInTheDocument();
})

it("test to check if the element is a heading element", async ()=>{
    const  name = "Hello world"
    render(<PageHeader name={name} />)
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toBeInTheDocument();
})