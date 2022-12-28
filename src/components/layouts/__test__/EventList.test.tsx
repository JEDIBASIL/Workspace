import { render, screen } from '@testing-library/react';
import EventList from '../EventList';

describe("a test for EventList component", ()=>{
    const event = "testing"
    const time = "2 Jan 2023"
    it("test to check if the event is rendered correctly",()=>{
        render(<EventList event={event} time={time}   />)
        const EvenListEvent = screen.getByRole("heading",{level:5})
        expect(EvenListEvent.textContent).toBe(event)
    })

    it("test to check if the time is rendered correctly",()=>{
        render(<EventList event={event} time={time}   />)
        const EvenListTime = screen.getByText(time)
        expect(EvenListTime).toBeInTheDocument()
    })
})