import "./MovieCard.css"

function MovieCard({Imageurl,rating,movieType,title}) {
  return (
   <>
       <div className="movie-Contanier">
           <img src={Imageurl} alt="" className="img" />
            <div className="rating">
            <span className="rating-text"> ⭐{rating}</span>
            <span>{movieType} </span>
            </div>   
            <strong className="movie-title">{title} </strong>       
       </div>
   </>
  )
}

export default MovieCard
