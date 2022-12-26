import { render, screen } from '@testing-library/react';
import SubSideBarLink from '../SubSideBarLink';
import { GiFaceToFace } from 'react-icons/gi';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactElement } from 'react';

const Icon = GiFaceToFace;
const name = "test"
const path = "/test"
const className = "test"

interface MockSubSideBarLinkProps{
    name: string;
    path: string;
    icon: ReactElement,
    className?: string
}

const MockSubSideBarLink:React.FC<MockSubSideBarLinkProps> = ({name, className, icon, path}) => {
    return (<Router>
        <SubSideBarLink icon={icon} name={name} path={path} className={className} />
    </Router>)
}

// TEST 1
it("test to check if the link element is available", async () => {
    render(<MockSubSideBarLink icon={<Icon />} name={name} path={path} />)
    const linkElement = screen.getByRole("link")
    expect(linkElement).toBeInTheDocument()
})

// TEST 2
it("test to check if the link to props is correct", async () => {
    render(<MockSubSideBarLink icon={<Icon />} name={name} path={path} />)
    const linkElement = screen.getByRole("link")
    expect(linkElement).toHaveAttribute("href", path)
})


// TEST 3
it("test to check if the link className is correct", async () => {
    render(<MockSubSideBarLink className={className} icon={<Icon  />} name={name} path={path} />)
    const linkElement = screen.getByRole("link")
    expect(linkElement).toHaveAttribute("class", className)
})


// TEST 4
it("test to check if the link name is correct", async () => {
    render(<MockSubSideBarLink className={className} icon={<Icon />} name={name} path={path} />)
    const subSideBarLinkName  = screen.getByText(name)
    expect(subSideBarLinkName).toBeTruthy
})

// TEST 5
it("test to check is the icons is rendered", async () => {
    render(<MockSubSideBarLink className={className} icon={<Icon role={"icon"} />} name={name} path={path} />)
    const subSideBarIcon  = screen.getByRole("icon")
    expect(subSideBarIcon).toBeTruthy
})