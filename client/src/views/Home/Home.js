import './Home.css';
import Navbar from './../../components/Navbar/Navbar'
import { useEffect, useState } from 'react';
import axios from 'axios'
import MovieCard from '../../components/MovieCard/MovieCard';

function Home(){
   const [movie,setMovie]=useState([])

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
    return(
        <>
        <Navbar/>
            <div className='show-movie'>
                {
                  movie?.map((obj,i)=>{
                    const {Imageurl,rating,movieType,title}=obj
                    return <MovieCard
                    key={i}
                      Imageurl={Imageurl}
                      rating={rating}
                      movieType={movieType}
                      title={title}
                    />
                  })   
                }
            </div>
        </>
    )
}
export default Home
