import { useContext, useEffect } from "react";
import { NoteList, PageHeader } from "../../components";
import { NoteContext } from "../../contexts";
import { FcFile } from "react-icons/fc";

const Notes: React.FC = () => {
    useEffect(() => {
        noteDispatcher({ type: "GET_NOTE" })
    }, [])
    const { notes, noteDispatcher } = useContext(NoteContext);

    return (
        <>
            <PageHeader icon={<FcFile />} name={"Notes"} />
            <div className="note_content">
                <NoteList noteDispatcher={noteDispatcher} notes={notes} />
            </div>
        </>
    );
};

export default Notes;