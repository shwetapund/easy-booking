import "./MovieCard.css"
import { Link } from "react-router-dom"

function MovieCard({ _id, Imageurl, rating, movieType, title,language }) {
  return (

    <>
      <div className="movie-Contanier">

        <img src={Imageurl} alt="" className="img" />
        <div className="imfo-div">
          <span className="title">{title}</span>
           
          <span className="movietype">{movieType}</span>
           <Link to={`/booking/${_id}`} className="link"> BOOK TICKET</Link>
        
        </div>
      </div>

   </>

  )
}

export default MovieCard
