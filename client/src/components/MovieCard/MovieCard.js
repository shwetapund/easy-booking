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

   <>
       <div className="movie-Contanier">
      
           <img src={Imageurl} alt="" className="img" />
            <div className="rating">
            <span className="rating-text"> ⭐{rating}</span>
            <span>{movieType} </span>
            </div>   
            <strong className="movie-title">{title} </strong>  

            <Link to={`/bookingTicket/${_id}`}> book</Link>     
       </div>
   </>

  )
}

export default MovieCard
