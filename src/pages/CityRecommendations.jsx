import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CityHeader from "../components/CityHeader";
import RecommendationCard from "../components/RecommendationCard";

function CityRecommendations(props) {
  const { cities } = props;
  const [recommendations, setRecommendations] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/recommendations`)
      .then((response) => {
        setRecommendations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("params", params);
  console.log(cities);
  console.log("llamada recomendaciones", recommendations);

  const currentCity = cities.find((eachCity) => {
    return eachCity.city === params.city;
  });

  console.log("current city", currentCity);

  const cityRecommendations = recommendations.filter((eachRecommendation) => {
    return eachRecommendation.cityId === currentCity.id;
  });

  console.log("recomendaciones de esta ciudad", cityRecommendations);

  return (
    <div id="cityRecommendation-screen">
      <CityHeader currentCity={currentCity} />

      {cityRecommendations.length === 0 ? (
        <h2>
          Oops, sorry, we still dont have nothing to recommend you at this city
          🙃
        </h2>
      ) : (
        cityRecommendations.map((recommendation) => {
          return (
            <RecommendationCard
              recommendation={recommendation}
              currentCity={currentCity}
            />
          );
        })
      )}
    </div>
  );
}

export default CityRecommendations;
