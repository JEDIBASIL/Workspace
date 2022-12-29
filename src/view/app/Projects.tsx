import { FcOvertime, FcCancel, FcSurvey } from "react-icons/fc";
import { PageHeader } from "../../components";
import { MdCheck, MdCheckCircle, MdDoubleArrow } from "react-icons/md";
import { Menu } from "@mantine/core";
import { TfiHeart, TfiMore, TfiTrash } from "react-icons/tfi";

interface ProjectsProps {

}

const Projects: React.FC<ProjectsProps> = () => {
    return (
        <>
            <PageHeader icon={<FcSurvey />} name={"Projects"} />
            <div className="projects">
                <div className="projects_progress_container">
                    <div className="card">
                        <p>Total projects</p>
                        <div className="card_details">
                            <div className="icon_container">
                                <MdDoubleArrow />
                            </div>
                            <h1>10</h1>
                        </div>
                    </div>

                    <div className="card">
                        <p>Ongoing projects</p>
                        <div className="card_details">
                            <div className="icon_container">
                                <MdDoubleArrow />
                            </div>
                            <h1>3</h1>
                        </div>
                    </div>

                    <div className="card">
                        <p>Completed projects</p>
                        <div className="card_details">
                            <div className="icon_container">
                                <MdCheckCircle />
                            </div>
                            <h1>7</h1>
                        </div>
                    </div>


                </div>

                <div className="projects_container">
                    <div>
                        <ul>
                            <li>
                                <div className="event_details">
                                    <h5>Social media</h5>
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

                            <li>
                                <div className="event_details">
                                    <h5>Chicken restaurant</h5>
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

export default Projects;