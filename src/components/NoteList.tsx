import { Button, TextInput, Menu } from "@mantine/core";
import { v4 as uuidv4 } from 'uuid';
import {
  TfiTrash,
  TfiMore,
  TfiPencilAlt,
  TfiSearch,
  TfiPlus,
  TfiHeart,
  TfiNotepad,
} from "react-icons/tfi";
import { Link as A } from "react-router-dom";
import { NoteContextType } from "../types";

const NoteList: React.FC<NoteContextType> = ({ noteDispatcher, notes }) => {
  const generatedId = uuidv4().toString();
  return (
    <>
      <div className="note_list_container">
        <div className="note_search_bar_container">
          <div className="search_box">
            {" "}
            <TextInput
              icon={<TfiSearch />}
              width={"100%"}
              placeholder="Search notes"
            />
          </div>
          <div>
            <A onClick={() =>
              noteDispatcher({
                type: "ADD_NOTE",
                payload: {
                  id: generatedId,
                  title: "",
                  text: "",
                  favorite: false,
                  date_created: new Date(),
                },
              })
            }
              to={"/app/note-pad/" + generatedId}
            >
              <Button
                leftIcon={
                  <TfiPlus style={{ fontSize: "22px", fill: "white" }} />
                }
              >
                Add Note
              </Button>
            </A>
            <Button ml={"10px"} color={"red"}>
              <TfiTrash style={{ fontSize: "22px", fill: "white" }} />
            </Button>
          </div>
        </div>
        {notes.length === 0 ? (
          <div>
            <TfiNotepad />
            <h2>No Note</h2>
          </div>
        ) : (
          <ul>
            {notes.map(note => (
              <li key={note.id}>
                <Menu withArrow position="bottom-end" shadow="md" width={250}>
                  <Menu.Target>
                    <button className="more">
                      <TfiMore />
                    </button>
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item onClick={() => noteDispatcher({ type: "DELETE_NOTE", id: note.id })} icon={<TfiTrash />}>
                      <p style={{ fontWeight: "500" }}>Delete </p>
                    </Menu.Item>
                    <Menu.Item onClick={() => noteDispatcher({ type: "TOGGLE_FAVORITE", id: note.id })} icon={<TfiHeart />}>
                      <p style={{ fontWeight: "500" }}>{note.favorite ? "Remove from favorite" : "Add to favorite"}</p>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                <A to={"/app/note-pad/" + note.id}>
                  <div>
                    {note.title.length > 60
                      ?
                      <h4 style={{ fontWeight: "500" }}>
                        {note.title.slice(0, 60) + "..."}
                      </h4>
                      :
                      <h4 style={{ fontWeight: "500" }}>
                        {note.title}
                      </h4>
                    }
                    <p style={{ fontWeight: "500" }}>{note.text.slice(0, 120) + "..."} </p>
                  </div>
                  <div className="time_details">
                    <p>Created: 9 Jan, 2020</p>
                    <p>Last modified: 9 Jan, 2020</p>
                  </div>
                </A>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default NoteList;
