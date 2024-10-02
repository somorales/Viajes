import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreateRecommendation(props) {
  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [companion, setCompanion] = useState("");
  const [usuario, setUsuario] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [stamps, setStamps] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [stamp, setStamp] = useState("");
  const [city, setCity] = useState("");
  const [citySelected, setCitySelected] = useState(undefined);

  const handleChangeStamp = (evento) => {
    let value = evento.target.src;
    setStamp(value);
  };

  const handleNext = (e) => {
    e.preventDefault();
    return setActiveStep(activeStep + 1);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    return setActiveStep(activeStep - 1);
  };

  const handelTitleChange = (evento) => {
    let value = evento.target.value;
    setTitle(value);
  };

  const handelDescriptionChange = (evento) => {
    let value = evento.target.value;
    setDescription(value);
  };

  const handelDateChange = (evento) => {
    let value = evento.target.value;
    setDate(value);
  };

  const handelCompanionChange = (evento) => {
    let value = evento.target.value;
    setCompanion(value);
  };

  const handelUsuarioChange = (evento) => {
    let value = evento.target.value;
    setUsuario(value);
  };

  const handelCategoryChange = (evento) => {
    let value = evento.target.value;
    setCategory(value);
  };

  const handelImageChange = (evento) => {
    let value = evento.target.value;
    setImage(value);
  };

  const handleCityChange = (evento) => {
    let value = evento.target.value;
    setCity(value);

    // para estampas
    let citySelected = props.cities.find((eachCity) => {
      return eachCity.id === value;
    });
    setCitySelected(citySelected);
    setStamps(citySelected.stamps);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      description === "" ||
      date === "" ||
      companion === "" ||
      usuario == "" ||
      category === "" ||
      image === ""
    ) {
      alert("completar todos los campos");
      return;
    }

    const newRecommendation = {
      cityId: city,
      title: title,
      description: description,
      date: date,
      companion: companion,
      usuario: usuario,
      category: category,
      image: image,
      stamp:stamp,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/recommendations`,
        newRecommendation
      );

      navigate(`/${citySelected.city}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className="container-form" >
      <div >
        <form onSubmit={handleSubmit} className="form">
          <h1>Create TravelStories</h1>
          {activeStep === 0 && (
            <div>
              <div>
                <label>
                  <div>Title</div>
                  <input
                    value={title}
                    onChange={handelTitleChange}
                    name="titulo"
                    type="text"
                    placeholder="Give your travel story a name"
                    required
                  />
                </label>
                <div className="contenedor-label-fila">
                  <label>
                    <div>From</div>
                    <input
                      value={usuario}
                      onChange={handelUsuarioChange}
                      name="usuario"
                      type="text"
                      placeholder="your name"
                      required
                    />
                  </label>

                  <label>
                    <div>Select the City</div>
                    <select
                      name="city"
                      value={city}
                      onChange={handleCityChange}
                      required
                    >
                      <option value="">---</option>

                      {props.cities.map((eachCity, index) => {
                        return (
                          <option value={eachCity.id} key={index}>
                            {eachCity.city}
                          </option>
                        );
                      })}
                    </select>
                  </label>
                </div>

                <div>
                  <label>
                    <div>Description</div>
                    <textarea
                      value={description}
                      onChange={handelDescriptionChange}
                      name="descripción"
                      type="text"
                      placeholder="Tell us about this place, what were your experiences that you want to remember, in which part of the city it is and why you recommend it."
                      required
                    />
                  </label>
                </div>

                <label>
                  <div> Image </div>

                  <input
                    value={image}
                    onChange={handelImageChange}
                    name="image"
                    type="url"
                    placeholder="Save an image you want to remember "
                    required
                  />
                </label>
              </div>

              <div className="contenedor-botones">
                <div className="contenedor-boton">
                  <button onClick={handleNext}>Next</button>
                </div>
              </div>
            </div>
          )}
          {activeStep === 1 && (
            <div>
               <div>Select the stamp</div>
              <div className="conteiner-stamp">
               
                {stamps.map((eachStamp, index) => {
                  return (
                    <img
                      width={110}
                      className={
                        stamp === eachStamp ? "stamp-seleccionado" : ""
                      }
                      onClick={handleChangeStamp}
                      src={eachStamp}
                      alt="foto"
                      key={index}
                    />
                  );
                })}
              </div>

              <div className="contenedor-label-fila">
                <label>
                  <div>Companion</div>
                  <select
                    name="companion"
                    value={companion}
                    onChange={handelCompanionChange}
                    required
                  >
                    <option value="">---</option>
                    <option value="family">Family</option>
                    <option value="traveler">Solo Traveler</option>
                    <option value="pets">Pets</option>
                    <option value="patner">Patner</option>
                    <option value="friends">Friends</option>
                  </select>
                </label>

                <label>
                  <div> Date </div>
                  <input
                    value={date}
                    onChange={handelDateChange}
                    name="date"
                    type="date"
                    placeholder=""
                    required
                  />
                </label>
              </div>

              <div>
                <label>
                  <div>Category</div>
                  <select
                    name="category"
                    value={category}
                    onChange={handelCategoryChange}
                    required
                  >
                    <option value="">---</option>
                    <option value="experience">Experience</option>
                    <option value="hidden places ">Hidden Places</option>
                    <option value="food & drinks">Food & Drinks</option>
                  </select>
                </label>
              </div>

              <div className="contenedor-botones">
                <div className="contenedor-boton">
                  <button onClick={handlePrev}>Prev</button>
                </div>
                <div className="contenedor-boton">
                  <button onClick={handleNext}>Next</button>
                </div>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div>
               <img width={150} src={image} />
              <div>{title}</div>
              <div>{description}</div>
              <div>{new Intl.DateTimeFormat("es-ES").format(Date.parse(recommendation.date))}</div>
              <div>{companion}</div>
              <div>{category}</div>
              <img width={150} src={stamp} />
              <div>{usuario}</div>

              <div className="contenedor-botones">
                <div className="contenedor-boton">
                  <Link to={`/`}>
                    <button className="boton-secundario">Cancel</button>
                  </Link>
                </div>
                <div className="contenedor-boton">
                  <button onClick={handlePrev}>Prev</button>
                </div>
                <div className="contenedor-boton">
                  <button type="submit">Create</button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
