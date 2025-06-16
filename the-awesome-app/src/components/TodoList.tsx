import { useSelector } from "react-redux";
import type { AppState } from "../redux/store";
import AddTodo from "./AddTodo";

function TodoList(){

    const todo = useSelector((state: AppState) => state.todo);

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