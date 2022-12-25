import SideBarLoaderLinks from "./SideBarLoaderLinks";
import { MantineProvider } from '@mantine/core';


 
const SideBarLoader: React.FC = () => {
    return (  
        <>
            <MantineProvider theme={{ colorScheme: 'dark' }}>
            <SideBarLoaderLinks />
            <SideBarLoaderLinks />
            <SideBarLoaderLinks />
            <SideBarLoaderLinks />
            <SideBarLoaderLinks />
            <SideBarLoaderLinks />
            </MantineProvider>
        </>
    );
}
 
export default SideBarLoader;