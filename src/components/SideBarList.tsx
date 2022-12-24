import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
interface SideBarListProps {
    name: string;
    path: string;
    icon: ReactElement,
    className?:string
}


const SideBarList: React.FC<SideBarListProps> = ({ name, path, icon, className }) => {
    return (
        <>
            <li>
                <NavLink className={className} to={path}>
                    <div className={"icon_container"}>{icon}</div>
                    <span>{name}</span>
                </NavLink>
            </li>
        </>
    );
}

export default SideBarList;