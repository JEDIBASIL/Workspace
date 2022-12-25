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

const dateConverter = (date: Date): string => {
    date = new Date();
    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    return `${day} ${months[month]}, ${year}`;
}

export { saveNote, isNote, getNote, dateConverter }


