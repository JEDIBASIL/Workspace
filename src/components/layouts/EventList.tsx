import { Menu } from "@mantine/core";
import { FcCancel, FcOvertime } from "react-icons/fc";
import { TfiCalendar, TfiClose } from "react-icons/tfi";

interface EventListProps {
    time: string;
    event: string;
}

const EventList: React.FC<EventListProps> = ({ time, event }) => {
    return (
        <>
            <li>
                <div className="event_details">
                    <h5>{event}</h5>
                    <p role={"para"}>{time}</p>
                </div>
                <div className="action_container">
                    <button className="more"><FcOvertime /></button>
                     <button className="more"><FcCancel /></button>
                </div>
            </li></>
    );
}

export default EventList;