import { useContext, useEffect } from "react";
import { NoteList } from "../../components";
import { NoteContext } from "../../contexts";

const Notes: React.FC = () => {
  useEffect(() => {
    noteDispatcher({ type: "GET_NOTE" });
  }, []);
  const { notes, noteDispatcher } = useContext(NoteContext);
  return (
    <div className="notes_container">
      <h2>Notes</h2>
      <NoteList noteDispatcher={noteDispatcher} notes={notes} />
    </div>
  );
};

export default Notes;
