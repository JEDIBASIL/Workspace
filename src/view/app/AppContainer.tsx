import { Outlet } from "react-router-dom";
import { SideBar } from "../../components";
import { useEffect, useState } from "react";

const AppContainer: React.FC = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() =>setLoading(false), 300)
    }, [])
    return (
        <>
            <div className="app_container">
                <SideBar visible={loading} />
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