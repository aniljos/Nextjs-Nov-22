'use client'

import { MouseEvent, useState } from "react"

export default function LoginPage(){

    const [userName, setUserName] =  useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function login(evt: MouseEvent<HTMLButtonElement>){

        evt.preventDefault();

        if(userName && password){
            setErrorMessage("");
        }
        else{
            //alert("Enter the credentials");
            setErrorMessage("Enter the credentials");
        }
    }
    
    return (
        <div>
            <h4>Login</h4>

            {errorMessage ? <div className="alert alert-warning">{errorMessage}</div> : null}
            <form>
                <div className="form-group">
                    <label htmlFor="userName">Name</label>
                    <input type="text" id="userName" className="form-control" 
                                        value={userName} onChange={e => setUserName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" className="form-control"
                                        value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                <br />

                <div>
                    <button className="btn btn-primary" onClick={login}>SignIn</button>
                </div>


            </form>
        </div>
    )

}