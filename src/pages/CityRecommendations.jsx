import axios from 'axios'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function CityRecommendations(props) {
  const {cities}= props
  const [recommendations, setRecommendations]= useState([])
  const params = useParams()



useEffect(()=>{
  axios.get(`${import.meta.env.VITE_SERVER_URL}/recommendations`)
  .then ((response)=>{
    setRecommendations(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
}, [])


console.log("params", params)
console.log(cities)
console.log("llamada recomendaciones", recommendations)

const currentCity= cities.find((eachCity)=>{
  return eachCity.city === params.city
})

console.log("current city",currentCity)

const cityRecommendations= recommendations.filter((eachRecommendation)=>{
  return eachRecommendation.cityId === currentCity.id
})

console.log("recomendaciones de esta ciudad", cityRecommendations)

    return (
      <div id='cityRecommendation-screen'>

      <div id='city-info'>
        <h1>{currentCity.city}</h1>
        <p>{currentCity.tip}</p>
      </div>

      { cityRecommendations.length === 0 ? (
        <h2>Oops, sorry, we still dont have nothing to recommend you at this city 🙃</h2>
      ) : (
      
      cityRecommendations.map((recommendation)=>{
        return(
          <Link to={`/${currentCity.city}/${currentCity.id}/recommendations/${recommendation.id}`}><div className='recommendation-card'>
            <h2>{recommendation.title}</h2>
            <p>{recommendation.description}</p>
            <p>{recommendation.date}</p>
            <p>{recommendation.companion}</p>
            <p>{recommendation.usuario}</p>
          </div>
          </Link>
        )
      })
    )
    }
      </div>
  )

}

export default CityRecommendations
