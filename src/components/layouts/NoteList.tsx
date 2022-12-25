import { Button, TextInput, Menu, Flex } from "@mantine/core";
import { v4 as uuidv4 } from 'uuid';
import {
  TfiTrash,
  TfiMore,
  TfiSearch,
  TfiPlus,
  TfiHeart,
} from "react-icons/tfi";
import { Link as A, useLocation } from "react-router-dom";
import { NoteContextType, } from "../../types";
import { useEffect, useState } from "react";
import noteFoundImg from "../../assets/svgs/Web search-cuate.svg"
import noNoteImg from "../../assets/svgs/Notes-cuate.svg"
import noFavoriteImg from "../../assets/svgs/In love-cuate.svg"
import NoteLoader from "../loaders/NoteLoader";
import { dateConverter } from "../../utils";
import Message from "./Message";





const NoteList: React.FC<NoteContextType> = ({ notes, noteDispatcher }) => {
  const generatedId = uuidv4().toString();
  const location = useLocation();
  const [query, setQuery] = useState("" as string)
  const filteredNotes = notes.filter(note => note.text.toLowerCase().includes(query.toLocaleLowerCase().trim()) || note.title.toLowerCase().includes(query.toLocaleLowerCase().trim()));

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 300)
  }, [])

  return (
    <>
      <div className="note_list_container">
        {
          loading
            ?
            <NoteLoader size={9} />
            :
            <>
              <div className="note_search_bar_container">
                <div className="search_box">
                  {" "}
                  <TextInput
                    icon={<TfiSearch />}
                    width={"100%"}
                    placeholder="Search notes"
                    onChange={onchange}
                    value={query}
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
                      size={"xs"}
                      leftIcon={
                        <TfiPlus style={{ fontSize: "22px", fill: "white" }} />
                      }
                    >
                      Add Note
                    </Button>
                  </A>
                  <Button size={"xs"} ml={"10px"} color={"red"}>
                    <TfiTrash style={{ fontSize: "18px", fill: "white" }} />
                  </Button>
                </div>
              </div>


              {notes.length === 0 ? (
                <Flex
                  mt={window.innerHeight / 5}
                  gap={"md"}
                  justify="center"
                  align="center"
                  direction="column"
                >
                  {
                    !location.pathname.toLowerCase().includes("favorite")
                      ?
                      <Message image={noNoteImg} title={"No note"} />
                      :
                      <Message image={noFavoriteImg} title={"No favorite note"} />
                  }
                  {
                    !location.pathname.toLowerCase().includes("favorite")
                    &&
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
                        size={"xs"}
                        leftIcon={
                          <TfiPlus style={{ fontSize: "22px", fill: "white" }} />
                        }
                      >
                        Add Note
                      </Button>
                    </A>
                  }
                </Flex>

              ) : (
                filteredNotes.length !== 0
                  ?
                  <ul>
                    {filteredNotes.map(note => (
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
                          <div style={{width:"100%"}}>
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
                            {
                              note.text.length > 110
                              ?
                              <p className="text">
                              {note.text.slice(0, 110) + "..."} 
                            </p>
                            :
                              <p className="text">
                              {note.text} 
                            </p>
                            }
                          </div>
                          <div className="time_details">
                            <p>Created at <div>{dateConverter(note.date_created)}</div></p>
                            <p>Last modified <div>{dateConverter(note.last_modified)}</div></p>
                          </div>
                        </A>
                      </li>
                    ))}
                  </ul>
                  :
                  <Flex
                    mt={window.innerHeight / 5}
                    gap={"xs"}
                    justify="center"
                    align="center"
                    direction="column"
                  >
                    <Message image={noteFoundImg} title={"No note found"} />
                  </Flex>
              )}
            </>
        }
      </div>
    </>
  );
};

export default NoteList;
