import React from 'react'

function CityCard(props) {

  const {eachCity} = props

  return (
    <div className='city-card' key={eachCity.id}  style={{backgroundImage:`url(${eachCity.image})`}}>
      <h2>{eachCity.city}</h2>
    </div>
  )
}

export default CityCard
