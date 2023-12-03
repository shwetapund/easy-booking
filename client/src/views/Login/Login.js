import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
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

                        <button type='button' >login</button>

                        <p className='loginsignup-login'>Don't have an account? <span className='loginsingup-login-span'><Link to='/signup' className='loginsignup-link'>Signup</Link>
                        </span></p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Login