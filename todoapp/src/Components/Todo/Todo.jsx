import React ,{useState} from 'react'
import './Todo.css'
export default function Todo() {
    const [todo, setValue] = useState("")
  return (
    <div className = "main">
        <div className="input-btn">
            <input className='input-bx' value = {todo} type="text" />
            <button className = 'btn-bx'>Submit</button>

        </div>
    </div>
  )
}
