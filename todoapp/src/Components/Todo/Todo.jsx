import React, { useState } from 'react';
import './Todo.css';
import Footer from '../Footer/Footer';

export default function Todo() {
    const [todo, setTodo] = useState(""); // State for the input value
    const [arr, setArrayObj] = useState([]); // State for the array of todo

    const [total_count, setTotalCount] = useState(0)
    function handleData() {
        let newObj = null; // Initialize newObj here
    
        if (todo !== "") {
            newObj = { input: todo };
    
            // Create a new array by adding the new object
            const newArray = [...arr, newObj];
    
            // Update the state with the new array
            setArrayObj(newArray);
    
            // Log the updated array
            console.log(newArray);
    
            // Clear the input field
            setTodo("");
            setTotalCount(total_count + 1);
        } else {
            // Log an error message if todo is empty
            window.alert("Todo is Invalid or It is Empty");
        }
    }
    
    function renderItems() {
        return arr.map((item) => {
            if (item.input !== "") {
                return <h3 className="words" key={item.input}>{item.input}</h3>;
            }
            return null; // Return null if the condition is not met
        });
    }

    return (
        <>
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
                    {arr.map((item) => (
                        item.input !== "" ? <div><h3 className="words" key={item.input}>{item.input}</h3><div className="done"></div> </div>: null

                        
                    ))}
                </ul>

                </div>
            </div>
            <Footer className = "footer" count = {total_count}/>
        </>
    );
}
