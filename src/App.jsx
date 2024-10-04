import { useState, useEffect } from "react";
import axios from "axios";
import "react-tiny-fab/dist/styles.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CityRecommendations from "./pages/CityRecommendations";
import RecommendationDetails from "./pages/RecommendationDetails";
import CreateRecommendation from "./pages/CreateRecommendation";
import About from "./pages/About";
import Error from "./pages/Error";
import EditRecommendation from "./pages/EditRecommendation";
import Footer from "./components/Footer";
import { Fab } from "react-tiny-fab";
import { useNavigate } from "react-router-dom";
import Favs from "./pages/Favs";
import { DotLoader } from "react-spinners";

function App() {
  console.log("URL backend", import.meta.env.VITE_SERVER_URL);

  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/cities`)
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const abStyles = {
    position: "absolute",
    top: "0px",
    right: "100%",
    padding: "10px",
    boxShadow: "2px 2px 7px 1px rgba(54, 65, 82, 0.5)",
    backgroundColor: "#EEEEEE",
    borderRadius: "15px",
    border: "1px solid rgb(17, 24, 39)",
  };

  const handleCreateClick = () => {
    navigate("/create");
  };

  const [favs, setFavs] = useState([]);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage cities={cities} />} />
        <Route
          path="/:city"
          element={
            <CityRecommendations
              cities={cities}
              favs={favs}
              setFavs={setFavs}
            />
          }
        />
        <Route
          path="/:city/:cityId/recommendations/:recommendationId"
          element={<RecommendationDetails />}
        />
        <Route
          path="/create"
          element={<CreateRecommendation cities={cities} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/:city/:cityId/recommendations/:recommendationId/edit"
          element={<EditRecommendation />}
        />
        <Route path="*" element={<Error />} />
        <Route path="/favs" element={<Favs favs={favs} setFavs={setFavs} />} />
      </Routes>
      {cities.length === 0 ? (
        <div className="spinner-container">
          <DotLoader color="#f05a7e" />{" "}
        </div>
      ) : (
        ""
      )}
      <Fab
        icon={"+"}
        alwaysShowTitle={true}
        onClick={handleCreateClick}
        style={{ bottom: "40px", right: "50px" }}
      >
        <div style={abStyles}>
          <div style={{ display: "flex", margin: 6 }}>Create TravelStories</div>
        </div>
      </Fab>

      <Footer />
    </>
  );
}

export default App;
