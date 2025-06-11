import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from 'axios';

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleInput(evt: ChangeEvent<HTMLInputElement>){

        // const value = evt.target.value;
        // setUsername(value)

        setUsername(evt.target.value);
    }

    function handleSubmit(evt: FormEvent<HTMLFormElement>){
        evt.preventDefault();

        if(username && password){
            setMessage("");
            // submit to the server

            const url = "http://localhost:9000/login";
            
            axios
                .post(url, {name: username, password})
                .then((response) => {console.log("success", response)})
                .catch(errResponse => {console.log("failed", errResponse)})


            console.log("testing...");

        }
        else{
            
            setMessage("Enter the credentials");
        }

    }

    return (
        <div>
            <h4>Login</h4>

            {message ? <div className="alert alert-warning">{message}</div> : null}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" className="form-control" value={username} onChange={handleInput}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" value={password} 
                                                                                    onChange={e => setPassword(e.target.value)}/>                                                            
                </div>

                <br />
                <button className="btn btn-success">Login</button>
            </form>
        </div>
    )

}

export default Login;