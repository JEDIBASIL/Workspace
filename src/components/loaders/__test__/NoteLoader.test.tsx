import { render, screen } from '@testing-library/react';
import NoteLoader from '../NoteLoader';

describe("a test for the NoteLoader component",()=>{
    const size = 5;
    it("test to check if the initial size of the loader is correct",()=>{
        render(<NoteLoader />)
        const loaderContainer = screen.getAllByRole("loader_container")
        expect(loaderContainer.length).toBe(3)
    })

    it("test to check if the passed size for the loader is correct",()=>{
        render(<NoteLoader size={size} />)
        const loaderContainer = screen.getAllByRole("loader_container")
        expect(loaderContainer.length).toBe(size)
    })
})