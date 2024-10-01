import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function RecommendationDetails() {
  let navigate = useNavigate();
  const params = useParams();
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/recommendations/${
          params.recommendationId
        }`
      )
      .then((response) => {
        setRecommendation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (recommendation === null) {
    return <h3>...loading</h3>;
  }

  const handleDelete = (event) => {
    axios
      .delete(
        `${import.meta.env.VITE_SERVER_URL}/recommendations/${
          params.recommendationId
        }`
      )
      .then((response) => {
        navigate(`/${params.city}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="details-container">
      <div>
        <img className="image-conteiner" src={recommendation.image} alt="foto" />
      </div>
      <div> recomendation</div>
      <div>
        <h1>{recommendation.title}</h1>
        <h2>{recommendation.description}</h2>
        <h3>{recommendation.date}</h3>
        <h3>{recommendation.companion}</h3>
        <h3>{recommendation.usuario}</h3>
        <h3>{recommendation.category}</h3>
      </div>

      <div>
        <button
          className="boton-borrar boton-secundario boton-mas-ancho"
          onClick={handleDelete}
        >
          Delete
        </button>

        <Link
          to={`/${params.city}/${params.cityId}/recommendations/${params.recommendationId}/edit`}
        >
          <button className="boton-editar boton-mas-ancho">edit</button>
        </Link>
      </div>
    </div>
  );
}
