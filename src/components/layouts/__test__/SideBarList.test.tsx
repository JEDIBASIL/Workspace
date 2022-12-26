import { render, screen } from '@testing-library/react';
import { ReactElement } from "react";
import { GiFaceToFace } from 'react-icons/gi';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBarList from '../SideBarList';
import { Accordion } from '@mantine/core';

const Icon = GiFaceToFace;
const name = "test"
const path = "/test"
const className = "test"
const role = "icon"
interface SideBarListProps {
    name: string;
    path: string;
    icon: ReactElement;
    className?: string;
    isMultiple?:boolean | null;
}

const MockSideBarLink:React.FC<SideBarListProps> = ({name, className, icon, path}) => {
    return (
    <Router>
        <Accordion>
            <Accordion.Item value='test'>
                <SideBarList icon={icon} name={name} path={path} className={className} />
            </Accordion.Item>
        </Accordion>
    </Router>
    )
}

// TEST 1
it("test to check if the path props is correct", async()=>{
    render(<MockSideBarLink className={className} icon={<Icon />} name={name} path={path} />)
    const linkElement = screen.getByRole("link")
    expect(linkElement).toHaveAttribute("href", path);
})

// TEST 2
it("test to check if link element className is correct", async()=>{
    render(<MockSideBarLink className={className} icon={<Icon />} name={name} path={path} />)
    const linkElement = screen.getByRole("link")
    expect(linkElement).toHaveAttribute("class", className);
})

// TEST 3
it("test to check if the name is rendered correctly", async()=>{
    render(<MockSideBarLink className={className} icon={<Icon />} name={name} path={path} />)
    const SideBarLinkName = screen.getByText(name)
    expect(SideBarLinkName).toBeInTheDocument()
})

// TEST 4
it("test to check if the icon is rendered", async()=>{
    render(<MockSideBarLink className={className} icon={<Icon role={"icon"} />} name={name} path={path} />)
    const SideBarIcon = screen.getByRole("icon")
    expect(SideBarIcon).toBeInTheDocument()
})

// TEST 5
it("test to check if the icon is rendered", async()=>{
    render(<MockSideBarLink className={className} icon={<Icon role={role} />} name={name} path={path} />)
    const SideBarIcon = screen.getByRole(role)
    expect(SideBarIcon).toBeInTheDocument()
})

// TEST 6
it("test to check if the chevron icon is rendered", async()=>{
    render(<MockSideBarLink className={className} icon={<Icon />} name={name} path={path} />)
    const SideBarIcon = screen.getByRole("chevron")
    expect(SideBarIcon).toBeTruthy()
})
