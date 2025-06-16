import { useRef, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/todoReducers";

function AddTodo(){

    const idFieldRef = useRef<HTMLInputElement>(null);
    const taskFieldRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    function handleSubmit(evt: FormEvent<HTMLFormElement>){

        evt.preventDefault();

        const id = Number(idFieldRef.current?.value);
        const taskName = taskFieldRef.current?.value;
        if(id && taskName){
            const action = addItem({id, text: taskName, isCompleted: false});
            dispatch(action);

            if(idFieldRef.current){
                idFieldRef.current.value = "";
            }
            if(taskFieldRef.current){
                taskFieldRef.current.value = "";
            }
            
            
        }
    }

    return (
        <div>
                
            <h6>Add Todo Item</h6>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input type="number" className="form-control" id="id" ref={idFieldRef}/>
                </div>

                 <div className="form-group">
                    <label htmlFor="task">Task</label>
                    <input type="text" className="form-control"  id="task" ref={taskFieldRef}/>
                </div>
                <br />
                <button className="btn btn-success">Add Task</button>

            </form>
        </div>
    )
}

export default AddTodo;