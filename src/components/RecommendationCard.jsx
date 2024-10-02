import React from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import { useState } from "react";

function RecommendationCard(props) {
  const { recommendation, currentCity } = props;

  const [isFlipped, setIsFlippled] = useState(false);

  function flipCard() {
    setIsFlippled(!isFlipped);
  }
  return (
    <>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <div onClick={flipCard} key={recommendation.id} className="postcard">
          <h3>{recommendation.title}</h3>
          <div id="postcard-image"><img src={recommendation.image} alt={recommendation.title} /></div>
          <p>From: {recommendation.usuario}</p>
        </div>

        <div
          onClick={flipCard}
          key={recommendation.id}
          className="postcard-back"
        >
          <div className="postcard-content">
            <div className="postcard-left">

              <p>{new Intl.DateTimeFormat("es-ES").format(Date.parse(recommendation.date))}</p>
              <p>{recommendation.description}</p>
            </div>
            <div className="postcard-right">
              <div className="stamps"><img src={recommendation.stamp}/></div>
              <div className="postcard-tags">
              <p>{recommendation.title}</p>
              <p>{recommendation.companion}</p>
              <p>{recommendation.category}</p>
              </div>
            </div>
          </div>
          <Link
            to={`/${currentCity.city}/${currentCity.id}/recommendations/${recommendation.id}`}
          >
            <button>Ver más</button>
          </Link>
        </div>
      </ReactCardFlip>
    </>
  );
}

export default RecommendationCard;
