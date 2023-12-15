import React, { useEffect, useState } from 'react'
import './AdminDashboard.css'
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';
import Navbar from './../../components/Navbar/Navbar'
import Footer from './../../components/Footer/Footer'
import admin from './../AdminDashboard/admin.svg'
function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [Imageurl, setImageurl] = useState('');
  const [duration, setDuration] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [movieType, setMovieType] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [movie, setMovie] = useState([])


  const addmovie = async () => {
    try {
      const response = await axios.post('/api/v1/movie', {
        title: title,
        Imageurl: Imageurl,
        duration: duration,
        releaseDate: releaseDate,
        movieType: movieType,
        rating: rating,
        description: description,
        language: language
      })
      if (response?.data?.success === true) {
        alert(response?.data?.message)
      }
    } catch (err) {
      console.log(err.message)
    }

  }


  useEffect(() => {
    const adminUser = JSON.parse(localStorage.getItem('admin'))
    if (!adminUser) {
      window.location.href = '/adminlogin'
      return
    }
  })

  const loadMovie = async () => {
    try {
      const responce = await axios.get('/api/v1/movies')
      setMovie(responce?.data?.data)
    } catch (err) {
      console.error(err.message);
    }
  }

  const remove = async (_id) => {
    try {
      const responce = await axios.delete(`/api/v1/movie/${_id}`)

      if (responce?.data?.success === true) {
        alert(responce?.data?.message)
        window.location.reload()
      }

    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    loadMovie()
  }, [])




  return (
    <>
      <Navbar />
      <div className='admin-container'>
        <div>
          <img src={admin} className='admin-img' />
        </div>

        <div className='admin-main-contanier'>
          <h1 className='text-aline'>Admin Dashboard</h1>
          <div className='admin-sub-contanier container mt-3'>
            <form>
              <input type="text" className="form-control text-color" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder='Enter movie name' />




              <input type="text" className="form-control" id="Imageurl" name="Imageurl" value={Imageurl} onChange={(e) => setImageurl(e.target.value)} required placeholder='Enter poster image' />




              <input type="text" className="form-control" id="duration" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required placeholder='Enter time duration' />



              <label htmlFor="releaseDate" className='release-date'>Release Date:</label>
              <input type="date" className="form-control" id="releaseDate" name="releaseDate" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />





              <select className="form-contro release-date" value={movieType} onChange={(e) => setMovieType(e.target.value)} >
                <option>Select Type</option>
                <option value={'Drama'}>Drama</option>
                <option value={'Action'}>Action</option>
                <option value={'Horror'}>Horror</option>
                <option value={'Other'}>Other</option>
              </select>

              <input type="text" className="form-control" id="rating" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} required placeholder='Enter movie rating (optional)' />




              <input type="text" className="form-control" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required placeholder='Enter movie discription (optional)' />





              <div className="form-group">
                <button type="button" className="btn btn-outline-danger d-block mx-auto my-2 px-5" onClick={addmovie}>
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>






      <h2 className='added-heading'>All Added Movie Show Here</h2>
      <hr></hr>

      <div className='showing-added-movie container mt-3'>

        {
          movie?.map((obj, i) => {
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


      <Footer />
    </>
  )
}

export default AdminDashboard
