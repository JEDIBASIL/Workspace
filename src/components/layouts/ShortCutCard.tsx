import { ReactNode } from "react";

interface ShortCutCardProps {
    name: string;
    icon: ReactNode;
    color: string;
}

const ShortCutCard: React.FC<ShortCutCardProps> = ({ name, icon, color }) => {
    return (
        <>
            <div className="short_cut_card">
                <div role={"icon_container"} style={{ backgroundColor: color }} className="icon_container">
                    {icon}
                </div>
                <p role={"para"}>{name}</p>
            </div>
        </>
    );
}

export default ShortCutCard;