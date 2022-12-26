import { render, screen } from '@testing-library/react';
import Message from '../Message';
import testImage from "../../../assets/images/test.jpeg"

const title = "hello world"
const message = "testing in progress"

// TEST 1
it("testing to check if the paragraph element which holds the message is available", async()=>{
    render(<Message title={title} message={message} />)
    const  messageParagraph =  screen.getByRole("paragraph");
    expect(messageParagraph).toBeInTheDocument();
})


// TEST 2
it("testing to check if the heading element which holds the title is available ", async()=>{
    render(<Message title={title} message={message} />)
    const messageHeading = screen.getByRole("heading",{level:3});
    expect(messageHeading).toBeInTheDocument();
})


// TEST 3
it("testing to check if the img element which holds the image is available ", async()=>{
    render(<Message title={title} message={message} />)
    const messageImage = screen.getByRole("img");
    expect(messageImage).toBeInTheDocument();
})

// TEST 4
it("testing to check if the title is available ", async()=>{
    render(<Message title={title} message={message} />)
    const messageTitle = screen.getByText(title);
    expect(messageTitle).toBeInTheDocument();
})

// TEST 5
it("testing to check if the message is available ", async()=>{
    render(<Message title={title} message={message} />)
    const messageMessage = screen.getByText(message);
    expect(messageMessage).toBeInTheDocument();
})


// TEST 6
it("testing to check if the image was rendered  ", async()=>{
    render(<Message title={title} message={message} image={testImage} />)
    const messageImage = screen.getByRole("img");
    expect(messageImage).toHaveAttribute("src", testImage); 
})