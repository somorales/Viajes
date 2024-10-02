import React from "react";
import sofiaImg from "../images/Sofi.png";
import angelaImg from "../images/Angela.jpg";
import memoriesPic from "../images/memories.png";

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
          <a href="www.linkedin.com/in/sofimorales">LinkedIn</a>
          <a href="https://github.com/somorales">GitHub</a>
        </div>

        <div className="developer">
          <img src={angelaImg} alt="Angela" />
          <h3>Angela Ruiz</h3>
          <a href="www.linkedin.com/in/sofimorales">LinkedIn</a>
          <a href="https://github.com/somorales">GitHub</a>
        </div>
      </div>
    </div>
  );
}
