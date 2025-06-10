type MessageProps = {

    text: string;
    color: string;
}


function Message(props: MessageProps) {

    console.log("Message props", props);
    return (
        <>
            <div style={{color: props.color}}>
                <h4>Hello {props.text}</h4>
                <p>This is a functional component</p>
                <p>Created at: {new Date().toLocaleString()} </p>
            </div>
            <div>
                <p>This another message</p>
            </div>
        </>
    )
}
export default Message;