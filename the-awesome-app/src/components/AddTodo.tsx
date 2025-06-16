import { useRef, type FormEvent } from "react";

function AddTodo(){

    const idFieldRef = useRef<HTMLInputElement>(null);
    const taskFieldRef = useRef<HTMLInputElement>(null);

    function handleSubmit(evt: FormEvent<HTMLFormElement>){

        evt.preventDefault();
        
        const id = idFieldRef.current?.value;
        const taskName = taskFieldRef.current?.value;
    }

    return (
        <div>
            <h4>Add Todo Item</h4>

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