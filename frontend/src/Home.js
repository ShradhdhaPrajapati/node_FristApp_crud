import React from "react";
import "./styles/Home.css";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div>
      <Dashboard />
      <div className="home-text">Home</div>
      <hr className="" />

      <p className="p-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      
    </div>
  );
};

export default Home;
