import { Menu } from "@mantine/core";
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
                    <button className="more"><TfiCalendar /></button>
                    <button className="more"><TfiClose /></button>
                </div>
            </li></>
    );
}

export default EventList;