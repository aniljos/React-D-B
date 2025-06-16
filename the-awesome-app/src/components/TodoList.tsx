import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type AppState } from "../redux/store";
import AddTodo from "./AddTodo";
import { useEffect } from "react";
import { fetchTodos } from "../redux/todoReducers";

function TodoList(){

    const todo = useSelector((state: AppState) => state.todo);
    const dispatch = useDispatch<AppDispatch>();
   
    useEffect(() => {

        // action here is a thunk function
        if(todo.status === 'pending' || todo.status === 'failed'){
             const action =  fetchTodos();
             dispatch(action);
        }
       

    }, [])

    return (
        <div>
            <h4>Todo List</h4>

            <AddTodo/>
            <br />

            <table className="table">
                <thead>
                    <tr>
                        <th>Item Id</th>
                        <th>Task</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todo.items.map(item => {

                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.text}</td>
                                <td>{"" + item.isCompleted}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}
export default TodoList;