import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {

    const navigate = useNavigate();
    const id = 10;
    function gotoAbout(params) {
        navigate("/About",{state :{key:id}});
    }
  return (
    <div>
        <h1>This is Home page</h1>
        {/*<Link to='/About'>About</Link>
        <br></br>
        <Link to='Contact'>Contact Us</Link>*/
        }
        <button onClick={gotoAbout}>About</button>

    </div>
  )
}

export default Home