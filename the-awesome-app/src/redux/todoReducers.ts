import type { Todo } from "../model/Todo";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TodoState = {
    items : Todo[] //todos
}

const initialState:TodoState = {
    items : [
        {id: 1, text: "Learn AI", isCompleted: false},
        {id: 2, text: "Book Air Tickets", isCompleted: false}
    ]
}

//actions
// addItem {type: "addItem", payload: {id: 1, text: "Call Home"}}
// removeItem
// setCompleted

// export const todoReducer = (state= initialState, action) => {

//     if(action.type === "addItem" && action.payload){

//         //state.items.push(action.payload);
//         const copy = [...state.items];
//         copy.push(action.payload);
//         return {
//             ...state,
//             items: copy
//         }
//     }

//     return state;
// }

const todoSlice = createSlice({

    name: "todos",
    initialState,
    reducers: {

        addItem: (state, action: PayloadAction<Todo>)=> {

            state.items.push(action.payload);
        },
        setCompleted: (state, action: PayloadAction<number>)=> {

            const index = state.items.findIndex(item => item.id === action.payload);
            state.items[index].isCompleted = true;
        }

    }
});

//reducer
export const todoReducer =  todoSlice.reducer;

//action creators
export const {addItem, setCompleted} = todoSlice.actions;

