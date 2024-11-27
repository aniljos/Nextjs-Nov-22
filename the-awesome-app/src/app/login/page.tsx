'use client'

import { useLogin } from "@/hooks/useLogin"

export default function LoginPage(){


    const {errorMessage, userName, setUserName, password, setPassword, userNameRef, login} = useLogin();
    
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