'use client'

import { useEffect } from "react";

type MessageProps = {

    text: string;
    color: string;
}


function Message(props: MessageProps) {

    console.log("Message props", props);

    useEffect(() => {

        console.log("Message component mounted");

        //clean-up (unmount)
        return () => {
            console.log("Message component unmounting");
        }
    }, []);

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