import React from "react";
import CityCard from "../components/CityCard";
import { Link } from "react-router-dom";
import memoriesPic from "../images/memories.png";

function HomePage(props) {
  const { cities } = props;

  return (
    <>
      <div id="home-header" style={{ backgroundImage: `url(${memoriesPic})` }}>
        <div id="home-header-bg">
          <p style={{ fontFamily: "ShineTypewriter" }}>
            Tell us your story, create new ones.
          </p>
        </div>
      </div>
      <div>
        <h1 className="main-title">Choose a city</h1>
        <div id="cities-box">
          {cities.map((eachCity) => {
            return (
              <Link key={eachCity.id} to={`/${eachCity.city}`}>
                <CityCard eachCity={eachCity} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
