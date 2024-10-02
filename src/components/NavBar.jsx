import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (

    <div>
    <div className="containerNavbar">
      <div className="contentNavbar">
        <div className="containerLogoNavbar">
          <h1>TravelStories</h1>
        </div>
        <div className="containerLink">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
       
        <Link to={"/create"} style={{ textDecoration: "none" }}> 
            <li>Create TravelStories</li>
        </Link>
        </div>
    </div>
    <div className="navbar-linea"></div>
    </div>
  </div>
);
}



    