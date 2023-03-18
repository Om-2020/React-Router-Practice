import './App.css';
import {Routes, Route} from "react-router-dom";
import Contact from './Contact';
import Home from "./Home";
import About from './About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
  );
}

export default App;
