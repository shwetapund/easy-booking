import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = async ()=>{
    const response = await axios.post('/api/v1/logins',{
    email:email,
    password:password
})
alert(response?.data?.message)
if(response?.data?.success){
    localStorage.setItem('user', JSON.stringify(response?.data?.data))
   window.location.href='/'
}
    }
    return (
        <>
        <Navbar/>
            <div className='loginsignup'>
                <div className='loginsinup-container  '>
                    <h1>login</h1>
                    <div className='loginsingup-fields'>
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

                        <button type='button' onClick={login} >login</button>

                        <p className='loginsignup-login'>Don't have an account? <span className='loginsingup-login-span'><Link to='/signUp' className='loginsignup-link'>Signup</Link>
                        </span></p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Login