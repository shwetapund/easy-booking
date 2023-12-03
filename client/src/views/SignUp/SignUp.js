import react, { useState } from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom'

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [gender, setGender] = useState('female')

    return (
        <>
            <div className='loginsignup'>
                <div className='loginsinup-container'>
                    <h1>SignUp</h1>
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
                            <input type='radio' name='gender' id='male' className='radio'/>
                            <label htmlFor='male'>male</label>

                            <input type='radio' name='gender' id='female' className='radio' />
                            <label htmlFor='female' >female</label>
                        </div>
                        <button type='button'  >signup</button>
                        <p className='loginsignup-login'>already have an account? <span className='loginsingup-login-span'><Link to='/login' className='loginsignup-link'>login</Link>
                        </span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp