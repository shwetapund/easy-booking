import "./MovieCard.css"
import { Link, json } from "react-router-dom"

function MovieCard({ _id, Imageurl, rating, movieType, title,language ,remove}) {

  const admin = JSON.parse(localStorage.getItem('admin')||"{}")
  return (

    <>
      <div className="movie-Contanier">


        <img src={Imageurl} alt="" className="img" />
        <div className="imfo-div">
          <span className="title">{title}</span>
          {admin.email ? <><span 
            onClick={()=>{remove(_id)}} className="delete-btn"
           >❌</span></>:null}
          <span className="movietype">{movieType}</span>
           <Link to={`/bookingTicket/${_id}`} className="link"> BOOK TICKET</Link>
          
        </div>
        
      </div>

   </>

  )
}

export default MovieCard
