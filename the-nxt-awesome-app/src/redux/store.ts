//import { createStore } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { todoReducer } from "./todoReducers";

const reducers = combineReducers({
    auth: authReducer,
    todo: todoReducer
})

export const store = configureStore({
    reducer: reducers,
    devTools: true
});


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;