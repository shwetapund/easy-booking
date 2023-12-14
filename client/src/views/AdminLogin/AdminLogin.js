import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './../Login/Login.css';
import axios from 'axios';
import adminlogin from "./../../assets/admin-login.svg"
import "./AdminLogin.css";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {

    try {
      const response = await axios.post('/api/v1/admin/logins', {
        email: email,
        password: password,
      });

      alert(response?.data?.message);

      if (response?.data?.success) {
        localStorage.setItem('admin', JSON.stringify(response?.data?.data));
        window.location.href = '/admin-dashboard';
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  }
  useEffect(() => {
    try {
      const adminUser = JSON.parse(localStorage.getItem('admin') || {})
      if (adminUser) {
        window.location.href = '/admin-dashboard'
      }
    } catch (err) {
      console.log(err.message)
    }
  }, [])
  return (
    <>
    <Navbar/>
    <div className='loginsignup login-admin'>
      <div>
        <img src={adminlogin} className='login-img' />
      </div>
      <div className='loginsinup-container '>
        <h1 className='text-center regi-text'>Admin Login</h1>
        <div className='loginsingup-fields'>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            className='inputfields'
          />

          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            className='inputfields'
          />

          <button type='button' onClick={login}>
            Login
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AdminLogin;
