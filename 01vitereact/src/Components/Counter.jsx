import { useState } from "react"
import "./style.css"


function Counter(){
    let [count,setCount] = useState(0);
    let [display,setDisplay] = useState(0);
    let error_message = "you can not exceed the range 0-20";
    function increment(){
        if(count == 20){
            setDisplay(error_message);
        }else{
            setCount(count+1);
            setDisplay(count);
        }
    }

    function decrement(){
        if(count < 0){
            setDisplay(error_message);
            setCount(0);
        }else{
            setCount(count-1);
            setDisplay(count);
        }
    }

    return (
        <div className="counter">
            <p className="heading-name">Counter</p>
            <p className="heading-name">Current Value</p>
            <p className="count-value"> {display}</p>
            <button onClick={increment}>Increase Count</button>
            <button onClick={decrement}>Decrease Count</button>
        </div>
    )
}

export default Counter