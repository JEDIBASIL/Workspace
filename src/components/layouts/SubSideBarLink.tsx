import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
interface SubSideBarLinkProps {
    name: string;
    path: string;
    icon: ReactElement,
    className?: string
}


const SubSideBarLink: React.FC<SubSideBarLinkProps> = ({ name, path, icon, className }) => {
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
export default SubSideBarLink;