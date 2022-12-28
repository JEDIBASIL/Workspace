import { render, screen } from '@testing-library/react';
import SideBarLoader from '../SideBarLoader';

describe("testing the SideBarLoaderComponent",()=>{
    const size = 5
    it("test to check if the loader initial size is correct",()=>{
        render(<SideBarLoader />)
        const loaderContainer = screen.getAllByRole("loader_container")
        expect(loaderContainer.length).toBe(3)
    })

    it("test to check if the passed size is correct",()=>{
        render(<SideBarLoader size={size} />)
        const loaderContainer = screen.getAllByRole("loader_container")
        expect(loaderContainer.length).toBe(size)
    })
})