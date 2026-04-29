import {  useState } from "react";

function counter() {
    const [count, setCount] = useState=(0);
    const [rcount, setRcount] = useState=(10);
    return (
        <>
        <h1>Count:{count}</h1>

        <button onClick={() => setCount (count+1)} >Increase</button>
        <button onClick={() => setRcount (rcount-1)} >Decrease</button>
        </>
    );
}
export default counter;