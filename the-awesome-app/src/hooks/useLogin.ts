import { MouseEvent, useRef, useState } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useTitle } from "@/hooks/useTitle";

export function useLogin(){

    const [userName, setUserName] =  useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();
    const userNameRef = useRef<HTMLInputElement>(null);
    useTitle("Login");
 

   


    async function login(evt: MouseEvent<HTMLButtonElement>){


        evt.preventDefault();
        console.log("username from the ref:", userNameRef.current?.value);
        if(userName && password){
            
            // API call
            const url = "http://localhost:9000/login";

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

    return {errorMessage, userName, setUserName, password, setPassword, userNameRef, login}
    
}