import React from "react";
import Sidenav from "./Sidenav";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

function App() {
  return (
    <Router>
      <div>
        <Sidenav />
        <NavigationMenu />
        <Routes>          
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" component={Dashboard} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
