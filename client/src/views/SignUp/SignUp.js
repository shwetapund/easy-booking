import { useEffect, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar';
import showToast from 'crunchy-toast';
import Footer from '../../components/Footer/Footer';
import signupimg from "./../../assets/signup-img.svg"

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [gender, setGender] = useState('female')

    const signup = async () => {
        if (!name) {
            alert('name is required');
            return
        }

        if (!email) {
            alert('email is required');
            return
        }

        if (!password) {
            alert('password is required');
            return
        }

        if (!mobileNo) {
            alert('mobile no is required');
            return
        }
        const response = await axios.post('/api/v1/signups', {
            email: email,
            name: name,
            password: password,
            mobileNo: mobileNo,
            gender: gender
        })

        showToast(response?.data?.message, 'success', 3000)
        if (response?.data?.success) {
            window.location.href = '/login'
        }
    }

    useEffect(() => {
        const userfinder = JSON.parse(localStorage.getItem('user') || '{}')

        if (userfinder?.email) {
            showToast('You are already logged in!', 'danger', 3000);
            window.location.href = '/';
        }

    }, [])
    return (
        <>
            <Navbar />
            <div className='loginsignup'>
                <div>
                    <img src={signupimg} className='signup-img'/>
                </div>
                <div className='loginsinup-container'>
                    <h1 className='text-center regi-text'>Easy Booking</h1>
                    <div className='loginsingup-fields'>
                        <input type='text'
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            placeholder='enter your name'
                            className='inputfields' />

                        <input type='text'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            placeholder='enter your email'
                            className='inputfields' />

                        <input type='text'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            placeholder='enter your password'
                            className='inputfields' />

                        <input type='text'
                            value={mobileNo}
                            onChange={(e) => {
                                setMobileNo(e.target.value)
                            }}
                            placeholder='enter your mobile no'
                            className='inputfields' />
                        <div>
                            <input type='radio'
                                name='gender'
                                id='male'
                                className='radio'
                                checked={gender === 'male'}
                                onClick={() => {
                                    setGender('male')
                                }} />
                            <label htmlFor='male' className='gender-text'>&nbsp;Male</label>

                            <input type='radio'
                                name='gender'
                                id='female'
                                className='radio'
                                checked={gender === 'female'}
                                onClick={() => {
                                    setGender('female')
                                }} />
                            <label htmlFor='female' className='gender-text'>&nbsp;Female</label>
                        </div>
                        <button type='button' onClick={signup} >Signup</button>
                        <p className='loginsignup-login'>Already have an account? <span className='loginsingup-login-span'><Link to='/login' className='loginsignup-link'>login</Link>
                        </span></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default SignUp