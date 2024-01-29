import React from 'react'
import pink from '../assets/unsplash_c1rOy44wuts.png'
import blue from '../assets/unsplash_XeYx043QD5U.png'
import './Photos.scss'

const Photos = () => {
  return (
      <div>
          <h2>Photos</h2>
          <p>See All</p>
          <div>
              <img src={ pink } alt="pink pic" />
              <img src={blue} alt="blue pic" />
          </div>
    </div>
  )
}

export default Photos