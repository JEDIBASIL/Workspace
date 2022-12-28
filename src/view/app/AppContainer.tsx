import { Outlet } from "react-router-dom";
import { SideBar } from "../../components";
import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";

const AppContainer: React.FC = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 300)
    }, [])
    return (
        <>
            <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
                <div data-theme="dark" className="app_container">
                    <div className="app_content">
                        <SideBar visible={loading} />
                        <div className="notes_container">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </MantineProvider>
        </>
    );
}

export default AppContainer;