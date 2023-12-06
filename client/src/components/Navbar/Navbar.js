import react, {useState, useEffect} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import logoutImg from "./../../assets/shutdown.png"
import axios from 'axios';

function Navbar() {
  const [address,setAddress]=useState('')

  const fetchLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        try {
          const response = await axios.get(apiUrl);
          if (response.data.display_name) {
            const formattedAddress = response.data.display_name;
            setAddress(formattedAddress);
          } else {
            setAddress('Address not found');
          }
        } catch (error) {
          console.error('Error fetching address:', error);
          setAddress('Error fetching address');
        }
      });
    } else {
      alert('Geolocation is not avilable in browser', 'warning', 3000);
    }
  }


  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <Link className="navbar-brand  fs-3 text-primary" to="/">Easy Booking</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fs-5 " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-auto ">
            <li className="nav-item">
              <Link className="nav-link active  me-5 color" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active me-5 color" aria-current="page" to="/booking">Booking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active me-5 color" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active me-5 color" aria-current="page" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active me-5 color" aria-current="page" to="/signup">SignUp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active me-5 color" aria-current="page" to="/adminlogin"><img src="https://cdn-icons-png.flaticon.com/128/6024/6024190.png" alt="" className='img-admin' /><p className='admin-text'>Admin</p></Link>
            </li>

          </ul>
          <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Location" aria-label="Search" value={address}/>
        <button class="btn btn-outline-primary" type="button" onClick={fetchLocation}>Search</button>
        </form>
        {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search Prefered" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}

        </div>
      </div>
    </nav>
  )
}
export default Navbar;