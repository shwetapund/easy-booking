import './Home.css';
import Navbar from './../../components/Navbar/Navbar'
import { useEffect, useState } from 'react';
import axios from 'axios'
import MovieCard from '../../components/MovieCard/MovieCard';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import longImg from "./../Home/horizontal.avif";
import bookmob from "./../Home/bookshow.jpg"

function Home() {
  const [movie, setMovie] = useState([])
  const [search, setSearch] = useState('')
  const [action, setAction] = useState([])
  const [drama, setDrama] = useState([])
  const [horror, setHorror] = useState([])

  const loadMovie = async () => {
    try {
      const responce = await axios.get('/api/v1/movies')
      setMovie(responce?.data?.data)
      const movieData = responce?.data?.data

      const actionMoviesData = movieData.filter(movie => movie.movieType === "Action");
      setAction(actionMoviesData);

      const dramaMoviesData = movieData.filter(movie => movie.movieType === "Drama");
      setDrama(dramaMoviesData);

      const horrorMoviesData = movieData.filter(movie => movie.movieType === "Horror");
      setHorror(horrorMoviesData)




    } catch (err) {
      console.error(err.message);
    }
  }

  console.log("Action =", action);

  const searchMovie = async () => {
    if (search === '') {
      loadMovie()
      return
    }
    try {
      const responce = await axios.get(`/app/v1/search/movie?q=${search}`)
      setMovie(responce?.data?.data)
      const movieData = responce?.data?.data

      const actionMoviesData = movieData.filter(movie => movie.movieType === "Action");
      setAction(actionMoviesData);

      const dramaMoviesData = movieData.filter(movie => movie.movieType === "Drama");
      setDrama(dramaMoviesData);

      const horrorMoviesData = movieData.filter(movie => movie.movieType === "Horror");
      setHorror(horrorMoviesData)

    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => { searchMovie() }, [search])

  useEffect(() => {
    loadMovie()
  }, [])

  return (
    <>
      <Navbar />
      <Carousel />
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        type="text"
        placeholder="Search Movies From here"
        className='input-box'
      />

      <img className='long-img' src={longImg} />

      <h1 className='now-showing text-center mt-5 '>NOW STREAMING</h1>

      <h2 className='action-heading'>Latest Action Movies🎬</h2>
      <div className='show-movie'>
        {
          action?.map((obj, i) => {
            const { _id, Imageurl, rating, movieType, title, language } = obj
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

      <h2 className='action-heading'>Most Popular Drama Movies 🎭</h2>
      <div className='show-movie'>
        {
          drama?.map((obj, i) => {
            const { _id, Imageurl, rating, movieType, title, language } = obj
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

      <h2 className='action-heading'>Horror Movies 😱</h2>
      <div className='show-movie'>
        {
          horror?.map((obj, i) => {
            const { _id, Imageurl, rating, movieType, title, language } = obj
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
      <div className='book-mob-container'>
        <div>
          <p className='text-mob'>Book your shows
            to <br/> watch offline</p>
            <p className='pp'>Save your favourites easily and always have something to watch.</p>
        </div>
        <div>< img className='bookmob-img' src={bookmob}/></div>
      </div>
      <Footer />
    </>
  )
}
export default Home
