import { NoteFields } from "../../components";
import { useNavigate } from "react-router-dom";
import {TfiControlBackward} from "react-icons/tfi"

 
const NotePad: React.FC = () => {
    const navigate = useNavigate();
    return (  

        <div className="notes_container">
            <div onClick={() => navigate(-1)} className="back"><TfiControlBackward  /> Back</div>
            <NoteFields />
        </div>
    );
}
 
export default NotePad;