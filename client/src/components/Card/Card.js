import React from 'react'
import "./Card.css"
import git from "./../../views/About/git.png"
import linkdin from "./../../views/About/linkdin.png"
import peerlist from "./../../views/About/peerlist.jpeg"
function Card({name,img,description}) {
  return (
    <div className='card-container'>
        <img className='group-imge' src={img}/>
        <h2 className='text-center'>{name}</h2>
        <p className='dec'>{description}</p>
        <hr/>
        <div className='logo-container'>
          <img className='socil-logo' src={git}/>
          <img className='socil-logo' src={peerlist}/>
          <img className='socil-logo' src={linkdin}/>
          
        </div>
    </div>
  )
}

export default Card