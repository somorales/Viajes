import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import{ Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import CityRecommendations from './pages/CityRecommendations'
import RecommendationDetails from './pages/RecommendationDetails'
import CreateRecommendation from './pages/CreateRecommendation'
import About from './pages/About'
import Error from './pages/Error'
import EditRecommendation from './pages/EditRecommendation'
import CardPreview from './pages/CardPreview'
import Footer from './components/Footer'



function App() {
  console.log("URL backend", import.meta.env.VITE_SERVER_URL)

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

  return(

  <>
  <NavBar/>
    
  <Routes>

  <Route path="/" element={<HomePage cities ={cities}/>} />
  <Route path="/:city" element={<CityRecommendations cities={cities} />} />
  <Route path="/:city/recommendations/:recommendationId" element={<RecommendationDetails />} />
  <Route path="/create" element={<CreateRecommendation />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<Error />} />
  <Route path="/:city/recommendations/:recommendationId/edit" element={<EditRecommendation />} />
  <Route path="preview" element={<CardPreview />} />

  </Routes>
  
  <Footer />
   </>
   

  )
}
  


export default App
