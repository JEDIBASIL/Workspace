import { Outlet } from "react-router-dom";
import { SideBar } from "../../components";

const AppContainer: React.FC = () => {
    return (
        <>
            <div className="app_container">
                <SideBar />
                <div className="app_content">
                    <div className="notes_container">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppContainer;