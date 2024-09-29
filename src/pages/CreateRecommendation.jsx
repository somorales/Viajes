import React from 'react'
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "App.css";
import { Link } from "react-router-dom";

export default function CreateRecommendation() {

  const params= useParams()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState("");







  return (
    <div>
      
    </div>
  )
}
