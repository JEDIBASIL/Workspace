import { Container, Flex, MantineProvider } from "@mantine/core";
import { Skeleton } from "@mantine/core";

interface NoteLoaderProps {
    size?: number
}

const NoteLoader: React.FC<NoteLoaderProps> = ({ size = 3 }) => {
    let loaderNum: number[] = [];
    for (let i = 0; i < size; i++) { loaderNum = [...loaderNum, i] }
    return (
        <>
            <div>
                <div className="note_search_bar_loader_container">
                    <div className="loader_search_box">
                        <Skeleton width={"100%"} height={40} radius={5} />
                    </div>
                    <Flex align={"center"} justify={"center"} gap={10} mb={15} pl={10} >
                        <Skeleton width={100} miw={100} mih={30} height={30} radius={5} mb={15} />
                        <Skeleton width={50} miw={50} mih={30} height={30} radius={5} mb={15} />

                    </Flex>
                </div>
                <div className="note_loader_container">
                    {
                        loaderNum.map(i =>
                            <div className="note_loader_content">
                                <Skeleton mih={50} height={50} radius={5} mb={15} />
                                <Skeleton height={"100%"} radius={5} />
                                <Skeleton />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default NoteLoader;