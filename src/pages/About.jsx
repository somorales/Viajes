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
          TravelStories is an app designed to let you capture and share the most
          memorable moments from your travels, turning them into digital
          postcards. Each user can create their own collection of experiences,
          recommending places, food, and activities to other travelers. This
          way, those who follow you can discover new destinations through your
          eyes and plan their next adventures based on authentic, personal
          recommendations. Whether it's a hidden corner of a city, a unique
          restaurant, or an unmissable experience, TravelStories helps you share
          and relive those special moments, connecting travelers from around the
          world.
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
