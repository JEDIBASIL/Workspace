import React, { createContext, useReducer } from "react";
import { getNote, isNote, saveNote } from "../utils";
import { Action, Note, NoteContextType } from "../types";



const noteReducer = (state: Note[], { type, payload, id }: Action,): Note[] => {
  switch (type) {
    case "GET_NOTE": state = isNote() ? getNote() : ([] as Note[]);
      break;
    case "ADD_NOTE": state = [{ ...payload } as Note, ...state];
      break;
    case "DELETE_NOTE": state = state.filter((note) => note.id !== id);
      break;
    case "UPDATE_TITLE": state = state.map((note) => {
        if (note.id === id) {
          return { ...note, title: payload.title } as Note;;
        }
        return note;
      });
      break;
    case "UPDATE_TEXT": state = state.map((note) => {
        if (note.id === id) {
          return { ...note, text: payload.text } as Note;;
        }
        return note;
      });
      break
      case "TOGGLE_FAVORITE": state = state.map((note) => {
        if (note.id === id) {
          return { ...note, favorite:!note.favorite } as Note;;
        }
        return note;
      });
  }
  saveNote(state);
  return state;
};

const NoteContext = createContext<NoteContextType>({} as NoteContextType);

export const NoteContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notes, noteDispatcher] = useReducer(noteReducer, [] as Note[]);
  return (
    <NoteContext.Provider value={{ notes, noteDispatcher }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
