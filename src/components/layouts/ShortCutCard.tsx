import { ReactNode } from "react";

interface ShortCutCardProps {
    name: string;
    icon: ReactNode;
}

const ShortCutCard: React.FC<ShortCutCardProps> = ({ name, icon }) => {
    return (
        <>
            <div className="short_cut_card">
                <div className="icon_container">
                    {icon}
                </div>
                <p>{name}</p>
            </div>
        </>
    );
}

export default ShortCutCard;