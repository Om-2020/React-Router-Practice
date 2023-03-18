import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function About() {
    const location  = useLocation();
    
  return (
    <div>
        <h1>This is About Page my id is {location.state.key}</h1>
        <Link to='/'>Home</Link>
        <br></br>
        <Link to='/Contact'>Contact Us</Link>
    </div>
  )
}

export default About