import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type AppState } from "../redux/store";
import AddTodo from "./AddTodo";
import { useEffect, type ChangeEvent } from "react";
import { fetchTodos, setCompleted } from "../redux/todoReducers";
import type { Todo } from "../model/Todo";
import { useTitle } from "../hooks/useTitle";
import { withBorder } from "../hoc/withBorder";

function TodoList(){

    const todo = useSelector((state: AppState) => state.todo);
    const dispatch = useDispatch<AppDispatch>();
    useTitle("Todo");
   
    useEffect(() => {

        // action here is a thunk function
        if(todo.status === 'pending' || todo.status === 'failed'){
             const action =  fetchTodos();
             dispatch(action);
        }
       

    }, [])

    function handleCompleted(evt: ChangeEvent<HTMLInputElement>, todo: Todo){
        const action = setCompleted({...todo, isCompleted: evt.target.checked});
        dispatch(action);
    }

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
                                <td><input type="checkbox" checked={item.isCompleted} onChange={e => handleCompleted(e, item)}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}
export default withBorder(TodoList);