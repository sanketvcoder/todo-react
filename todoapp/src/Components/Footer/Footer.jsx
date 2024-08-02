import React from 'react'
import './Footer.css'
export default function Footer({count}) {
  return (
    <div className = "footer">
      {
        <div className="total_todo"><h1>Total Todo : {count}</h1></div>

      }
      <div className="completed_todo"><h1>Completed Todo : </h1></div>
    </div>
  )
}
