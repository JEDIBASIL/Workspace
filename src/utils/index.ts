import { Note } from "../types";

const saveNote = (note: Note[]): boolean => {
    localStorage.setItem("notes", JSON.stringify(note))
    return true;
}

const isNote = (): boolean => {
    const isSet = localStorage.getItem("notes")
    return isSet ? true : false;
}

const getNote = (): Note[] | any => {
    const isSet = localStorage.getItem("notes")
    if (isSet)
        return JSON.parse(isSet);
}

export { saveNote, isNote, getNote }