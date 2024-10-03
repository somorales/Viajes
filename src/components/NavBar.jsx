import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import {iosContact} from 'react-icons-kit/ionicons/iosContact'


export default function NavBar() {
  return (
<>
    <div className="containerNavbar">
      <nav className="nav-bar">
        <div className="nav-bar-logo">
        <Link to={"/"}><h1 style={{fontFamily: "Curly Writing"}}>TravelStories</h1></Link>
        </div>
        <ul className="nav-bar-links">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
          <div className="user-icons">
          <Link to={"/favs"}>
              <Icon icon={iosContact} size={35} />
            </Link>
            </div>
        </ul>
    </nav>
    <div className="navbar-linea"></div>
    </div>
    </>
);
}



    