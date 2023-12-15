import './Home.css';
import Navbar from './../../components/Navbar/Navbar'
import { useEffect, useState } from 'react';
import axios from 'axios'
import MovieCard from '../../components/MovieCard/MovieCard';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';

function Home(){
   const [movie,setMovie]=useState([])
   const [search,setSearch]=useState('')
   const [action,setAction]=useState([])
   const [drama , setDrama]=useState([])
   const [horror,setHorror]=useState([])

   const loadMovie = async()=>{
    try{
        const responce= await axios.get('/api/v1/movies')
        setMovie(responce?.data?.data)
        const movieData = responce?.data?.data  

        const actionMoviesData = movieData.filter(movie => movie.movieType === "Action");
        setAction(actionMoviesData);

        const dramaMoviesData = movieData.filter(movie => movie.movieType === "Drama");
        setDrama(dramaMoviesData);

        const horrorMoviesData = movieData.filter(movie => movie.movieType === "Horror");
       setHorror(horrorMoviesData)

        

      
    }catch(err){
        console.error(err.message);
    }
   }

console.log("Action =",action);

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
        <Carousel/> 
        <input
           value={search}
           onChange={e => setSearch(e.target.value)}
           type="text"
           placeholder="Search Movies"
           className='input-box'
        />

       
      <h1 className='now-showing text-center mt-5'>NOW SHOWING</h1>

      <h2>Action</h2>
      <div className='show-movie'>
      {
                  action?.map((obj,i)=>{
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

      <h2>Drama</h2>
      <div className='show-movie'>
      {
                  drama?.map((obj,i)=>{
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

      <h2>Horror</h2>
      <div className='show-movie'>
      {
                  horror?.map((obj,i)=>{
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

            <Footer/>
        </>
    )
}
export default Home
