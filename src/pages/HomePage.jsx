import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CityCard from "../components/CityCard";
import { Link } from "react-router-dom";

function HomePage(props) {
  const { cities } = props;

  console.log(cities);

  return (
    <>
      <div id="home-header">
        <p>Tell us your story, create new ones.</p>
      </div>
      <div>
        <h1 className="main-title">Choose a city</h1>
        <div id="cities-box">
          {cities.map((eachCity) => {
            return (
              <Link to={`/${eachCity.city}`}>
                {" "}
                <CityCard key={eachCity.id} eachCity={eachCity} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
