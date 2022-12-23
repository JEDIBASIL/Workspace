import { Outlet } from "react-router-dom";
import { NavBar } from "../../components";

const HomeContainer: React.FC = () => {
    return (
        <>
            <div className="home_container">
                <NavBar />
                <Outlet />
            </div>
        </>
    );
};

export default HomeContainer;
