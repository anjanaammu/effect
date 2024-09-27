import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState('');
    const handleSubmit=(event)=>{
        event.preventDefault(); //prevent page refresh 

        alert(`Hello,${name}!`);
    }; 
  return (
   <form onSubmit={handleSubmit}>
    <input type='text' placeholder='enter your name 'value={name}
    onChange={(e)=>setName(e.target.value)}/> 
    {/* //update name on input change */}
    <button tyoe="submit">Submit</button>

   </form>
  );
}

export default Form;