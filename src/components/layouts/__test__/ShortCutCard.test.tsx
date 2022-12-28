import { render, screen } from '@testing-library/react';
import ShortCutCard from '../ShortCutCard';
import { GiSharpedTeethSkull } from 'react-icons/gi';


describe("testing ShortCutCard component", () => {
    const name = "test"
    const Icon = GiSharpedTeethSkull 
    const color = "royalblue"
    it("test to check if the icon is rendered", () => {
        render(<ShortCutCard icon={<Icon role={"icon"} />} name={name} color={color} />)
        const shortCutCardIcon = screen.getByRole("icon")
        expect(shortCutCardIcon).toBeInTheDocument()
    })  

    it("test to check if the name is rendered correctly", () => {
        render(<ShortCutCard icon={<Icon role={"icon"} />} name={name} color={color} />)
        const shortCutCardName = screen.getByRole("para")
        expect(shortCutCardName.textContent).toBe(name)
    })  

    it("test to check if the icon container color is rendered correctly", () => {
        render(<ShortCutCard icon={<Icon role={"icon"} />} name={name} color={color} />)
        const shortCutCardIconContainer = screen.getByRole("icon_container")
        expect(shortCutCardIconContainer.style.backgroundColor).toBe(color)
    })  
})