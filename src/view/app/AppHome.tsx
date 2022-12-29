import { TfiAlarmClock, TfiTrash, TfiHeart, TfiMore, TfiPlus } from "react-icons/tfi";
import { PageHeader } from "../../components";
import { MdNoteAlt, MdOutlineAddTask, MdVideoCameraFront } from "react-icons/md"
import { ImUserPlus } from "react-icons/im"
import { Menu } from "@mantine/core";
import ShortCutCard from "../../components/layouts/ShortCutCard";
import EventList from "../../components/layouts/EventList";
import { FcCalendar, FcHome, FcList } from "react-icons/fc";


const AppHome: React.FC = () => {
    return (
        <>
            <PageHeader name={"Home"} icon={<FcHome />} />
            <div className="home">
                <div className="home_content">
                    <div className="home_short">
                        <div className="shortcut shortcut_content">
                            <div className="shortcut_container">
                                <ShortCutCard color={"slateblue"} name={"New Note"} icon={<MdNoteAlt />} />
                                <ShortCutCard color={""} name={"Meeting"} icon={<MdVideoCameraFront />} />
                                <ShortCutCard color={"teal"} name={"New project"} icon={<MdOutlineAddTask />} />
                                <ShortCutCard color={"royalblue"} name={"Add member"} icon={<ImUserPlus />} />
                            </div>
                        </div>

                        <div className="shortcut recent_notifications">
                            <h4>
                                <div className="title"><FcCalendar /><span>Events</span></div>
                                <TfiPlus />
                            </h4>
                            <ul>
                                <EventList time={"Give thanks to God"} event={"2 Jan  2023"} />
                                <EventList time={"Give thanks to God"} event={"2 Jan  2023"} />
                                <EventList time={"Give thanks to God"} event={"2 Jan  2023"} />
                                <EventList time={"Give thanks to God"} event={"2 Jan  2023"} />
                                <EventList time={"Give thanks to God"} event={"2 Jan  2023"} />
                            </ul>
                        </div>
                    </div>
                    <div className="home_activity">
                        <h4>
                            <div className="title"><FcList /><span>Activities</span></div>
                        </h4>
                        <ul>
                            <li>
                                <div>
                                    <h5>Food task 3 submitted</h5>
                                </div>
                                <Menu withArrow position="bottom-end" shadow="md" width={250}>
                                    <Menu.Target>
                                        <button className="more">
                                            <TfiMore />
                                        </button>
                                    </Menu.Target>

                                    <Menu.Dropdown>
                                        <Menu.Item icon={<TfiTrash />}>
                                            <p style={{ fontWeight: "500" }}>Delete </p>
                                        </Menu.Item>
                                        <Menu.Item icon={<TfiHeart />}>
                                            <p style={{ fontWeight: "500" }}></p>
                                        </Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppHome;