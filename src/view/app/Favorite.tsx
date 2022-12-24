import { useContext, useEffect } from "react";
import { NoteList } from "../../components";
import { NoteContext } from "../../contexts";

const Favorite: React.FC = () => {

  const { notes, noteDispatcher } = useContext(NoteContext);

  useEffect(() => {
    noteDispatcher({ type: "GET_NOTE" });
  }, []);

  return (
    <div className="notes_container">
      <h2>Favorite</h2>
      <NoteList
        notes={notes?.filter(note=> note?.favorite)}
        noteDispatcher={noteDispatcher}
      />
    </div>
  );
};

export default Favorite;
