import React from "react";

export default function CityHeader(props) {
  const { currentCity } = props;
  return (
    <div
      id="city-info"
      style={{ backgroundImage: `url(${currentCity.image})` }}
    >
      <div className="city-info-bg">
        <h1>{currentCity.city}</h1>
        <p>{currentCity.fact}</p>
        <p>{currentCity.tip}</p>
      </div>
    </div>
  );
}
