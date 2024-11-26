
import {configureStore} from '@reduxjs/toolkit';

//initial state

const initialState = {

    msg: 'Hello',
    ctr: 5
}

//reducer
const reducer = (currentState=initialState, action) => {

    if(action.type === "inc_ctr"){
        return {
            ...currentState,
            ctr: currentState.ctr + 1
        }
    }
    if(action.type === "decr_ctr"){
        return {
            ...currentState,
            ctr: currentState.ctr - 1
        }
    }
    if(action.type === "update_msg"){
        return {
            ...currentState,
           msg: action.message
        }
    }
    // return the updated state
    return currentState;
}
//create store
const store = configureStore({
    reducer: reducer
});
console.log("state: ", store.getState());

//subscribe
store.subscribe(() => {
    console.log("subscriber: ", store.getState());
})


//dispatch an action
store.dispatch({type: "inc_ctr"});
//console.log("state: ", store.getState());
store.dispatch({type: "decr_ctr"});
//console.log("state: ", store.getState());
store.dispatch({type: "update_msg", message: "test"});
//console.log("state: ", store.getState());