export type AuthState = {
    isAuthenticated: boolean;
    userName: string;
    accessToken: string;
    refreshToken: string
}

const initialState: AuthState = {

    isAuthenticated: false,
    userName: "",
    accessToken: "",
    refreshToken: ""
}

export type AuthAction= {
    type: string,
    payload?: AuthState 
}

// {type: "login", payload: {isAuthenticated: true, userName: 'abc', accessToken: 'aaa', refreshToken: 'bbb'}}
// {type: "logout"}
export const authReducer = (currentState=initialState, action: AuthAction): AuthState => {

    if(action.type === "login" && action.payload){
        return action.payload;
    } 

    if(action.type === "logout"){
        return initialState;
    }
    
    return currentState;
}