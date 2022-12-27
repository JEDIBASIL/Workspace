import { Menu } from "@mantine/core";
import { TfiHeart, TfiMore, TfiTrash } from "react-icons/tfi";

interface EventListProps {
    time: string;
    event: string;
}

const EventList: React.FC<EventListProps> = ({ time, event }) => {
    return (
        <>
            <li>
                <div className="event_details">
                    <h5>{time}</h5>
                    <p>{event}</p>
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
            </li></>
    );
}

export default EventList;