import axios from "axios";
import type { Todo } from "../model/Todo";
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TodoState = {
    items : Todo[], //todos
    status: 'pending' | 'success' | 'failed'
}

const initialState:TodoState = {
    items : [],
    status: "pending"
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

// fetchTodos: action creator for async task
// todos/fetchTodos => action type
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (_, config) => {

    //invoke the api
    try {
        
        const url = "http://localhost:9000/todoItems";
        const response = await axios.get(url);
        //action payload
        return response.data;

    } catch (error) {
        
        config.rejectWithValue(error);
    }
})


const todoSlice = createSlice({

    name: "todos",
    initialState,
    reducers: {

        addItem: (state, action: PayloadAction<Todo>)=> {

            state.items.push(action.payload);
        },
        setCompleted: (state, action: PayloadAction<Todo>)=> {

            const index = state.items.findIndex(item => item.id === action.payload.id);
            state.items[index].isCompleted = action.payload.isCompleted;
        }

    },
    extraReducers(builder) {
        
        builder.addCase(fetchTodos.pending, (state) => {
            state.status = "pending"
        });
        builder.addCase(fetchTodos.rejected, (state) => {
            state.status = "failed"
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = "success";
            state.items = action.payload;
        });

    },
});

//reducer
export const todoReducer =  todoSlice.reducer;

//action creators
export const {addItem, setCompleted} = todoSlice.actions;

