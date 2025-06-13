import {createStore} from 'redux';

//initialState
const initialState = {
    count: 10,
    message: "Hello Redux"
}

//reducer
const reducer = (currentState=initialState, action)=> {

    //return the updated state;
    if(action.type === "INC_CTR"){
        return {
            ...currentState,
            count: currentState.count + 1
        }
    }
     if(action.type === "DECR_CTR"){
        return {
            ...currentState,
            count: currentState.count - 1
        }
    }
     if(action.type === "UPT_CTR"){
        return {
            ...currentState,
            count: action.value
        }
    }

    return currentState;
}

//store
const store = createStore(reducer);
console.log("state", store.getState());

//subscribe
store.subscribe(() => {
    console.log("store updated", store.getState());
})


//dispatch action
store.dispatch({type: "INC_CTR"})
//console.log("state", store.getState());
store.dispatch({type: "UPT_CTR", value: 20})
//console.log("state", store.getState());
store.dispatch({type: "DECR_CTR"})
//console.log("state", store.getState());
