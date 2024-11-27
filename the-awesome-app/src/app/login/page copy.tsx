'use client'

import { MouseEvent, useEffect, useRef, useState } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useTitle } from "@/hooks/useTitle";

export default function LoginPage(){

    const [userName, setUserName] =  useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();
    const userNameRef = useRef<HTMLInputElement>(null);
    useTitle("Login");

    
    // useEffect(() => {

    //     document.title = document.title + " " + "Login";

    // }, [])

    async function login(evt: MouseEvent<HTMLButtonElement>){

        
        evt.preventDefault();
        console.log("username from the ref:", userNameRef.current?.value);
        if(userName && password){
            
            // API call
            const url = "http://localhost:9000/login";
            // axios
            //     .post(url, {name: userName, password})
            //     .then((response) => {

            //         console.log("response", response);

            //     }, (errorResponse) => {

            //         console.log("errorResponse", errorResponse);
            //     })

            try {
                
                const response = await axios.post(url, {name: userName, password});
                console.log("response", response);
                setErrorMessage("");
                dispatch({type: "login", payload: {
                    isAuthenticated: true,
                    userName: userName,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken,
                }})


                router.push("/products");

            } catch (errorResponse) {

                console.log("errorResponse", errorResponse);
                setErrorMessage("Invalid credentials");
                dispatch({type: "logout"})
            }
           


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
                                        value={userName} onChange={e => setUserName(e.target.value)} ref={userNameRef}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control"
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