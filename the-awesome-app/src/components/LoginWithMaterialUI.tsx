import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTitle } from "../hooks/useTitle";
import { Button, TextField } from "@mui/material";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    //let loginAttemptNo = 0;
    const loginAttemptNo = useRef(0);
    const usernameRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    useTitle("Login");
    

  

    useEffect(() => {

        usernameRef.current?.focus();

    }, [])

    function handleInput(evt: ChangeEvent<HTMLInputElement>) {

        // const value = evt.target.value;
        // setUsername(value)

        setUsername(evt.target.value);
    }

    async function handleSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();

        if (username && password) {

            // submit to the server

            const url = "http://localhost:9000/login";
            //
            // axios
            //     .post(url, {name: username, password})
            //     .then((response) => {console.log("success", response)})
            //     .catch(errResponse => {console.log("failed", errResponse)})
            try {

                const response = await axios.post(url, { name: username, password });
                //promise is resolved
                console.log("success", response.data);
                const accessToken = response.data.accessToken;
                const refreshToken = response.data.refreshToken;
                dispatch({
                    type: "login", payload: {
                                        username,
                                        isAuthenticated: true,
                                        accessToken,
                                        refreshToken
                                    }
                })

                setMessage("");
                navigate("/products")

            } catch (errResponse) {

                console.log("failed", errResponse);
                setMessage("Invalid Credentials");
                loginAttemptNo.current++;
                console.log("loginAttemptNo", loginAttemptNo.current);
                if (loginAttemptNo.current >= 3) {
                    setMessage("You are exceeding your attempts.");
                }
                dispatch({type: "logout"});

            }

            console.log("testing...");
        }
        else {

            setMessage("Enter the credentials");
        }

    }

    return (
        <div>
            <h4>Login</h4>

            {message ? <div className="alert alert-warning">{message}</div> : null}

            <form onSubmit={handleSubmit}>
                {/* <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" id="username" className="form-control"
                        value={username} onChange={handleInput} ref={usernameRef} />
                </div> */}
                <TextField value={username} onChange={handleInput} ref={usernameRef} label="Username" size="small"/>

                {/* <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" value={password}
                        onChange={e => setPassword(e.target.value)} />
                   
                </div> */}
                 <TextField type="password" value={password} onChange={e => setPassword(e.target.value)} label="Password"  size="small"/>

                <br />
                {/* <button className="btn btn-success">Login</button> */}
                <Button variant="contained" color="primary"  size="small">Login</Button>
            </form>
        </div>
    )

}

export default Login;