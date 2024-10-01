import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img src="" alt="" /> Inicio
      </Link>
      <h1> TravelStories</h1>

      <div id="burger-menu">
        Menu
        <ul>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/create"}>
            <li>Create recommendation</li>
          </Link>
        </ul>
        <div />
      </div>
    </nav>
  );
}
