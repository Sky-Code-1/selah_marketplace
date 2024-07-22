import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import supabase from '../config/supabaseConfig'

const LoginForm = () => {
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const handleLogin = async () => {
        let { data, error } = await supabase.auth.signInWithPassword(user)
        if(data.user) {
            console.log(data)
            navigate('/')
        }
        if(error) {
            alert(`Invalid Credentials`)
        }
    }
  return (
    <div className='reg-form-div'>
        <p className='bold-p'>Sign in To <span>Uniplaza</span></p>
        <p>Enter your details below</p>
        <form>
            <input placeholder='Email' type='email' name='email' value={user.email} onChange={onInputChange}/>
            <input placeholder='Password' type='password' name='password' value={user.password} onChange={onInputChange}/>
            <div>
                <button type='button' onClick={handleLogin}>Login</button>
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
