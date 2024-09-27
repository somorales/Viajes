import { useState } from 'react'
import './App.css'
import{ Routes, Route } from 'react-router-dom'

function App() {


  return(

  <>
  <Navbar/>
    
  <Routes>

  <Route path="/" element={<HomePage />} />
  <Route path="/:city" element={<CityRecomendation />} />
  <Route path="/:recomendationId" element={<RecomendationDetails />} />
  <Route path="/create" element={<CreateRecomendation />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<Error />} />
  <Route path="/edit" element={<EditRecomendation />} />
  <Route path="preview" element={<CardPreview />} />

  </Routes>
  
  <Footer />
   </>
   

  )
}
  


export default App
