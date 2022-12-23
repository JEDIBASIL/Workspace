import { Button, TextInput, Menu } from "@mantine/core";
import {TfiTrash, TfiMore, TfiPencilAlt, TfiSearch, TfiPlus, TfiHeart} from "react-icons/tfi"
import { Link as A } from "react-router-dom";

const NoteList: React.FC = () => {
    return (
        <>
            <div className="note_list_container">
                <div className="note_search_bar_container">
                    <div className="search_box"> <TextInput icon={<TfiSearch/>} width={"100%"} placeholder="Search notes" /></div>
                   <div>
                    <A to={"/app/note-pad"}><Button leftIcon={<TfiPlus style={{fontSize:"22px", fill:"white"}} />}>Add Note</Button></A>
                    <Button ml={"10px"} color={"red"}><TfiTrash style={{fontSize:"22px", fill:"white"}} /></Button>
                   </div>

                </div>
                <ul>
                    <li>
                        <Menu withArrow position="bottom-end" shadow="md" width={200}>
                            <Menu.Target>
                                <button className="more">
                                    <TfiMore />
                                </button>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Item icon={<TfiTrash />}>
                                    <h4>Delete </h4>
                                </Menu.Item>
                                <Menu.Item icon={<TfiPencilAlt />}>
                                    <h4>Edit</h4>
                                </Menu.Item>
                                <Menu.Item icon={<TfiHeart />}>
                                    <h4>Favorite</h4>
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <h4>How does it feel to be you</h4>
                        <p>It sucks </p>
                    </li>
                    <li>
                        <Menu withArrow position="bottom-end" shadow="md" width={200}>
                            <Menu.Target>
                                <button className="more">
                                    <TfiMore />
                                </button>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Item icon={<TfiTrash />}>
                                    <h4>Delete </h4>
                                </Menu.Item>
                                <Menu.Item icon={<TfiPencilAlt />}>
                                    <h4>Edit</h4>
                                </Menu.Item>
                                <Menu.Item icon={<TfiHeart />}>
                                    <h4>Favorite</h4>
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <h4>How does it feel to be you</h4>
                        <p>It sucks </p>
                    </li>
                    <li>
                        <Menu withArrow position="bottom-end" shadow="md" width={200}>
                            <Menu.Target>
                                <button className="more">
                                    <TfiMore />
                                </button>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Item icon={<TfiTrash />}>
                                    <h4>Delete </h4>
                                </Menu.Item>
                                <Menu.Item icon={<TfiPencilAlt />}>
                                    <h4>Edit</h4>
                                </Menu.Item>
                                <Menu.Item icon={<TfiHeart />}>
                                    <h4>Favorite</h4>
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <h4>How does it feel to be you</h4>
                        <p>It sucks </p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NoteList;