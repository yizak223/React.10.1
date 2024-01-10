import  { useState } from "react";
import './Counter.css';
function Counter(props) {
    const [count, setCount] = useState(8);
    // let counter=0;
    return (
        <div className="Container">
            <h1>{count}</h1>        
            <button onClick={()=>{
                setCount(count+1)
            }}>+</button>
            <button onClick={()=>{
                // console.log(counter);
                setCount(count-1)
            }}>-</button>
        </div>
        )
}
export default Counter