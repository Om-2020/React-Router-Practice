import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h1>This is Contact Page</h1>
        <Link to='/'>Home</Link> 
        <br></br>
        <Link to='/About'>About</Link>
        

    </div>
  )
}

export default Contact