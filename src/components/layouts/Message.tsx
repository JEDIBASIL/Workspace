
interface MessageProps {
    title: string;
    message?: string;
    image?:string

}

const Message: React.FC<MessageProps> = ({ title, message, image }) => {
    return (
        <>
            <div className="message_container">
                <img src={image as string} alt="" />
                <h3>{title}</h3>
                <p role={"paragraph"}>{message}</p>
            </div>
        </>
    );
}

export default Message;