import React from "react";
import sofiaImg from "../images/Sofi.png";
import angelaImg from "../images/Angela.jpg";
import memoriesPic from "../images/memories.png";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import { linkedin } from "react-icons-kit/icomoon/linkedin";

export default function About() {
  return (
    <div id="about">
      <h1 className="main-title">About us</h1>
      <div id="about-app">
        <h2>What´s TravelStories?</h2>
        <img src={memoriesPic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          provident consectetur facilis repellat similique odio consequuntur
          ullam facere dolorem laboriosam, nobis nam velit esse asperiores. Nisi
          nostrum eius tenetur aut!
        </p>
      </div>
      <h2>Meet our team!</h2>
      <div id="team">
        <div className="developer">
          <img src={sofiaImg} alt="Sofia" />
          <h3>Sofia Morales</h3>
          <div className="team-icons">
            <Link to={"https://github.com/somorales"}>
              <Icon icon={github} />
            </Link>
            <Link to={"https://www.linkedin.com/in/sofimorales"}>
              <Icon icon={linkedin} />
            </Link>
          </div>
        </div>

        <div className="developer">
          <img src={angelaImg} alt="Angela" />
          <h3>Angela Ruiz</h3>
          <div className="team-icons">
            <Link to={"https://https://github.com/anruiz-r"}>
              <Icon icon={github} />
            </Link>
            <Link to={"https://www.linkedin.com/in/angela-ruiz-rodriguez"}>
              <Icon icon={linkedin} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
