import React, { useState } from 'react';
import TodoItem from './TodoItem'
function App(){
const [input, setInput] = useState('');
const [inputArr , setInputArr] = useState([])

    return(
        <>
        <label>Enter a todo item:</label>
        <input type='text' value={input} onInput={(e)=>{setInput(e.target.value); }} />
        <button onClick ={()=>{setInputArr([input, ...inputArr]); console.log(inputArr)}}>Submit</button>
        {inputArr.map((item)=>{
            return (
            <TodoItem key = {Math.floor(Math.random()*1000)} todo = {item} />
            )
        }
    )}
        
        </>
    )
}

export default App;