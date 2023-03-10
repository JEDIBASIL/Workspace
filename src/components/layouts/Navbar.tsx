import { GiBirdHouse } from "react-icons/gi"
import { Link as A } from "react-router-dom";
const NavBar: React.FC = () => {
    return (
        <>
            <nav>
                <A className="logo" to={"/"}>
                    <GiBirdHouse />
                    TweSpace
                </A>
            </nav>
        </>
    );
};

export default NavBar;
