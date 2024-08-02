import React, { useState } from 'react';
import './Todo.css';

export default function Todo() {
    const [todo, setTodo] = useState(""); // State for the input value
    const [arr, setArrayObj] = useState([]); // State for the array of todos
    function handleData() {
        // Create a new object with the todo value
        const newObj = { input: todo };

        // Create a new array by adding the new object
        const newArray = [...arr, newObj];

        // Update the state with the new array
        setArrayObj(newArray);

        // Log the updated array
        console.log(newArray);

        // Clear the input field
        setTodo("");
    }

    return (
        <div className="main">
            <div className="first-box">
                <div className="input-btn">
                    <input
                        onChange={(e) => setTodo(e.target.value)}
                        className='input-bx'
                        value={todo}
                        type="text"
                    />
                    <button onClick={handleData} className='btn-bx'>Submit</button>
                </div>
            </div>
            <div className="sec-box">
                <ul>
                    {arr.map((item, index) => (
                        <li key={index}>{item.input}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
