import React, {useState,useEffect} from 'react';
function Component(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        alert("Component has been updated");
    },[count]);
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count + 1)}>
                Increment Count
            </button>
        </div>
    )
}
export default Component;