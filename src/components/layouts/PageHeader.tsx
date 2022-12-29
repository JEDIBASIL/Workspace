import { ReactNode } from "react";

interface PageHeaderProps {
    name: string | number
    icon?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ name, icon }) => <h2>{icon}{name}</h2>


export default PageHeader;