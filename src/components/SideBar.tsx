import { TfiHome, TfiNotepad, TfiSettings, TfiFaceSmile, TfiUnlink, TfiHeart, TfiPowerOff, TfiBlackboard } from "react-icons/tfi"
import { HiOutlineUsers } from "react-icons/hi"
import SideBarList from "./SideBarList";
import { useLocation, NavLink } from "react-router-dom";
import { Accordion } from "@mantine/core";
import SubSideBarLink from "./SubSideBarLink";

const SideBar: React.FC = () => {
    const location = useLocation()
    return (
        <>
            <nav className="side_bar">
                <Accordion unstyled>
                    <menu>
                        <ul>
                            <Accordion.Item value="home">
                                <SideBarList className={location.pathname !== "/app" ? "inactive" : "active"} path={"/app"} icon={<TfiHome />} name={"Home"} />
                            </Accordion.Item>
                            <Accordion.Item value="projects">
                                <SideBarList path={"/app/task"} icon={<TfiBlackboard />} name={"Projects"} />
                            </Accordion.Item>

                            <Accordion.Item value="team">
                                <SideBarList path={"/app/team"} icon={<HiOutlineUsers />} name={"Team"} />
                            </Accordion.Item>

                            <Accordion.Item value="notes">
                                <SideBarList isMultiple className={(location.pathname.includes("note") || location.pathname.includes("favorite")) ? "active" : "inactive"} path={"/app/notes"} icon={<TfiNotepad />} name={"Notes"} />
                                <Accordion.Panel>
                                    <div className="panel_container">
                                        <SubSideBarLink path={"/app/favorite"} icon={<TfiHeart />} name={"Favorites"} />
                                        <SubSideBarLink path={"/app/shared-note"} icon={<TfiUnlink />} name={"Shared notes"} />
                                    </div>
                                </Accordion.Panel>
                            </Accordion.Item>

                        </ul>

                        <ul>
                            <Accordion.Item value="settings">
                                <SideBarList path={"/app/settings"} icon={<TfiSettings />} name={"Settings"} />
                            </Accordion.Item>
                            <Accordion.Item value="logout">
                                <SideBarList path={"/sign-in"} icon={<TfiPowerOff />} name={"Logout"} />
                            </Accordion.Item>
                        </ul>
                    </menu>
                </Accordion>
            </nav>
        </>
    );
}

export default SideBar;