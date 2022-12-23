import { NoteList } from "../../components";

const Notes:React.FC = () => {
    return (
        <div className="notes_container">
            <h2>Notes</h2>
            <NoteList />
        </div>
    );
};

export default Notes;