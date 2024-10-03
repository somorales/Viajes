import React from "react";
import FavCard from "../components/FavCard"
import { Link } from "react-router-dom";

function Favs(props) {
  const { favs, setFavs } = props;
  console.log("favoritos al cargar pagina", favs);

  return (
    <>
<div className="recommendation-screen">
      <h1 className="main-title">My travel</h1>
      <p>A space to inspire your next trip.</p>
      {favs.length === 0 ? (
       <div className="no-recommendations">
       <h2>
          Oops, it seems you didn´t save any postcard in your travels yet
          🙃
        </h2>
        <p>Check some recommendations filtered by city here:</p>
        <Link to={"/"}><button>Look around</button></Link>
        </div>
      ) : (favs.map((eachFav) => {
        return (<FavCard  key={eachFav.id} eachFav={eachFav} favs={favs} setFavs={setFavs}/>)
      })
          )}
    </div>
    </>
  );
}

export default Favs;
