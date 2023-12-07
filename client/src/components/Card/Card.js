import React from 'react'
import "./Card.css"
function Card({name,img,description}) {
  return (
    <div className='card-container'>
        <img className='group-imge' src={img}/>
        <h2 className='text-center'>{name}</h2>
        <p className='dec'>{description}</p>
    </div>
  )
}

export default Card