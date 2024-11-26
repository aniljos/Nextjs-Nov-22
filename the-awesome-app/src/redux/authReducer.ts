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
    payload: AuthState 
}


export const authReducer = (currentState=initialState, action: AuthAction) => {

    console.log(action);
    return currentState;
}