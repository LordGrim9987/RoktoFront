import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import { BrowserRouter, Switch, Route, Routes, Link, NavLink } from "react-router-dom";
import Rokto from './Components/Rokto';
import Signup from './Components/Signup';

// Don't forget to change the document.title for the sign up and login pages. It's in video number 15.
// Don't forget to change the <a> and <href> to <Link> and <to>

function App() {
  return (
  <>
    <Navbar a1="Rokto" a2= "Volunteers" a3= "Log In" a4= "Find Blood" a5= "Donate" a6="Sign Up"/>                                                                             
    <BrowserRouter>
      <Routes>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Rokto" element={<Rokto/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
      </Routes>
   </BrowserRouter>    
  </>
  );
}

export default App;

