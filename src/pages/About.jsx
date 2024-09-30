import React from 'react'
import sofiaImg from '../images/Sofi.png'
import angelaImg from '../images/Angela.jpg'

export default function About() {
  return (
    <div>
    <div className='developer'>
      <img src={sofiaImg} alt="Sofia" />
      <h3>Sofia Morales</h3>
      <a href="www.linkedin.com/in/sofimorales">LinkedIn</a>
      <a href="https://github.com/somorales">GitHub</a>
    </div>

    <div className='developer'>
      <img src={angelaImgImg} alt="Angela" />
      <h3>Angela Ruiz</h3>
      <a href="www.linkedin.com/in/sofimorales">LinkedIn</a>
      <a href="https://github.com/somorales">GitHub</a>
    </div>
  </div>
  )
}
