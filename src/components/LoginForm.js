import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [user, setUser] = useState({
        name: '',
        password: ''
    })
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const login = () => {
        alert('logging in')
    }
    const navigate = useNavigate()
  return (
    <div className='reg-form-div'>
        <p className='bold-p'>Sign in To <span>Uniplaza</span></p>
        <p>Enter your details below</p>
        <form>
            <input placeholder='Email' name='name' value={user.name} onChange={onInputChange}/>
            <input placeholder='Password'name='password' value={user.password} onChange={onInputChange}/>
            <div>
                <button type='button' onClick={login}>Login</button>
                <Link>Forget Password</Link>
            </div>
            <button type='button'>Sign In With Google</button>
            <button type='button' onClick={() => {
                navigate('/register')
            }}>Create an Account</button>
        </form>
    </div>
  )
}

export default LoginForm
