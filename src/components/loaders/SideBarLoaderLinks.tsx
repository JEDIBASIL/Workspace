import { Flex, Skeleton } from "@mantine/core";



const SideBarLoaderLinks: React.FC = () => {
    return (
        <>
            <Flex
            align={"center"}
            justify={"center"}
            gap={10}
            mb={15}
            pl={10}
            >
                <Skeleton miw={30} height={30} circle />
                <Skeleton height={30} radius={5} />
            </Flex>
        </>
    );
}

export default SideBarLoaderLinks;