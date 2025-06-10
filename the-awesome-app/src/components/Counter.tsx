import { useEffect, useState } from "react";
import Message from "./Message";

type CounterProps = {
    initialValue: number;
}

// <Counter initialValue={5}/>
function Counter(props: CounterProps){

    //let counter = props.initialValue;
   const [counter, setCounter] = useState(props.initialValue);

    useEffect(() => {
        console.log("counter updated", counter);

        
    }, [counter])

    function inc(){

        

        console.log("inc invoked");
        //props.initialValue++; // This is read-only
        //counter++;
        //setCounter(counter + 1);
        //setCounter(counter + 1);

        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);    
        //console.log("counter", counter);
    }
    function decr(){
        setCounter(counter - 1);
    }

    return (
        <div>
            <h4>Counter: {counter}</h4>
            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button onClick={decr}>Decr</button>
            </div>

            {counter > 5 ?   <Message text={"Counter: " + counter} color="blue"/> : null }
        </div>
    )
}

export default Counter;