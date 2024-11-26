'use client'

import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import Message from "./Message";

type CounterProps = {
    initialValue: number
}

export default function Counter(props: CounterProps){

   
    const [counter, setCounter] = useState(props.initialValue);
   
    useEffect(() => {

        console.log("useEffect counter updated", counter);

    }, [counter])

    function inc(evt: MouseEvent<HTMLButtonElement>){
        //console.log("in inc", evt);
        //setCounter(counter + 1);
        //setCounter(counter + 1);
        setCounter(pValue => pValue + 1);
        //setCounter(pValue => pValue + 1);
        //console.log("count", counter);
       
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>){

        const value = evt.target.value;
        setCounter(Number(value))
    }

    return (
        <div  style={{border: `2px solid blue`, margin: "4px", padding: "4px"}}>
            <h4>Counter</h4>
            <p>Count: {counter}</p>
            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={() => setCounter(counter - 1)}>Decr</button>
            </div>

            <div>
                <input type="number" placeholder="Counter" value={counter} onChange={handleChange}/>
            </div>

            { counter > 10 ? <Message text={"Count: " + counter} color="green"/> : null}
        </div>
    )
}