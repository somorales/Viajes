import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";



export default function RecommendationDetails() {

  let navigate = useNavigate();
  const params = useParams();
  const [recommendation, setRecommendation] = useState(null)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/recommendations/${params.recommendationId}`)
      .then((response) => {

        setRecommendation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  if (recommendation === null) {
    return (<h3>...loading</h3>)
  }

  const handleDelete = (event) => {

    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/recommendations/${params.recommendationId}`)
      .then((response) => {

        navigate(`/${params.city}`);

      })
      .catch((error) => {
        console.log(error);
      });






  };



  return (
    <div>
      <div className='postal-card-container-main'>
        <div className="postal-card-container">
          <img src={recommendation.image} alt="foto" />
          <h1> {recommendation.title}</h1>

          <div className='postal-body-container'>
            <div className='postal-body right'>
              <div className='right-container'>
                <p className='description'>{recommendation.description}</p>
              </div>
              <div className='right-container'>
                <p className='description'><b>from:</b> {recommendation.usuario}</p>
              </div>
            </div>
            <div className='postal-body'>
              <div className='stamp-container'>
                <img src={recommendation.stamp} />
              </div>
              <div className='paragraph-container'>
                <p><b>Date: </b>{recommendation.date}</p>
                <p><b>Category: </b>{recommendation.category}</p>
                <p><b>Companion: </b>{recommendation.companion}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='buttons-container-main'>
        <div className='buttons-container'>
          <button
            className="boton-borrar boton-secundario boton-mas-ancho"
            onClick={handleDelete}
          >
            Delete
          </button>

          <Link to={`/${params.city}/${params.cityId}/recommendations/${params.recommendationId}/edit`}>
            <button className="boton-editar boton-mas-ancho">
              edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
