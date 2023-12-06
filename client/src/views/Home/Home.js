import './Home.css';
import Navbar from './../../components/Navbar/Navbar'
import { useEffect, useState } from 'react';
import axios from 'axios'
import MovieCard from '../../components/MovieCard/MovieCard';
import { Link } from 'react-router-dom';

function Home(){
   const [movie,setMovie]=useState([])
   const [search,setSearch]=useState('')

   const loadMovie = async()=>{
    try{
        const responce=await axios.get('/api/v1/movies')
        setMovie(responce?.data?.data)
    }catch(err){
        console.error(err.message);
    }
   }

   const searchMovie = async()=>{
    if(search===''){
      loadMovie()
      return
    }
    try{
      const responce= await axios.get(`/app/v1/search/movie?q=${search}`)
      setMovie(responce?.data?.data)
    }catch(err){
      console.log(err.message)
    }
   }

   useEffect(()=>{searchMovie()},[search])


   useEffect(()=>{
     loadMovie()
   },[])
    return(
        <>
        <Navbar/>
        <input
           value={search}
           onChange={e => setSearch(e.target.value)}
           type="text"
           placeholder="Search Movies"
           className='input-box'
        />
      <h1 className='now-showing'>NOW SHOWING </h1>
            <div className='show-movie'>
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
                <Link to ='/showing=booking' className='view-all'> VIEW ALL   </Link>
            </div>
        </>
    )
}
export default Home
