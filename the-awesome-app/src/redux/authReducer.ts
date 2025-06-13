export type AuthState = {
    username: string;
    isAuthenticated: boolean;
    accessToken: string,
    refreshToken: string
}

export type AuthAction  = {
    type: string;
    payload?: AuthState
}

const initialState: AuthState = {
    username: "",
    isAuthenticated: false,
    accessToken: "",
    refreshToken: ""
}

// Actions
// login :  {type: "login", payload: {username, accessToken, refreshToken, isAuthenticated}}
// logout : {type: "logout"}
export const authReducer = (currentState=initialState, action: AuthAction) => {

    if(action.type === "login" && action.payload){
        return action.payload;
    }
    if(action.type === "logout"){
        return initialState;
    }
    return currentState;
}