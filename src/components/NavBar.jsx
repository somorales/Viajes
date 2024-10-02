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
            <h5>Home</h5>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <h5>About</h5>
          </Link>
       
        <Link to={"/create"} style={{ textDecoration: "none" }}> 
            <h5>Create TravelStories</h5>
        </Link>
        </div>
    </div>
    <div className="navbar-linea"></div>
    </div>
  </div>
);
}



    