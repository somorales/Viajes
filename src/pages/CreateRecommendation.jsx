import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreateRecommendation() {
  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [companion, setCompanion] = useState("");
  const [usuario, setUsuario] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

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

    const newRecommendation = {
      cityId: params.city,
      title: title,
      description: description,
      date: date,
      companion: companion,
      usuario: usuario,
      category: category,
      image: image,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/recommendations`,
        newRecommendation
      );

      //usamos params para sacar el identificador de la ciudad de la url
      navigate(`/cities/${params.city}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="contenedor-formulario">
        <form onSubmit={handleSubmit} className="formulario">
          <h1>Post a Recommendation</h1>
          <div>
            <label>
              <div>Title</div>
              <input
                value={title}
                onChange={handelTitleChange}
                name="titulo"
                type="text"
                placeholder="el nombre de la recomendación"
                required
              />
            </label>

            <label>
              <div>Usuario</div>
              <input
                value={usuario}
                onChange={handelUsuarioChange}
                name="usuario"
                type="text"
                placeholder=""
                required
              />
            </label>

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
                  <option value="traveler">Traveler</option>
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
                 <option value="">---</option>       
                <option value="experience">Experience</option>
                <option value="hidden places ">Hidden</option>
                <option value="food & drinks">Food & Drinks</option>
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
                placeholder=""
                required
              />
            </label>


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
              <Link to={`/cities/${params.city}`}>
                <button className="boton-secundario">Cancel</button>
              </Link>
            </div>
            <div className="contenedor-boton">
              <button type="submit">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
