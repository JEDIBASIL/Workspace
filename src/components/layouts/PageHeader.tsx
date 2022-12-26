interface PageHeaderProps {
    name:string | number
}
 
const PageHeader: React.FC<PageHeaderProps> = ({name}) =>  <h2>{name}</h2>

 
export default PageHeader;