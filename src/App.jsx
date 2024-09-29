import { useState } from 'react'
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

  return(

  <>
  <NavBar/>
    
  <Routes>

  <Route path="/" element={<HomePage />} />
  <Route path="/cities/:city" element={<CityRecommendations />} />
  <Route path="/cities/:city/recommendations/:recommendationId" element={<RecommendationDetails />} />
  <Route path="/cities/:city/create" element={<CreateRecommendation />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<Error />} />
  <Route path="/cities/:city/recommendations/:recommendationId/edit" element={<EditRecommendation />} />
  <Route path="preview" element={<CardPreview />} />

  </Routes>
  
  <Footer />
   </>
   

  )
}
  


export default App
