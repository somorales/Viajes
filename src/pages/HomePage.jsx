import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CityCard from '../components/CityCard'
import { Link } from 'react-router-dom'


function HomePage(props) {
    
  const {cities}=props

  console.log(cities)


  return (
    <>
    <h1>Choose a city</h1>
    <div id='cities-box'>
      {cities.map((eachCity)=>{

        return (
          <Link to={`/${eachCity.city}`}> <CityCard key={eachCity.id} eachCity={eachCity}/></Link>
        )
      })}
    </div>
    </>
  )
}

export default HomePage
