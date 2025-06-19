'use server'
//Server action
export async function sayHello(msg: string){

    console.log("in sayHello.." + msg);
    return "Hello " + msg;
}

export async function sayHelloView(msg: string){

    console.log("in sayHello.." + msg);
    return (
        <div className="alert alert-warning">
            <p>Hello {msg} from the Server Action</p>
        </div>
    )
}
