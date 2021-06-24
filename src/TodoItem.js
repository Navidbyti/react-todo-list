import React, { useState } from 'react'

function TodoItem (props){
    const[checkState, setCheckState] = useState(false);
    return(
        
    <div className="todo-container">
        <p>TODO: {props.todo}</p>
        <input type="checkbox" onChange = {()=>{setCheckState(!checkState); console.log(checkState)}}  checked={checkState}/>
    </div>
    )
}

export default TodoItem