import { NoteList } from "../../components";

 
const Favorite:React.FC = () => {
    return ( 
        <div className="notes_container">
            <h2>Favorite</h2>
            <NoteList />
        </div>
     );
}
 
export default Favorite;