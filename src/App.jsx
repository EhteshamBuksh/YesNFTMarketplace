import React from 'react';
// import Navbar from './Components/Navbar';
import './Styles/Navbar.css';
import Front from './Pages/Front'
import Connect from './Pages/Connect'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";const App = () => {
  return <>
 <Router>
   <Routes>
     <Route exact path ="/" element ={<Front/>} />
     <Route path = "/connect" element ={<Connect/>}/>
   </Routes>
 </Router>

  </>;
};

export default App;
