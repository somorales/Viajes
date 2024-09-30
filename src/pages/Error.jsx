import React from 'react'
import planeIcon from '../images/plane-icon.png'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <p>Oops, I think your dream trip it´s the other way around, dear. Just click the button and we´ll drive you home</p>
      <img src={planeIcon} alt="icon" />

      <Link to={"/"}><button>Back home</button></Link>
    </div>
  )
}

export default Error
