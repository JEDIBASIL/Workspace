import { useContext, useEffect } from "react";
import { NoteList, PageHeader } from "../../components";
import { NoteContext } from "../../contexts";

const Favorite: React.FC = () => {

  const { notes, noteDispatcher } = useContext(NoteContext);

  useEffect(() => {
    noteDispatcher({ type: "GET_NOTE" });
  }, []);

  return (
    <div>
      <PageHeader name={"Favorite"} />
      <NoteList
        notes={notes?.filter(note=> note?.favorite)}
        noteDispatcher={noteDispatcher}
      />
    </div>
  );
};

export default Favorite;
