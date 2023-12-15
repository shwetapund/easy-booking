import react, { useState, useEffect } from 'react';
import "./Navbar.css";
import weblogo from "./../../assets/ticket.png"
import { Link } from "react-router-dom";
import logoutImg from "./../../assets/shutdown.png"
import axios from 'axios';
import logo from "./../Navbar/easybook-logo.png"

function Navbar() {
  const [address, setAddress] = useState('')
  const [user, setUser] = useState({});


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

  const admin = JSON.parse(localStorage.getItem("admin") || "{}")
  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(storeUser);

  }, [])
  return (

    <nav class="navbar ppn navbar-expand-lg color-bg">
      <div className="container-fluid">
        <Link className="navbar-brand  fs-5 color" to="/">
          <img src={weblogo} className='img-logo' />Easy Booking</Link>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse font-size" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-auto color">
            <li className="nav-item">
              <Link className="nav-link  me-5 color font-size " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-5 color font-size" aria-current="page" to="/booking">Booking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link me-5 color font-size" aria-current="page" to="/about">About</Link>
            </li>
            {user.email || admin.email ? null : <> <li className="nav-item">
              <Link className="nav-link me-5 color font-size" aria-current="page" to="/login">Login</Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link me-5 color font-size" aria-current="page" to="/signup">SignUp</Link>
              </li>

            </>}
            <li className="nav-item">
              <Link className="nav-link me-5 color" aria-current="page" to="/adminlogin"><img src="https://cdn-icons-png.flaticon.com/128/6024/6024190.png" alt="" className='img-admin' /><p className='admin-text'>Admin</p></Link>
            </li>
          </ul>
          <form class="d-flex" role="search">

            {/* <button class="btn btn-search" type="button" onClick={fetchLocation}>Search</button> */}
          </form>
          {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search Prefered" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          <div className='logout-text font-size'>
            <span className='ms-3'>Hello,</span> {user.name || admin.name || 'user!'}
            {user?.name || admin?.name ?
              (<span onClick={() => {
                localStorage.removeItem('user' && 'admin');
                window.location.href = "/login"
              }}>
                <img src={logoutImg} className='logoutimg' alt='' />
              </span>)
              :
              null
            }



          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
