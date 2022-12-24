import { TfiHome, TfiNotepad, TfiSettings, TfiFaceSmile, TfiUnlink, TfiHeart, TfiPowerOff } from "react-icons/tfi"
import SideBarList from "./SideBarList";
import { useLocation } from "react-router-dom";

const SideBar: React.FC = () => {
    const location = useLocation()
    return (
        <>
            <nav className="side_bar">
                <menu>
                    <ul>
                        <SideBarList className={location.pathname !== "/app" ? "inactive" : "active"} path={"/app"} icon={<TfiHome />} name={"Home"} />
                        <SideBarList className={(location.pathname === "/app/notes" || location.pathname === "/app/note-pad" ) ? "active" : "inactive"} path={"/app/notes"} icon={<TfiNotepad />} name={"Notes"} />
                        <SideBarList path={"/app/shared-note"} icon={<TfiUnlink />} name={"Shared notes"} />
                        <SideBarList path={"/app/favorite"} icon={<TfiHeart />} name={"Favorites"} />
                    </ul>
                    <ul>
                        <SideBarList path={"/app/account"} icon={<TfiFaceSmile />} name={"Account"} />
                        <SideBarList path={"/app/settings"} icon={<TfiSettings />} name={"Settings"} />
                        <SideBarList path={"/sign-in"} icon={<TfiPowerOff />} name={"Logout"} />

                    </ul>
                </menu>
            </nav>
        </>
    );
}

export default SideBar;