import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { NoteFields } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { TfiControlBackward } from "react-icons/tfi";
import { NoteContext } from "../../contexts";
import { Note } from "../../types";

const NotePad: React.FC = () => {
  const { notes, noteDispatcher } = useContext(NoteContext);
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [noteInfo, setNotePadInfo] = useState({} as Note)
  useLayoutEffect(() => {
    noteDispatcher({ type: "GET_NOTE" });
    setNotePadInfo({ ...notes.filter(note => note?.id === id)[0], id })
  }, [id])
  return (
    <div className="notes_container">
      <div onClick={() => navigate(-1)} className="back">
        <TfiControlBackward /> Back
      </div>
      <NoteFields setNotePadInfo={setNotePadInfo} noteDispatcher={noteDispatcher} noteInfo={noteInfo} />
    </div>
  );
};

export default NotePad;
