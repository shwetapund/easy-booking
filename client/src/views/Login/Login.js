import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import showToast from 'crunchy-toast';
import Footer from '../../components/Footer/Footer';
import loginIMG from './../../assets/loginImg-1.svg';
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const login = async () => {
        try {
            const response = await axios.post('/api/v1/logins', {
                email: email,
                password: password
            })
      
            showToast(response?.data?.message, 'success', 3000)
            if (response?.data?.success) {
                localStorage.setItem('user', JSON.stringify(response?.data?.data))
                window.location.href = '/'
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        const findUser = JSON.parse(localStorage.getItem('user') || '{}')

        if (findUser?.email) {
            showToast('You are already logged In !', 'danger', 3000)
            window.location.href = '/';
        }
    },[])

    return (
        <>
            <Navbar />
            <div className='login-page'>
                <div>
                    <img src={loginIMG} className='login-img'/>
                </div>
                <div className='login-container'>
                    <h1 className='text-center regi-text'>Easy Booking</h1>
                    <div className='loginsingup-fields'>
                        <input type='text'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            placeholder='enter your email'
                            className='inputfields ip' />

                        <input type='text'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            placeholder='enter your password'
                            className='inputfields' />

                        <button type='button' onClick={login} >Login</button>

                        <p className='loginsignup-login'>Don't have an account? <span className='loginsingup-login-span'><Link to='/signUp' className='loginsignup-link'>Signup</Link>
                        </span></p>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}

    export default Login
