import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function EditRecommendation() {
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

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/cities/${params.cityId}`)
      .then((response) => {
        setStamps(response.data.stamps);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER_URL}/recommendations/${
          params.recommendationId
        }`
      )
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDate(response.data.date);
        setCompanion(response.data.companion);
        setUsuario(response.data.usuario);
        setCategory(response.data.category);
        setImage(response.data.image);
        setStamp(response.data.stamp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      alert("complete all fields");
      return;
    }

    const recommendacionEdit = {
      cityId: params.cityId,
      title: title,
      description: description,
      date: date,
      companion: companion,
      usuario: usuario,
      category: category,
      image: image,
      stamp: stamp,
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/recommendations/${
          params.recommendationId
        }`,
        recommendacionEdit
      );

      //usamos params para sacar el identificador de la ciudad de la url
      navigate(`/${params.city}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-form">
      <div >
        <form onSubmit={handleSubmit} className="form">
          <h1> Edit TravelStories</h1>
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
                    placeholder=""
                    required
                  />
                </label>

                <label>
                  <div>From</div>
                  <input
                    value={usuario}
                    onChange={handelUsuarioChange}
                    name="usuario"
                    type="text"
                    placeholder=""
                    required
                  />
                </label>

                <div>
                  <label>
                    <div>Description</div>
                    <textarea
                      value={description}
                      onChange={handelDescriptionChange}
                      name="descripción"
                      type="text"
                      placeholder=""
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
                    placeholder=""
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
              <div>
                <div>Select the stamp</div>
                {stamps.map((eachStamp, index) => {
                  return (
                    <img
                      width={150}
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
                    <option value="family">Family</option>
                    <option value="solo traveler">Solo Traveler</option>
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

              <div className="contenedor-label-fila">
                <label>
                  <div>Category</div>
                  <select
                    name="category"
                    value={category}
                    onChange={handelCategoryChange}
                    required
                  >
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
              <div>{title}</div>
              <div>{description}</div>
              <div>{date}</div>
              <div>{companion}</div>
              <div>{usuario}</div>
              <div>{category}</div>
              <img width={150} src={image} />
              <img width={150} src={stamp} />

              <div className="contenedor-botones">
                <div className="contenedor-boton">
                  <Link
                    to={`/${params.city}/${params.cityId}/recommendations/${params.recommendationId}`}
                  >
                    <button className="boton-secundario">Cancel</button>
                  </Link>
                </div>
                <div className="contenedor-boton">
                  <button onClick={handlePrev}>Prev</button>
                </div>
                <div className="contenedor-boton">
                  <button type="submit">Edit</button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
