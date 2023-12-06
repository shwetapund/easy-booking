import "./MovieCard.css"
import { Link } from "react-router-dom"

function MovieCard({_id,Imageurl,rating,movieType,title}) {
  return (
   <>
       <div className="movie-Contanier">
        {_id}
           <img src={Imageurl} alt="" className="img" />
            <div className="rating">
            <span className="rating-text"> ⭐{rating}</span>
            <span>{movieType} </span>
            </div>   
            <strong className="movie-title">{title} </strong>  

            <Link to={`/booking/${_id}`}> book</Link>     
       </div>
   </>
  )
}

export default MovieCard
