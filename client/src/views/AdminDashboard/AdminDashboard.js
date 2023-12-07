import React, { useEffect, useState } from 'react'
import './AdminDashboard.css'
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';
function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [Imageurl, setImageurl] = useState('');
  const [duration, setDuration] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [movieType, setMovieType] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [movie,setMovie]=useState([])

     
   const addmovie= async()=>{
       try{
        const response= await axios.post('/api/v1/movie',{
          title:title,
          Imageurl:Imageurl,
          duration:duration,
          releaseDate:releaseDate,
          movieType:movieType,
          rating:rating,
          description:description,
          language:language
        })
        if(response?.data?.success===true){
          alert(response?.data?.message)
        }
       }catch(err){
        console.log(err.message)
       }
   }


   useEffect(()=>{
    const adminUser=JSON.parse(localStorage.getItem('admin'))
    if(!adminUser){
      window.location.href='/adminlogin'
      return
    }
   })

   const loadMovie = async()=>{
    try{
        const responce=await axios.get('/api/v1/movies')
        setMovie(responce?.data?.data)
    }catch(err){
        console.error(err.message);
    }
   }

   useEffect(()=>{
     loadMovie()
   },[])



   

  


  return (
    <>
         <div className='admin-main-contanier'>
          <div className='admin-sub-contanier container mt-3'>
          <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="Imageurl">Image URL:</label>
          <input type="text" className="form-control" id="Imageurl" name="Imageurl" value={Imageurl} onChange={(e) => setImageurl(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration:</label>
          <input type="text" className="form-control" id="duration" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="releaseDate">Release Date:</label>
          <input type="date" className="form-control" id="releaseDate" name="releaseDate" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="movieType">Movie Type:</label>
          <input type="text" className="form-control" id="movieType" name="movieType" value={movieType} onChange={(e) => setMovieType(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input type="text" className="form-control" id="rating" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" className="form-control" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <input type="text" className="form-control" id="language" name="language" value={language} onChange={(e) => setLanguage(e.target.value)} required />
        </div>

        <div className="form-group">
          <button type="button" className="btn btn-outline-danger d-block mx-auto my-2 px-5" onClick={addmovie}>
            Submit
          </button>
        </div>
      </form>
          </div>
          <div className='admin-sub-contanier container mt-3'>
          
                {
                  movie?.map((obj,i)=>{
                    const {_id,Imageurl,rating,movieType,title,language}=obj
                    return <MovieCard
                    _id={_id}
                    key={i}
                      Imageurl={Imageurl}
                      rating={rating}
                      movieType={movieType}
                      title={title}
                      language={language}
                    />
                  })   
                }
               
           
          </div>
         </div>
    </>
  )
}

export default AdminDashboard
