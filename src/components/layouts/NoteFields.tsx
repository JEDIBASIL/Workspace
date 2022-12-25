import { Note, NoteDispatcher } from "../../types";

interface NoteFieldsProps {
    noteDispatcher: NoteDispatcher;
    noteInfo: Note;
    setNotePadInfo: React.Dispatch<React.SetStateAction<Note>>
}

const NoteFields: React.FC<NoteFieldsProps> = ({ setNotePadInfo, noteInfo, noteDispatcher }) => {
    const updateNoteTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNotePadInfo({ ...noteInfo, [e.target.name]: e.target.value })
        noteDispatcher({ type: "UPDATE_TITLE", id: noteInfo.id, payload: { title: e.target.value } })
    }
    const updateNoteText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setNotePadInfo({ ...noteInfo, [e.target.name]: e.target.value })
        noteDispatcher({ type: "UPDATE_TEXT", id: noteInfo.id, payload: { text: e.target.value } })
    }
    return (
        <>
            <div className="note_fields">
                <input name={"title"} value={noteInfo.title} onChange={updateNoteTitle} type="text" placeholder="Title" />
                <textarea name={"text"} value={noteInfo.text} onChange={updateNoteText} placeholder="Note text">
                </textarea>
            </div>
        </>
    );
}

export default NoteFields;