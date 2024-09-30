import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        {" "}
        <img src="" alt="" />{" "}
      </Link>
      <h1> TravelStories</h1>
      <div id="burger-menu">
        menu
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
