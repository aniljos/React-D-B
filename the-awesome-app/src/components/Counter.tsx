type CounterProps = {
    initialValue: number;
}

// <Counter initialValue={5}/>
function Counter(props: CounterProps){

    let counter = props.initialValue;
    function inc(){
        console.log("inc invoked");
        //props.initialValue++; // This is read-only
        counter++;
        console.log("counter", counter);
    }

    return (
        <div>
            <h4>Counter: {counter}</h4>
            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button>Decr</button>
            </div>
        </div>
    )
}

export default Counter;