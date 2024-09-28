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


  return(

  <>
  <NavBar/>
    
  <Routes>

  <Route path="/" element={<HomePage />} />
  <Route path="/:city" element={<CityRecommendations />} />
  <Route path="/:recommendationId" element={<RecommendationDetails />} />
  <Route path="/create" element={<CreateRecommendation />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<Error />} />
  <Route path="/edit" element={<EditRecommendation />} />
  <Route path="preview" element={<CardPreview />} />

  </Routes>
  
  <Footer />
   </>
   

  )
}
  


export default App
