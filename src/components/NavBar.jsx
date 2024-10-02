import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
<>
    <div className="containerNavbar">
      <nav className="nav-bar">
        <div className="nav-bar-logo">
        <Link to={"/"}><h1>TravelStories</h1></Link>
        </div>
        <ul className="nav-bar-links">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
        </ul>
    </nav>
    <div className="navbar-linea"></div>
    </div>
    </>
);
}



    