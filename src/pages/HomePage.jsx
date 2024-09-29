import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CityCard from '../components/CityCard'
import { Link } from 'react-router-dom'


function HomePage() {
  const [cities, setCities] = useState([])

  useEffect(()=> {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/cities`)
    .then((response)=>{
      setCities(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })

  }, [])
   

  console.log(cities)


  return (
    <>
    <h1>Choose a city</h1>
    <div id='cities-box'>
      {cities.map((eachCity, index)=>{

        return (
          <Link to={`/cities/${eachCity}`}> <CityCard  eachCity={eachCity} key={index}/></Link>
        )
      })}
    </div>
    </>
  )
}

export default HomePage
