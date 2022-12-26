import { useContext, useEffect } from "react";
import { NoteList, PageHeader } from "../../components";
import { NoteContext } from "../../contexts";

const Notes: React.FC = () => {
    useEffect(() => {
        noteDispatcher({ type: "GET_NOTE" })
    }, [])
    const { notes, noteDispatcher } = useContext(NoteContext);

    return (
        <div>
        <PageHeader name={"Notes"} />
            <NoteList noteDispatcher={noteDispatcher} notes={notes} />
        </div>
    );
};

export default Notes;