import { MantineProvider } from '@mantine/core';
import { Flex, Skeleton } from "@mantine/core";

interface SideBarLoaderProps {
    size?: number
}



const SideBarLoader: React.FC<SideBarLoaderProps> = ({ size = 3 }) => {
    let loaderNum: number[] = [];
    for (let i = 0; i < size; i++) { loaderNum = [...loaderNum, i] }
    return (
        <>
            {
                loaderNum.map(i =>
                    <Flex align={"center"} justify={"center"} gap={10} mb={15} pl={10} >
                        <Skeleton miw={30} height={30} circle />
                        <Skeleton height={30} radius={5} />
                    </Flex>
                )
            }
        </>
    );
}

export default SideBarLoader;