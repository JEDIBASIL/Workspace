import { Accordion } from "@mantine/core";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
interface SideBarListProps {
    name: string;
    path: string;
    icon: ReactElement;
    className?: string;
    isMultiple?:boolean | null;
}


const SideBarList: React.FC<SideBarListProps> = ({ name, isMultiple=false, path, icon, className }) => {
    return (
        <>
            <li>
                <div className="links_container">
                    <NavLink className={className} to={path}>
                        <Accordion.Control chevron={!isMultiple && <span role={"chevron"}></span>}>
                            <div className="links_container">
                                <div className={"icon_container"}>{icon}</div>
                                <span>{name}</span>
                            </div>
                        </Accordion.Control>
                    </NavLink>
                </div>
            </li>
        </>
    );
}

export default SideBarList;